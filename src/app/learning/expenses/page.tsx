import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { TrendingDown, Zap, Users, ShieldAlert, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "What are Expenses in Accounting? | Accounting Scenarios",
  description:
    "Learn about expenses in accounting. Understand operating expenses, COGS, and how expenses decrease equity by reducing profit.",
  openGraph: {
    title: "What are Expenses in Accounting?",
    description:
      "Learn about operating expenses, COGS, and how expenses decrease equity.",
    type: "article",
  },
};

export default function ExpensesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What are Expenses in Accounting?",
        description:
          "An in-depth guide on accounting expenses, COGS, operating expenses, and their impact on net income.",
        author: {
          "@type": "Organization",
          name: "Accounting Scenarios",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an expense in simple terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An expense is the cost required for something; the money spent or cost incurred in an entity's efforts to generate revenue. Think of rent, salaries, or utility bills.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between an expense and a capital expenditure (CapEx)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An expense is a short-term cost consumed in the current period (like rent). CapEx is a long-term investment in an asset that will provide value over multiple years (like buying a building), which is then depreciated over time.",
            },
          },
          {
            "@type": "Question",
            name: "What is COGS (Cost of Goods Sold)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "COGS refers to the direct costs of producing the goods sold by a company. This amount includes the cost of the materials and labor directly used to create the good, but excludes indirect expenses like distribution or sales force costs.",
            },
          },
          {
            "@type": "Question",
            name: "How does the matching principle dictate the recognition of expenses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The matching principle requires that expenses be reported in the same period as the revenues they helped to generate. If a company sells a product in December, the cost of that product (expense) must also be recorded in December, even if the cash was paid in November.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is an expense in simple terms?",
      answer:
        "An expense is the cost required for something; the money spent or cost incurred in an entity's efforts to generate revenue. Think of rent, salaries, or utility bills.",
    },
    {
      question:
        "What is the difference between an expense and a capital expenditure (CapEx)?",
      answer:
        "An expense is a short-term cost consumed in the current period (like rent). CapEx is a long-term investment in an asset that will provide value over multiple years (like buying a building), which is then depreciated over time.",
    },
    {
      question: "What is COGS (Cost of Goods Sold)?",
      answer:
        "COGS refers to the direct costs of producing the goods sold by a company. This amount includes the cost of the materials and labor directly used to create the good, but excludes indirect expenses like distribution or sales force costs.",
    },
    {
      question:
        "How does the matching principle dictate the recognition of expenses?",
      answer:
        "The matching principle requires that expenses be reported in the same period as the revenues they helped to generate. If a company sells a product in December, the cost of that product (expense) must also be recorded in December, even if the cash was paid in November.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[50%] left-[20%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Expenses
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The costs incurred by a business in the process of generating
            revenue. They represent the "cost of doing business."
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Common Operating Expenses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Salaries & Wages</h3>
                <p className="text-zinc-400 text-sm">
                  Paying employees for their time and effort to run the business
                  operations.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Utilities</h3>
                <p className="text-zinc-400 text-sm">
                  Costs for electricity, water, and internet to keep the office
                  running.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insurance</h3>
                <p className="text-zinc-400 text-sm">
                  Premiums paid to protect the business against risks and
                  liabilities.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Software Subscriptions
                </h3>
                <p className="text-zinc-400 text-sm">
                  Monthly fees for tools like accounting software, CRM, or
                  design tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Net Income Formula Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="p-6 border border-green-500/30 bg-green-500/10 rounded-2xl text-center shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <h4 className="font-bold text-green-400 text-xl">Revenue</h4>
              </div>
              <div className="text-3xl font-bold text-zinc-500">-</div>
              <div className="p-6 border border-orange-500/30 bg-orange-500/10 rounded-2xl text-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <h4 className="font-bold text-orange-400 text-xl">Expenses</h4>
              </div>
              <div className="text-3xl font-bold text-zinc-500">=</div>
              <div className="p-6 border border-blue-500/30 bg-blue-500/10 rounded-2xl text-center shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <h4 className="font-bold text-blue-400 text-xl">
                  Net Income (Profit)
                </h4>
              </div>
            </div>
            <p className="text-center mt-8 text-zinc-400 text-sm italic">
              "Keeping expenses lower than revenue is the fundamental rule for
              generating profit."
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Frequently Asked Questions
          </h2>
          <FAQ faqs={faqs} />
        </section>
      </main>
    </div>
  );
}
