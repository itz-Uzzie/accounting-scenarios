"use client";

import { useState, useMemo } from "react";
import {
  useGetScenariosQuery,
  useAddScenarioMutation,
  useUpdateScenarioMutation,
  useDeleteScenarioMutation,
  AccountingRule,
} from "@/store/api/scenariosApi";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  AlertCircle,
  Loader2,
  X,
  Save,
} from "lucide-react";

export default function ScenariosManager() {
  const {
    data: rules = [],
    isLoading,
    isError,
    error,
  } = useGetScenariosQuery();
  const [addScenario] = useAddScenarioMutation();
  const [updateScenario] = useUpdateScenarioMutation();
  const [deleteScenario] = useDeleteScenarioMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRule, setEditingRule] = useState<AccountingRule | null>(null);
  const [formData, setFormData] = useState({
    category: "",
    scenario: "",
    debit: "",
    credit: "",
    extra: "",
  });

  const groupedRules = useMemo(() => {
    const filtered = rules.filter(
      (rule) =>
        rule.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rule.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return filtered.reduce(
      (acc, rule) => {
        const category = rule.category || "Uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(rule);
        return acc;
      },
      {} as Record<string, AccountingRule[]>,
    );
  }, [rules, searchTerm]);

  const handleOpenModal = (rule: AccountingRule | null = null) => {
    if (rule) {
      setEditingRule(rule);
      setFormData({
        category: rule.category,
        scenario: rule.scenario,
        debit: rule.debit,
        credit: rule.credit,
        extra: rule.extra || "",
      });
    } else {
      setEditingRule(null);
      setFormData({
        category: "",
        scenario: "",
        debit: "",
        credit: "",
        extra: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingRule(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingRule) {
        await updateScenario({
          id: editingRule.id,
          changes: formData,
        }).unwrap();
      } else {
        await addScenario(formData).unwrap();
      }
      handleCloseModal();
    } catch (err: any) {
      alert(err.message || "Operation failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this scenario?")) return;
    try {
      await deleteScenario(id).unwrap();
    } catch (err: any) {
      alert(err.message || "Delete failed");
    }
  };

  if (isLoading && rules.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
        <p className="text-zinc-400 animate-pulse">Loading scenarios...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full space-y-8 animate-fade-in">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search scenarios or categories..."
              className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-500/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add New Scenario
          </button>
        </div>

        {isError && (
          <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {typeof error === "string" ? error : "Failed to fetch scenarios"}
          </div>
        )}

        {/* Grouped Tables */}
        {Object.entries(groupedRules).length > 0 ? (
          Object.entries(groupedRules)
            .sort(([, a], [, b]) => b.length - a.length)
            .map(([category, categoryRules]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-white/90 px-2 border-l-4 border-purple-500">
                    {category}
                  </h2>
                  <span className="text-xs font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                    {categoryRules.length} items
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-white/5 text-zinc-400 font-medium border-b border-white/10">
                        <tr>
                          <th className="px-6 py-4">Scenario</th>
                          <th className="px-6 py-4">Debit</th>
                          <th className="px-6 py-4">Credit</th>
                          <th className="px-6 py-4">Extra Info</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {categoryRules.map((rule) => (
                          <tr
                            key={rule.id}
                            className="hover:bg-white/3 transition-colors group"
                          >
                            <td className="px-6 py-4 font-medium text-white/80">
                              {rule.scenario}
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-green-400/90 font-mono">
                                {rule.debit}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-red-400/90 font-mono">
                                {rule.credit}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-zinc-500 italic">
                              {rule.extra || "—"}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => handleOpenModal(rule)}
                                  className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors"
                                  title="Edit"
                                >
                                  <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDelete(rule.id)}
                                  className="p-2 hover:bg-red-500/10 rounded-lg text-zinc-400 hover:text-red-400 transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="text-center py-20 bg-white/2 rounded-3xl border border-dashed border-white/10">
            <p className="text-zinc-500">
              No accounting scenarios found. Try a different search or add one.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden scale-in animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <h3 className="text-lg font-bold">
                {editingRule ? "Edit Scenario" : "Add New Scenario"}
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider"
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  required
                  type="text"
                  placeholder="e.g. Sales, Purchases, Assets"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="scenario"
                  className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider"
                >
                  Scenario Description
                </label>
                <input
                  id="scenario"
                  name="scenario"
                  required
                  type="text"
                  placeholder="e.g. Sold goods on credit"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  value={formData.scenario}
                  onChange={(e) =>
                    setFormData({ ...formData, scenario: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="debit"
                    className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider"
                  >
                    Debit Account
                  </label>
                  <input
                    id="debit"
                    name="debit"
                    required
                    type="text"
                    placeholder="e.g. Accounts Receivable"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-mono"
                    value={formData.debit}
                    onChange={(e) =>
                      setFormData({ ...formData, debit: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="credit"
                    className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider"
                  >
                    Credit Account
                  </label>
                  <input
                    id="credit"
                    name="credit"
                    required
                    type="text"
                    placeholder="e.g. Sales Revenue"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-mono"
                    value={formData.credit}
                    onChange={(e) =>
                      setFormData({ ...formData, credit: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="extra"
                  className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider"
                >
                  Extra Information (Optional)
                </label>
                <textarea
                  id="extra"
                  name="extra"
                  placeholder="Additional context or notes..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all min-h-[80px] resize-none"
                  value={formData.extra}
                  onChange={(e) =>
                    setFormData({ ...formData, extra: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3 border border-white/10 hover:bg-white/5 rounded-xl font-medium transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all shadow-xl shadow-white/10 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingRule ? "Update Scenario" : "Save Scenario"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
