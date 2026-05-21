import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { Scale, ArrowRight, Equal } from "lucide-react";

export const metadata: Metadata = {
  title: "The Accounting Equation Explained | Accounting Scenarios",
  description:
    "Master the fundamental accounting equation: Assets = Liabilities + Equity. The foundation of double-entry bookkeeping.",
  openGraph: {
    title: "The Accounting Equation Explained",
    description:
      "Master the fundamental accounting equation: Assets = Liabilities + Equity.",
    type: "article",
  },
};

export default function AccountingEquationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "The Accounting Equation Explained",
        description:
          "Understand the core of double-entry bookkeeping: Assets = Liabilities + Equity, with visual examples and detailed FAQs.",
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
            name: "What is the accounting equation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The accounting equation is the foundation of double-entry bookkeeping. It states that a company's total assets must always equal the sum of its liabilities and its shareholders' equity: Assets = Liabilities + Equity.",
            },
          },
          {
            "@type": "Question",
            name: "Why must the accounting equation always balance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It must balance because every asset a company owns is financed either by borrowing money (liabilities) or by the owners' own money (equity). There is no other way to acquire an asset.",
            },
          },
          {
            "@type": "Question",
            name: "What is the expanded accounting equation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The expanded equation breaks down equity into its core components to show how profit impacts the balance. It is: Assets = Liabilities + Owner's Capital - Owner's Draws + Revenues - Expenses.",
            },
          },
          {
            "@type": "Question",
            name: "How does the accounting equation relate to the balance sheet and the going concern assumption?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The balance sheet is essentially a snapshot of the accounting equation at a specific point in time. Under the going concern assumption, it is assumed the business will continue to operate indefinitely, which justifies recording long-term assets at historical cost rather than liquidation value, preserving the balance of the equation over time.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is the accounting equation?",
      answer:
        "The accounting equation is the foundation of double-entry bookkeeping. It states that a company's total assets must always equal the sum of its liabilities and its shareholders' equity: Assets = Liabilities + Equity.",
    },
    {
      question: "Why must the accounting equation always balance?",
      answer:
        "It must balance because every asset a company owns is financed either by borrowing money (liabilities) or by the owners' own money (equity). There is no other way to acquire an asset.",
    },
    {
      question: "What is the expanded accounting equation?",
      answer:
        "The expanded equation breaks down equity into its core components to show how profit impacts the balance. It is: Assets = Liabilities + Owner's Capital - Owner's Draws + Revenues - Expenses.",
    },
    {
      question:
        "How does the accounting equation relate to the balance sheet and the going concern assumption?",
      answer:
        "The balance sheet is essentially a snapshot of the accounting equation at a specific point in time. Under the going concern assumption, it is assumed the business will continue to operate indefinitely, which justifies recording long-term assets at historical cost rather than liquidation value, preserving the balance of the equation over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[40%] w-[40%] h-[40%] bg-yellow-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              The Accounting Equation
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The foundation of double-entry bookkeeping. Every single transaction
            a business makes will affect this equation, but it must ALWAYS
            remain in balance.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            The Golden Rule Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="p-6 border-2 border-blue-500/50 bg-blue-500/10 rounded-2xl w-full md:w-1/3 text-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <h4 className="font-bold text-blue-400 text-2xl">Assets</h4>
                <p className="text-zinc-400 text-sm mt-2">What you OWN</p>
              </div>
              <div className="p-4 bg-white/5 rounded-full">
                <Equal className="w-8 h-8 text-white/50" />
              </div>
              <div className="flex flex-col w-full md:w-2/3 gap-4">
                <div className="p-6 border border-red-500/30 bg-red-500/10 rounded-2xl text-center shadow-lg">
                  <h4 className="font-bold text-red-400 text-xl">
                    Liabilities
                  </h4>
                  <p className="text-zinc-400 text-sm mt-2">What you OWE</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-1 bg-zinc-600 rounded-full rotate-90 md:rotate-0"></div>
                  <div className="absolute text-xl font-bold text-zinc-500">
                    +
                  </div>
                </div>
                <div className="p-6 border border-purple-500/30 bg-purple-500/10 rounded-2xl text-center shadow-lg">
                  <h4 className="font-bold text-purple-400 text-xl">Equity</h4>
                  <p className="text-zinc-400 text-sm mt-2">
                    What you are WORTH
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[40px]"></div>
              <h4 className="font-bold text-lg mb-2 text-yellow-400">
                Why does it balance?
              </h4>
              <p className="text-zinc-400">
                Because every asset the company owns had to be financed somehow.
                It was either bought with borrowed money (Liabilities) or bought
                with the owners' money/profits (Equity).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Transaction Example
          </h2>
          <div className="space-y-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">1. Starting a Business</h3>
              <p className="text-zinc-400 mb-4">
                You invest $10,000 of your own money to start a company.
              </p>
              <div className="flex flex-wrap gap-4 items-center font-mono text-sm">
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded">
                  Assets (Cash) +$10k
                </span>
                <Equal className="w-4 h-4 text-zinc-500" />
                <span className="text-red-400 bg-red-500/10 px-3 py-1 rounded">
                  Liabilities $0
                </span>
                <span className="text-zinc-500">+</span>
                <span className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded">
                  Equity +$10k
                </span>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">2. Taking a Bank Loan</h3>
              <p className="text-zinc-400 mb-4">
                The company borrows $5,000 from the bank.
              </p>
              <div className="flex flex-wrap gap-4 items-center font-mono text-sm">
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded">
                  Assets (Cash) +$5k
                </span>
                <Equal className="w-4 h-4 text-zinc-500" />
                <span className="text-red-400 bg-red-500/10 px-3 py-1 rounded">
                  Liabilities (Loan) +$5k
                </span>
                <span className="text-zinc-500">+</span>
                <span className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded">
                  Equity $0
                </span>
              </div>
            </div>
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
