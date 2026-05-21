import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { ArrowRightLeft, PlusCircle, MinusCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Debits and Credits Explained | Accounting Scenarios",
  description:
    "Learn how debits and credits work in accounting. Understand the normal balances of accounts and how to record transactions.",
  openGraph: {
    title: "Debits and Credits Explained",
    description: "Learn how debits and credits work in accounting.",
    type: "article",
  },
};

export default function DebitsAndCreditsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Debits and Credits Explained",
        description:
          "A deep dive into debits and credits, the double-entry accounting system, normal balances, and transaction recording rules.",
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
            name: "What do debit and credit actually mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In accounting, debit simply means 'left' and credit means 'right'. They do not inherently mean 'increase' or 'decrease' or 'good' or 'bad'. Their effect depends entirely on the type of account being modified.",
            },
          },
          {
            "@type": "Question",
            name: "How do I remember which accounts increase with a debit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can use the acronym DEALER. Dividends, Expenses, and Assets (DEA) increase with a Debit. Liabilities, Equity, and Revenue (LER) increase with a Credit.",
            },
          },
          {
            "@type": "Question",
            name: "Why does my bank say they 'credited' my account when I deposit money?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When you deposit money into a bank, you become a liability to the bank (they owe you that money). Since liabilities increase with a credit, the bank credits your account on their books. On your books, however, your cash asset increases with a debit.",
            },
          },
          {
            "@type": "Question",
            name: "What is a contra account and how does it relate to debits and credits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A contra account is an account used to reduce the value of a related account. Its normal balance is the opposite of the account it modifies. For example, Accumulated Depreciation is a contra-asset account, so its normal balance is a credit, whereas a normal asset is a debit.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What do debit and credit actually mean?",
      answer:
        "In accounting, debit simply means 'left' and credit means 'right'. They do not inherently mean 'increase' or 'decrease' or 'good' or 'bad'. Their effect depends entirely on the type of account being modified.",
    },
    {
      question: "How do I remember which accounts increase with a debit?",
      answer:
        "You can use the acronym DEALER. Dividends, Expenses, and Assets (DEA) increase with a Debit. Liabilities, Equity, and Revenue (LER) increase with a Credit.",
    },
    {
      question:
        "Why does my bank say they 'credited' my account when I deposit money?",
      answer:
        "When you deposit money into a bank, you become a liability to the bank (they owe you that money). Since liabilities increase with a credit, the bank credits your account on their books. On your books, however, your cash asset increases with a debit.",
    },
    {
      question:
        "What is a contra account and how does it relate to debits and credits?",
      answer:
        "A contra account is an account used to reduce the value of a related account. Its normal balance is the opposite of the account it modifies. For example, Accumulated Depreciation is a contra-asset account, so its normal balance is a credit, whereas a normal asset is a debit.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[60%] right-[20%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <ArrowRightLeft className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Debits & Credits
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The language used to record financial transactions. In double-entry
            accounting, for every debit, there must be an equal and opposite
            credit.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            The DEALER Mnemonic
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-blue-500/30 bg-blue-500/10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-blue-400/20">
                  <PlusCircle className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 relative z-10">
                  Increase with a DEBIT
                </h3>
                <ul className="space-y-3 font-semibold text-lg relative z-10">
                  <li>
                    <span className="text-white/50 w-8 inline-block">D</span>
                    ividends
                  </li>
                  <li>
                    <span className="text-white/50 w-8 inline-block">E</span>
                    xpenses
                  </li>
                  <li>
                    <span className="text-white/50 w-8 inline-block">A</span>
                    ssets
                  </li>
                </ul>
              </div>
              <div className="p-6 border border-purple-500/30 bg-purple-500/10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-purple-400/20">
                  <PlusCircle className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4 relative z-10">
                  Increase with a CREDIT
                </h3>
                <ul className="space-y-3 font-semibold text-lg relative z-10">
                  <li>
                    <span className="text-white/50 w-8 inline-block">L</span>
                    iabilities
                  </li>
                  <li>
                    <span className="text-white/50 w-8 inline-block">E</span>
                    quity
                  </li>
                  <li>
                    <span className="text-white/50 w-8 inline-block">R</span>
                    evenue
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6 text-zinc-400 text-sm">
              Note: To decrease an account, you do the opposite of what you
              would do to increase it.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            T-Account Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl flex justify-center">
            <div className="w-full max-w-sm">
              <div className="text-center pb-2 border-b-4 border-white/20 mb-4">
                <h3 className="text-xl font-bold text-white/90">
                  Account Name (e.g., Cash)
                </h3>
              </div>
              <div className="flex justify-between relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2 h-32"></div>
                <div className="w-1/2 pr-4 text-center">
                  <h4 className="font-bold text-blue-400 mb-2">Debit (Dr.)</h4>
                  <p className="text-sm text-zinc-400 text-left pl-4">
                    Left side.
                  </p>
                  <p className="text-sm text-zinc-400 text-left pl-4">
                    Increases assets.
                  </p>
                </div>
                <div className="w-1/2 pl-4 text-center">
                  <h4 className="font-bold text-purple-400 mb-2">
                    Credit (Cr.)
                  </h4>
                  <p className="text-sm text-zinc-400 text-left pl-4">
                    Right side.
                  </p>
                  <p className="text-sm text-zinc-400 text-left pl-4">
                    Decreases assets.
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
