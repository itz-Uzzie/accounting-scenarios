import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  Briefcase,
  CreditCard,
  TrendingUp,
  TrendingDown,
  PieChart,
  Scale,
  ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Accounting Basics | Accounting Scenarios",
  description:
    "Master the fundamental terms of accounting: Assets, Liabilities, Equity, Revenue, and Expenses.",
};

export default function LearningPage() {
  const terms = [
    {
      title: "Assets",
      icon: Briefcase,
      color: "text-blue-400",
      description:
        "Resources owned by a business that have future economic value. Examples include cash, inventory, equipment, and accounts receivable.",
    },
    {
      title: "Liabilities",
      icon: CreditCard,
      color: "text-red-400",
      description:
        "Obligations or debts that a business owes to external parties. Common examples are loans, accounts payable, and accrued expenses.",
    },
    {
      title: "Equity (Capital)",
      icon: PieChart,
      color: "text-purple-400",
      description:
        "The owner's residual interest in the assets of the business after deducting all liabilities. It represents the net worth of the company.",
    },
    {
      title: "Revenue (Income)",
      icon: TrendingUp,
      color: "text-green-400",
      description:
        "The amount of money a business earns from selling goods or providing services. It increases the owner’s equity.",
    },
    {
      title: "Expenses",
      icon: TrendingDown,
      color: "text-orange-400",
      description:
        "The costs incurred by a business in the process of generating revenue. Examples include rent, utilities, salaries, and marketing costs.",
    },
    {
      title: "The Accounting Equation",
      icon: Scale,
      color: "text-yellow-400",
      description:
        "The foundation of double-entry bookkeeping: Assets = Liabilities + Equity. Every transaction must keep this equation in balance.",
    },
    {
      title: "Debits & Credits",
      icon: ArrowRightLeft,
      color: "text-indigo-400",
      description:
        "The system used to record transactions. Debits increase asset/expense accounts, while Credits increase liability/equity/revenue accounts.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: "Accounting Basics",
    description:
      "Fundamental concepts and terms in accounting for learners and students.",
    educationalLevel: "Beginner",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-5xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
            Accounting Fundamentals
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Before diving into complex scenarios, it's essential to understand
            the core building blocks of financial record-keeping.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map((term, idx) => (
            <div
              key={idx}
              className="p-8 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm hover:border-white/20  transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${term.color}`}
                >
                  <term.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white/90">
                  {term.title}
                </h2>
              </div>
              <p className="text-zinc-400 leading-relaxed text-base">
                {term.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pro Tip Section */}
        <div className="mt-16 p-8 border border-purple-500/20 bg-purple-500/5 rounded-3xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Scale className="w-24 h-24" />
          </div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            Golden Rule for Beginners
          </h3>
          <p className="text-zinc-400 leading-relaxed italic">
            "Every transaction has two sides. If you receive something of value,
            it is a Debit. If you give something of value or create an
            obligation, it is a Credit. The total Debits must always equal the
            total Credits."
          </p>
        </div>
      </main>
    </div>
  );
}
