import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { PieChart, Landmark, LineChart, HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Equity in Accounting? | Accounting Scenarios",
  description:
    "Learn about owner's equity, shareholders' equity, retained earnings, and how it represents the net worth of a business.",
  openGraph: {
    title: "What is Equity in Accounting?",
    description:
      "Learn about owner's equity, shareholders' equity, and retained earnings.",
    type: "article",
  },
};

export default function EquityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What is Equity in Accounting?",
        description:
          "A comprehensive guide on equity, including common stock, retained earnings, and real-world examples.",
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
            name: "What is equity in simple terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Equity is the portion of the company that truly belongs to the owners. If you sell all your assets and pay off all your debts, whatever money is left over is your equity.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Owner's Equity and Shareholders' Equity?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "They are conceptually the same thing, but 'Owner's Equity' is used for sole proprietorships, while 'Shareholders' Equity' is used for corporations that issue stock to multiple shareholders.",
            },
          },
          {
            "@type": "Question",
            name: "What are retained earnings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Retained earnings are the cumulative net income a company has earned over its lifetime, minus any dividends paid out to shareholders. It represents profits reinvested into the business.",
            },
          },
          {
            "@type": "Question",
            name: "How does comprehensive income affect equity?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Comprehensive income includes all changes in equity during a period except those resulting from investments by owners and distributions to owners. It encompasses net income and other comprehensive income (OCI), such as unrealized gains or losses on available-for-sale securities, which accumulate in Accumulated Other Comprehensive Income (AOCI) within the equity section.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is equity in simple terms?",
      answer:
        "Equity is the portion of the company that truly belongs to the owners. If you sell all your assets and pay off all your debts, whatever money is left over is your equity.",
    },
    {
      question:
        "What is the difference between Owner's Equity and Shareholders' Equity?",
      answer:
        "They are conceptually the same thing, but 'Owner's Equity' is used for sole proprietorships, while 'Shareholders' Equity' is used for corporations that issue stock to multiple shareholders.",
    },
    {
      question: "What are retained earnings?",
      answer:
        "Retained earnings are the cumulative net income a company has earned over its lifetime, minus any dividends paid out to shareholders. It represents profits reinvested into the business.",
    },
    {
      question: "How does comprehensive income affect equity?",
      answer:
        "Comprehensive income includes all changes in equity during a period except those resulting from investments by owners and distributions to owners. It encompasses net income and other comprehensive income (OCI), such as unrealized gains or losses on available-for-sale securities, which accumulate in Accumulated Other Comprehensive Income (AOCI) within the equity section.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <PieChart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Equity
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The owner's residual interest in the assets of the business after
            deducting all liabilities. It represents the true net worth.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Components of Equity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Common Stock</h3>
                <p className="text-zinc-400 text-sm">
                  Capital invested by owners in exchange for shares of the
                  company.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-400 rounded-xl">
                <LineChart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Retained Earnings</h3>
                <p className="text-zinc-400 text-sm">
                  Profits generated by the business that are kept and reinvested
                  rather than distributed.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl">
                <HandCoins className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Dividends</h3>
                <p className="text-zinc-400 text-sm">
                  Distributions of earnings to shareholders, which reduces total
                  equity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            The Equity Equation Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="p-6 border border-blue-500/30 bg-blue-500/10 rounded-2xl text-center shadow-lg">
                <h4 className="font-bold text-blue-400 text-xl">Assets</h4>
              </div>
              <div className="text-2xl font-bold text-zinc-500">-</div>
              <div className="p-6 border border-red-500/30 bg-red-500/10 rounded-2xl text-center shadow-lg">
                <h4 className="font-bold text-red-400 text-xl">Liabilities</h4>
              </div>
              <div className="text-2xl font-bold text-zinc-500">=</div>
              <div className="p-6 border border-purple-500/30 bg-purple-500/10 rounded-2xl text-center shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                <h4 className="font-bold text-purple-400 text-xl">Equity</h4>
              </div>
            </div>
            <p className="text-center mt-8 text-zinc-400 text-sm italic">
              "Equity is what remains when you subtract everything you owe from
              everything you own."
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
