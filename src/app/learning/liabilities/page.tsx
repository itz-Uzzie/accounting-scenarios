import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { CreditCard, Landmark, FileText, CalendarClock } from "lucide-react";

export const metadata: Metadata = {
  title: "What are Liabilities in Accounting? | Accounting Scenarios",
  description:
    "Explore the concept of liabilities in accounting. Understand short-term vs long-term obligations and how they impact a company's financial health.",
  openGraph: {
    title: "What are Liabilities in Accounting?",
    description:
      "Explore the concept of liabilities in accounting. Understand short-term vs long-term obligations.",
    type: "article",
  },
};

export default function LiabilitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What are Liabilities in Accounting?",
        description:
          "A comprehensive guide on liabilities, including current vs non-current liabilities, real-world examples, and academic FAQs.",
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
            name: "What is a liability for a beginner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A liability is simply money that a business owes to someone else. It's a debt or an obligation. Examples include a bank loan, an unpaid supplier invoice, or taxes owed to the government.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Accounts Payable and Notes Payable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Accounts Payable are short-term, informal debts to suppliers for goods or services purchased on credit. Notes Payable are formal, written promissory notes that often carry interest and can be short or long-term.",
            },
          },
          {
            "@type": "Question",
            name: "What are contingent liabilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contingent liabilities are potential obligations that depend on the outcome of a future event, such as a pending lawsuit or product warranties. They are only recorded if the outcome is probable and the amount can be reasonably estimated.",
            },
          },
          {
            "@type": "Question",
            name: "How does the matching principle apply to accrued liabilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The matching principle dictates that expenses must be recognized in the same period as the revenues they help generate. Accrued liabilities (like unpaid wages at year-end) ensure that expenses are recorded when incurred, regardless of when the cash is actually paid.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is a liability for a beginner?",
      answer:
        "A liability is simply money that a business owes to someone else. It's a debt or an obligation. Examples include a bank loan, an unpaid supplier invoice, or taxes owed to the government.",
    },
    {
      question:
        "What is the difference between Accounts Payable and Notes Payable?",
      answer:
        "Accounts Payable are short-term, informal debts to suppliers for goods or services purchased on credit. Notes Payable are formal, written promissory notes that often carry interest and can be short or long-term.",
    },
    {
      question: "What are contingent liabilities?",
      answer:
        "Contingent liabilities are potential obligations that depend on the outcome of a future event, such as a pending lawsuit or product warranties. They are only recorded if the outcome is probable and the amount can be reasonably estimated.",
    },
    {
      question: "How does the matching principle apply to accrued liabilities?",
      answer:
        "The matching principle dictates that expenses must be recognized in the same period as the revenues they help generate. Accrued liabilities (like unpaid wages at year-end) ensure that expenses are recorded when incurred, regardless of when the cash is actually paid.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
              <CreditCard className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Liabilities
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Obligations or debts that a business owes to external parties. In
            simple terms, it's what the company owes.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Real-World Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Accounts Payable</h3>
                <p className="text-zinc-400 text-sm">
                  Money owed to suppliers for inventory or services purchased on
                  credit.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Bank Loans</h3>
                <p className="text-zinc-400 text-sm">
                  Money borrowed from a financial institution that must be
                  repaid with interest.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <CalendarClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Accrued Expenses</h3>
                <p className="text-zinc-400 text-sm">
                  Expenses incurred but not yet paid, such as employee wages at
                  month-end.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Credit Card Debt</h3>
                <p className="text-zinc-400 text-sm">
                  Outstanding balances on company credit cards used for
                  operating expenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Liabilities Classification Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto border-4 border-red-500/30 bg-red-500/10 rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                  <span className="font-bold text-xl text-red-400">
                    Liabilities
                  </span>
                </div>
              </div>
              <div className="flex md:flex-col gap-4">
                <div className="w-1 h-8 md:w-8 md:h-1 bg-zinc-600 mx-auto md:mx-0"></div>
              </div>
              <div className="flex flex-col gap-6 w-full md:w-auto">
                <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-xl text-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <h4 className="font-bold text-yellow-400 relative z-10">
                    Current Liabilities
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 relative z-10">
                    Due within 1 year
                  </p>
                </div>
                <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-xl text-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <h4 className="font-bold text-red-400 relative z-10">
                    Non-Current Liabilities
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 relative z-10">
                    Due after 1 year
                  </p>
                </div>
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
