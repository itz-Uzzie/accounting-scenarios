import Link from "next/link";
import { BookOpen, Users, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <main className="relative flex flex-col items-center justify-center px-6 pt-24 pb-32 mx-auto max-w-7xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          Community-Led Learning Platform
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
          Master Accounting <br className="hidden md:block" />
          Through Real Scenarios
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-center text-zinc-400 mb-10 leading-relaxed">
          A collaborative helper-web designed to simplify bookkeeping basics. 
          Explore real-world scenarios, contribute your knowledge, and learn the 
          fundamentals of debits and credits in an interactive environment.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/scenarios"
            className="px-8 py-4 text-sm font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center"
          >
            Start Learning
          </Link>
          <Link
            href="/docs"
            className="px-8 py-4 text-sm font-semibold border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
          >
            How it Works
          </Link>
        </div>

        {/* Learning Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <Link 
            href="/learning"
            className="p-8 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all group block text-left"
          >
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Purely Educational</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              This isn't a commercial product. It's a dedicated space to help 
              students and professionals grasp accounting principles through 
              practical, real-world examples.
            </p>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn the Basics <span className="text-lg">→</span>
            </span>
          </Link>
          
          <div className="p-8 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all group">
            <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-600/20 transition-all">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crowdsourced Rules</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Anyone can contribute! If you know a unique scenario, add it to 
              the database to help others learn. Our engine grows stronger with 
              every contribution.
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all group">
            <div className="w-12 h-12 bg-green-600/10 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20 group-hover:bg-green-600/20 transition-all">
              <Lightbulb className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-World Logic</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Skip the dry textbooks. Learn how to handle everything from daily 
              sales to complex tax adjustments with logic that applies to 
              actual business scenarios.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12 text-center text-zinc-600 text-sm">
        <p>&copy; 2024 Accounting Scenarios Helper. A community project for learners.</p>
      </footer>
    </div>
  );
}
