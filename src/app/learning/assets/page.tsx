import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import FAQ from "@/components/faq";
import { Briefcase, Building, Car, DollarSign, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "What are Assets in Accounting? | Accounting Scenarios",
  description:
    "Learn about assets in accounting with real-world examples. Understand current vs non-current assets, and how they provide future economic value.",
  openGraph: {
    title: "What are Assets in Accounting?",
    description:
      "Learn about assets in accounting with real-world examples. Understand current vs non-current assets.",
    type: "article",
  },
};

export default function AssetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What are Assets in Accounting?",
        description:
          "An in-depth guide to understanding assets in accounting, including current and non-current assets, real-world examples, and FAQs.",
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
            name: "What is an asset in simple terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An asset is anything of value that a business owns. If you can sell it, use it to make products, or use it to pay off debts, it's an asset. Think of cash in the bank, the computers you use, or the building you operate from.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between current and non-current assets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Current assets are expected to be converted into cash or used up within one year (e.g., inventory, cash). Non-current (or long-term) assets are expected to provide value for more than one year (e.g., machinery, real estate).",
            },
          },
          {
            "@type": "Question",
            name: "How are intangible assets valued on the balance sheet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Intangible assets (like patents or trademarks) are initially recorded at cost. Over time, their value is systematically reduced through amortization, unless they have an indefinite useful life, in which case they are tested annually for impairment.",
            },
          },
          {
            "@type": "Question",
            name: "What criteria must be met for an item to be recognized as an asset under IFRS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under IFRS (International Financial Reporting Standards), an item is recognized as an asset if it is a present economic resource controlled by the entity as a result of past events. An economic resource is a right that has the potential to produce economic benefits.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is an asset in simple terms?",
      answer:
        "An asset is anything of value that a business owns. If you can sell it, use it to make products, or use it to pay off debts, it's an asset. Think of cash in the bank, the computers you use, or the building you operate from.",
    },
    {
      question:
        "What is the difference between current and non-current assets?",
      answer:
        "Current assets are expected to be converted into cash or used up within one year (e.g., inventory, cash). Non-current (or long-term) assets are expected to provide value for more than one year (e.g., machinery, real estate).",
    },
    {
      question: "How are intangible assets valued on the balance sheet?",
      answer:
        "Intangible assets (like patents or trademarks) are initially recorded at cost. Over time, their value is systematically reduced through amortization, unless they have an indefinite useful life, in which case they are tested annually for impairment.",
    },
    {
      question:
        "What criteria must be met for an item to be recognized as an asset under IFRS?",
      answer:
        "Under IFRS (International Financial Reporting Standards), an item is recognized as an asset if it is a present economic resource controlled by the entity as a result of past events. An economic resource is a right that has the potential to produce economic benefits.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative max-w-4xl mx-auto px-6 pt-20">
        <Breadcrumbs />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Briefcase className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Assets
            </h1>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Resources owned by a business that hold future economic value. If it
            puts money in your pocket or saves you from spending money, it's
            likely an asset.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Real-World Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-400 rounded-xl">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Cash & Cash Equivalents
                </h3>
                <p className="text-zinc-400 text-sm">
                  The most liquid asset. Includes bank accounts and treasury
                  bills.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Inventory</h3>
                <p className="text-zinc-400 text-sm">
                  Goods waiting to be sold. A coffee shop's coffee beans are
                  inventory.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Property & Equipment</h3>
                <p className="text-zinc-400 text-sm">
                  Long-term assets like office buildings, laptops, and desks.
                </p>
              </div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Vehicles</h3>
                <p className="text-zinc-400 text-sm">
                  Delivery vans or company cars used to generate revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white/90">
            Asset Classification Diagram
          </h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto border-4 border-blue-500/30 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  <span className="font-bold text-xl text-blue-400">
                    Assets
                  </span>
                </div>
              </div>
              <div className="flex md:flex-col gap-4">
                <div className="w-1 h-8 md:w-8 md:h-1 bg-zinc-600 mx-auto md:mx-0"></div>
              </div>
              <div className="flex flex-col gap-6 w-full md:w-auto">
                <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-xl text-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <h4 className="font-bold text-green-400 relative z-10">
                    Current Assets
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 relative z-10">
                    Convert to cash &lt; 1 year
                  </p>
                </div>
                <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-xl text-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <h4 className="font-bold text-purple-400 relative z-10">
                    Non-Current Assets
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 relative z-10">
                    Provide value &gt; 1 year
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
