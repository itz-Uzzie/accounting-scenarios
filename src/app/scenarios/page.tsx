import { Metadata } from "next";
import ScenariosManager from "./scenarios-manager";
import Breadcrumbs from "@/components/breadcrumbs";
import { PlusCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Most Common Accounting Scenarios | Accounting Rules Engine",
  description:
    "Explore a comprehensive list of accounting rules and scenarios categorized for easy reference. Learn about debit and credit rules for various business transactions.",
  keywords:
    "accounting scenarios, accounting rules, double entry bookkeeping, debit and credit, financial accounting",
  openGraph: {
    title: "Most Common Accounting Scenarios",
    description:
      "Manage and explore categorized accounting rules with our intuitive engine.",
    type: "website",
  },
};

export default function ScenariosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Table",
    name: "Most Common Accounting Scenarios",
    description:
      "A categorized list of common accounting scenarios and their corresponding debit and credit entries.",
    about: {
      "@type": "Thing",
      name: "Accounting Rules",
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-7xl mx-auto px-6 pt-20">
        <Breadcrumbs />
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
            Most Common Accounting Scenarios
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Maintain and organize your double-entry bookkeeping rules. Grouped
            by category for professional financial management.
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white/90">
              <Info className="w-6 h-6 text-purple-400" />
              How to Read These Tables
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Every accounting scenario follows the rule of double-entry
              bookkeeping. This means that every transaction must have at least
              one debit and one credit, and the total debits must equal the
              total credits. Use the tables below to find common transactions
              and see exactly which accounts to debit (increase/decrease) and
              credit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-blue-500/30 bg-blue-500/10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-blue-400/10 group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">
                    Debit (Dr.)
                  </h3>
                </div>
                <ul className="space-y-3 text-zinc-300 relative z-10">
                  <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                    <span className="font-medium text-white/80">
                      Increases:
                    </span>{" "}
                    Assets & Expenses
                  </li>
                  <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="w-2 h-2 bg-red-400 rounded-full shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
                    <span className="font-medium text-white/80">
                      Decreases:
                    </span>{" "}
                    Liabilities, Equity, Revenue
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-purple-500/30 bg-purple-500/10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-purple-400/10 group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">
                    Credit (Cr.)
                  </h3>
                </div>
                <ul className="space-y-3 text-zinc-300 relative z-10">
                  <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                    <span className="font-medium text-white/80">
                      Increases:
                    </span>{" "}
                    Liabilities, Equity, Revenue
                  </li>
                  <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="w-2 h-2 bg-red-400 rounded-full shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
                    <span className="font-medium text-white/80">
                      Decreases:
                    </span>{" "}
                    Assets & Expenses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-zinc-400 mb-3">
            In the <strong>Debit</strong> column it shows which account should
            be debited.
          </p>
          <p className="text-zinc-400 mb-3">
            In the <strong>Credit</strong> column it shows which account should
            be credited.
          </p>
          <p className="text-zinc-400">
            The <strong>Extra Info</strong> column provides any additional
            context for the transaction.
          </p>
        </section>

        <ScenariosManager />
      </main>
    </div>
  );
}
