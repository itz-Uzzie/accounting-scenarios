import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { TrendingUp, ShoppingCart, Briefcase, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Revenue in Accounting? | Accounting Scenarios",
  description:
    "Discover the concept of revenue in accounting, the lifeblood of a business. Learn about sales revenue, service revenue, and revenue recognition principles.",
  openGraph: {
    title: "What is Revenue in Accounting?",
    description:
      "Discover the concept of revenue in accounting, the lifeblood of a business.",
    type: "article",
  },
};

export default function RevenuePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What is Revenue in Accounting?",
        description:
          "Learn about revenue, operating vs non-operating revenue, and accounting principles governing its recognition.",
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
            name: "What is revenue in simple terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Revenue is the money a business brings in from its normal operations. If you run a bakery, revenue is the money you make from selling bread and cakes. It's the 'top line' on an income statement.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between revenue and profit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Revenue is the total amount of money brought in by sales. Profit is what is left over after you subtract all your expenses from that revenue.",
            },
          },
          {
            "@type": "Question",
            name: "What is unearned or deferred revenue?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unearned revenue is money received by a business for a service or product that has not yet been provided. It is considered a liability until the service is delivered, at which point it becomes recognized revenue.",
            },
          },
          {
            "@type": "Question",
            name: "How does the core principle of ASC 606 apply to revenue recognition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ASC 606 states that an entity should recognize revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled in exchange for those goods or services, typically implemented via a five-step model.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is revenue in simple terms?",
      answer:
        "Revenue is the money a business brings in from its normal operations. If you run a bakery, revenue is the money you make from selling bread and cakes. It's the 'top line' on an income statement.",
    },
    {
      question: "What is the difference between revenue and profit?",
      answer:
        "Revenue is the total amount of money brought in by sales. Profit is what is left over after you subtract all your expenses from that revenue.",
    },
    {
      question: "What is unearned or deferred revenue?",
      answer:
        "Unearned revenue is money received by a business for a service or product that has not yet been provided. It is considered a liability until the service is delivered, at which point it becomes recognized revenue.",
    },
    {
      question:
        "How does the core principle of ASC 606 apply to revenue recognition?",
      answer:
        "ASC 606 states that an entity should recognize revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled in exchange for those goods or services, typically implemented via a five-step model.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Revenue
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The income generated from normal business operations. It increases
            the owner's equity and acts as the top line of the income statement.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Sources of Revenue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-400 rounded-xl">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Sales Revenue</h3>
                <p className="text-zinc-400 text-sm">
                  Money earned from selling physical goods, like clothing in a
                  retail store.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Service Revenue</h3>
                <p className="text-zinc-400 text-sm">
                  Income generated from providing services, like consulting or
                  repairs.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Interest & Dividends</h3>
                <p className="text-zinc-400 text-sm">
                  Non-operating revenue earned from investments or bank
                  accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Revenue Recognition Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto border-2 border-zinc-600 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:border-blue-500 group-hover:bg-blue-500/10">
                  <span className="font-semibold text-zinc-300 group-hover:text-blue-400">
                    1. Order Placed
                  </span>
                </div>
              </div>
              <div className="w-1 h-8 md:w-8 md:h-1 bg-zinc-600"></div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto border-2 border-green-500 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <span className="font-bold text-green-400">
                    2. Service Provided
                  </span>
                </div>
                <p className="text-xs text-green-400 font-semibold">
                  Revenue Recognized Here!
                </p>
              </div>
              <div className="w-1 h-8 md:w-8 md:h-1 bg-zinc-600"></div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto border-2 border-zinc-600 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:border-yellow-500 group-hover:bg-yellow-500/10">
                  <span className="font-semibold text-zinc-300 group-hover:text-yellow-400">
                    3. Cash Received
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-zinc-400 text-sm italic">
              "Under accrual accounting, revenue is recognized when the
              obligation is satisfied, not necessarily when cash changes hands."
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
