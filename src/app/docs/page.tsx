import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import { Book, HelpCircle, PlusCircle, Info, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation | Accounting Scenarios",
  description:
    "Learn how to interpret accounting tables and contribute new financial scenarios to the database.",
};

export default function DocsPage() {
  const sections = [
    {
      title: "Understanding the Tables",
      icon: Layout,
      content:
        'Each table represents a specific "Category" of accounting events (like Sales or Expenses). Within these tables, each row defines a "Scenario"—a real-world business event—and shows exactly which accounts should be Debited and Credited according to standard bookkeeping rules.',
    },
    {
      title: "How to Read a Scenario",
      icon: Info,
      content:
        'For every scenario, you will see two primary accounts. The "Debit" account shows where value is flowing into (or an increase in assets/expenses), while the "Credit" account shows where value is flowing out of (or an increase in liabilities/equity/revenue). The "Extra Info" column provides additional context for complex transactions.',
    },
    {
      title: "Contributing New Scenarios",
      icon: PlusCircle,
      iconColor: "text-green-400",
      content:
        'If you encounter a business transaction that is not yet listed, you can easily add it. Simply click the "Add New Scenario" button at the top of the Scenarios page. You will need to provide a category, a clear description of the event, and the corresponding Debit and Credit accounts.',
    },
    {
      title: "Why Categories Matter",
      icon: HelpCircle,
      content:
        "We group scenarios into categories to help you find relevant rules quickly. For example, all tax-related events are kept together, while daily operational expenses are grouped separately. Tables with more entries naturally rise to the top for easier access.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
            <Book className="w-4 h-4 text-blue-400" />
            User Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
            Documentation
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A guide to understanding accounting rules and contributing your own
            scenarios to the engine.
          </p>
        </header>

        <div className="grid gap-8">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className="p-8 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all">
                  <section.icon
                    className={`w-6 h-6 ${section.iconColor || "text-blue-400"}`}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 text-white/90">
                    {section.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 p-8 border border-white/10 bg-linear-to-br to-transparent rounded-3xl backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-2">Ready to contribute?</h3>
          <p className="text-zinc-500 text-sm">
            Head over to the scenarios page and help us build the most
            comprehensive database of accounting rules.
          </p>
        </div>
      </main>
    </div>
  );
}
