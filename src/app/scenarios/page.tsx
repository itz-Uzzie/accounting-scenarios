import { Metadata } from "next";
import ScenariosManager from "./scenarios-manager";
import Breadcrumbs from "@/components/breadcrumbs";

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

        <ScenariosManager />
      </main>
    </div>
  );
}
