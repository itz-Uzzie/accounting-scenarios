import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/supabase";

export interface AccountingRule {
  id: string;
  created_at: string;
  category: string;
  scenario: string;
  debit: string;
  credit: string;
  extra?: string;
}

export type NewAccountingRule = Omit<AccountingRule, "id" | "created_at">;

export const scenariosApi = createApi({
  reducerPath: "scenariosApi",
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: 3600, // Cache remains for 1 hour even if no component is using it
  tagTypes: ["Scenarios"],
  endpoints: (builder) => ({
    getScenarios: builder.query<AccountingRule[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("accounting_rules")
          .select("*")
          .order("category", { ascending: true });

        if (error) return { error };
        return { data: data as AccountingRule[] };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Scenarios" as const, id })),
              { type: "Scenarios", id: "LIST" },
            ]
          : [{ type: "Scenarios", id: "LIST" }],
    }),
    addScenario: builder.mutation<AccountingRule, NewAccountingRule>({
      queryFn: async (newScenario) => {
        const { data, error } = await supabase
          .from("accounting_rules")
          .insert([newScenario])
          .select()
          .single();

        if (error) return { error };
        return { data: data as AccountingRule };
      },
      invalidatesTags: [{ type: "Scenarios", id: "LIST" }],
    }),
    updateScenario: builder.mutation<
      AccountingRule,
      { id: string; changes: Partial<NewAccountingRule> }
    >({
      queryFn: async ({ id, changes }) => {
        const { data, error } = await supabase
          .from("accounting_rules")
          .update(changes)
          .eq("id", id)
          .select()
          .single();

        if (error) return { error };
        return { data: data as AccountingRule };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Scenarios", id }],
    }),
    deleteScenario: builder.mutation<void, string>({
      queryFn: async (id) => {
        const { error } = await supabase
          .from("accounting_rules")
          .delete()
          .eq("id", id);

        if (error) return { error };
        return { data: undefined };
      },
      invalidatesTags: [{ type: "Scenarios", id: "LIST" }],
    }),
  }),
});

export const {
  useGetScenariosQuery,
  useAddScenarioMutation,
  useUpdateScenarioMutation,
  useDeleteScenarioMutation,
} = scenariosApi;
