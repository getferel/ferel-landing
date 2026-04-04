"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Brain,
  Zap,
  Bell,
  TrendingUp,
  Shield,
  Layers,
  Target,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Clock,
  Filter,
  Activity,
  Newspaper,
  AlertTriangle,
  BarChart3,
  LineChart,
  Radio,
  ChevronRight,
  ArrowUpRight,
  Terminal,
  Cpu,
  Eye,
  Users,
  Building2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import EarlyAccessModal from "@/components/EarlyAccessModal";

// ─── TICKER BAR ────────────────────────────────────────────────
function TickerBar() {
  const tickers = [
    { symbol: "NIFTY 50", value: "23,851.65", change: "+0.84%", up: true },
    { symbol: "SENSEX", value: "78,553.20", change: "+0.91%", up: true },
    { symbol: "BANK NIFTY", value: "51,120.30", change: "-0.23%", up: false },
    { symbol: "USD/INR", value: "83.42", change: "+0.12%", up: true },
    { symbol: "CRUDE OIL", value: "$78.45", change: "-1.32%", up: false },
    { symbol: "GOLD", value: "$2,648.30", change: "+0.45%", up: true },
    { symbol: "US 10Y", value: "4.28%", change: "+0.03%", up: true },
    { symbol: "VIX", value: "14.82", change: "-2.15%", up: false },
  ];

  return (
    <div className="w-full bg-surface border-b border-border overflow-hidden">
      <div className="ticker-scroll flex whitespace-nowrap py-2">
        {[...tickers, ...tickers].map((t, i) => (
          <div key={i} className="inline-flex items-center gap-2 px-6 text-xs font-mono">
            <span className="text-gray-500">{t.symbol}</span>
            <span className="text-white font-medium">{t.value}</span>
            <span className={t.up ? "text-primary" : "text-red-500"}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NAVIGATION ────────────────────────────────────────────────
function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <img src="/logo.svg" alt="Ferel" className="h-7 w-auto" />
            <div className="hidden md:flex items-center gap-8">
              <a href="#platform" className="text-sm text-gray-400 hover:text-white transition-colors">Platform</a>
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#intelligence" className="text-sm text-gray-400 hover:text-white transition-colors">Intelligence</a>
              <a href="#sources" className="text-sm text-gray-400 hover:text-white transition-colors">Sources</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <button
              onClick={onOpenModal}
              className="btn-primary px-5 py-2 rounded text-sm"
            >
              Request Early Access
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#platform" className="block text-sm text-gray-300 py-2">Platform</a>
              <a href="#features" className="block text-sm text-gray-300 py-2">Features</a>
              <a href="#intelligence" className="block text-sm text-gray-300 py-2">Intelligence</a>
              <a href="#sources" className="block text-sm text-gray-300 py-2">Sources</a>
              <Link href="/contact" className="block text-sm text-gray-300 py-2">Contact</Link>
              <button onClick={onOpenModal} className="w-full btn-primary px-5 py-3 rounded text-sm mt-2">
                Request Early Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── HERO SECTION ──────────────────────────────────────────────
function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Top label */}
          <div className="inline-flex items-center gap-2 border border-border rounded px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full live-indicator" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Live Market Intelligence</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            The market
            <br />
            intelligence
            <br />
            <span className="gradient-text">terminal.</span>
          </h1>

          {/* Sub copy */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            AI-curated macro and geopolitical intelligence for active traders, portfolio managers, and institutional desks. Signal, not noise.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <button
              onClick={onOpenModal}
              className="btn-primary px-8 py-4 rounded text-base inline-flex items-center gap-2"
            >
              Request Early Access
              <ArrowRight size={18} />
            </button>
            <a
              href="#platform"
              className="btn-outline px-8 py-4 rounded text-base inline-flex items-center gap-2"
            >
              See the Platform
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-primary" />
              <span>Verified Sources Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-primary" />
              <span>AI + Editorial Curation</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-primary" />
              <span>Real-time Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STATS BAR ─────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "1,000+", label: "Sources Monitored Daily" },
    { value: "5-8", label: "Curated Stories per Day" },
    { value: "<2min", label: "Alert Delivery Time" },
    { value: "99.7%", label: "Source Verification Rate" },
  ];

  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`py-8 px-6 text-center ${i < stats.length - 1 ? "border-r border-border" : ""}`}
            >
              <div className="number-display text-3xl lg:text-4xl text-white mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PLATFORM PREVIEW ──────────────────────────────────────────
function PlatformPreview({ onOpenModal }: { onOpenModal: () => void }) {
  const feedItems = [
    {
      time: "09:32 IST",
      tag: "MONETARY POLICY",
      headline: "RBI signals hawkish pivot: repo rate decision deferred amid inflation concerns",
      impact: "CRITICAL",
      impactColor: "text-red-500 bg-red-500/10 border-red-500/20",
      context: "Banking sector volatility expected. Watch HDFC, ICICI for rate-sensitive moves.",
    },
    {
      time: "09:15 IST",
      tag: "GEOPOLITICAL",
      headline: "India-UAE comprehensive trade corridor expansion ratified by both cabinets",
      impact: "HIGH",
      impactColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      context: "Energy and logistics sectors to benefit. Adani Ports, ONGC in focus.",
    },
    {
      time: "08:58 IST",
      tag: "INSTITUTIONAL",
      headline: "FII net buyers in IT sector for 12th consecutive session; $2.1B deployed",
      impact: "HIGH",
      impactColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      context: "NIFTY IT may test resistance. TCS, Infosys showing accumulation patterns.",
    },
    {
      time: "08:30 IST",
      tag: "COMMODITIES",
      headline: "Brent crude stabilizes at $78 after OPEC+ production cut consensus emerges",
      impact: "MODERATE",
      impactColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      context: "OMCs may see margin relief. Monitor HPCL, BPCL for mean reversion.",
    },
  ];

  return (
    <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 bg-section-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal size={16} className="text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">The Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Intelligence feed,<br />
            <span className="text-gray-500">built for the trading desk.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Every story is sourced, verified, impact-scored, and paired with actionable context. No clickbait. No filler.
          </p>
        </motion.div>

        {/* Terminal-style feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card rounded-lg overflow-hidden glow-green"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-elevated">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-500">ferel://intelligence-feed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full live-indicator" />
              <span className="text-xs font-mono text-primary">LIVE</span>
            </div>
          </div>

          {/* Feed items */}
          <div className="divide-y divide-border">
            {feedItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-5 hover:bg-surface-elevated transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Time column */}
                  <div className="hidden sm:block w-20 flex-shrink-0">
                    <span className="text-xs font-mono text-gray-600">{item.time}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="badge text-primary">{item.tag}</span>
                      <span className={`badge px-2 py-0.5 rounded border ${item.impactColor}`}>
                        {item.impact}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors leading-snug">
                      {item.headline}
                    </h4>
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <Target size={14} className="text-gray-600 mt-0.5 flex-shrink-0" />
                      <span>{item.context}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight size={16} className="text-gray-700 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border bg-surface-elevated flex items-center justify-between">
            <span className="text-xs font-mono text-gray-600">Showing latest 4 of 8 stories</span>
            <button
              onClick={onOpenModal}
              className="text-xs font-mono text-primary hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Get full access <ArrowRight size={12} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FEATURES SECTION ──────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI + Editorial Curation",
      description: "Our AI filters thousands of stories. Our editorial team verifies, scores, and adds context. The result: institutional-grade intelligence.",
      highlight: true,
    },
    {
      icon: Activity,
      title: "Impact Scoring",
      description: "Every story classified as Critical, High, or Moderate. Instantly know what demands your attention and what can wait.",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Macro & Geopolitical Coverage",
      description: "Central bank decisions, trade policy shifts, regulatory changes, and global macro events that move Indian and global markets.",
      highlight: false,
    },
    {
      icon: Target,
      title: "Actionable Context",
      description: 'Every story includes a "So What?" analysis — sector impact, stocks to watch, and positioning implications for your portfolio.',
      highlight: true,
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Critical intelligence delivered the moment it breaks. Be first to know when market-moving events unfold.",
      highlight: false,
    },
    {
      icon: Shield,
      title: "Zero Noise Guarantee",
      description: "No clickbait. No speculation. No filler. Every story is verified, sourced from premium outlets and official channels.",
      highlight: false,
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers size={16} className="text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Built for professionals<br />
            <span className="text-gray-500">who move markets.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 bg-black hover:bg-surface transition-all duration-300 group ${feature.highlight ? "lg:bg-surface" : ""}`}
            >
              <div className={`w-10 h-10 rounded flex items-center justify-center mb-5 ${feature.highlight ? "bg-primary/10 text-primary" : "bg-surface-elevated text-gray-400 group-hover:text-primary group-hover:bg-primary/10"} transition-colors`}>
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AUDIENCE SECTION ──────────────────────────────────────────
function Audience() {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Active Traders",
      description: "Get ahead of market moves with real-time intelligence on events that drive intraday and swing trade opportunities.",
    },
    {
      icon: LineChart,
      title: "Portfolio Managers & Investors",
      description: "Make informed allocation decisions with curated macro insights, sector analysis, and impact-scored news flow.",
    },
    {
      icon: Building2,
      title: "Institutional Desks",
      description: "Supplement your research workflow with verified, high-signal intelligence that cuts through information overload.",
    },
  ];

  return (
    <section id="intelligence" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Users size={16} className="text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Who It&apos;s For</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Intelligence for every<br />
            <span className="text-gray-500">market participant.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface-card rounded-lg p-8 hover:glow-green transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMPARISON SECTION ────────────────────────────────────────
function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            From <span className="text-red-500">noise</span> to{" "}
            <span className="gradient-text">signal</span>
          </h2>
          <p className="text-lg text-gray-500">
            1,000+ daily stories filtered into 5-8 actionable intelligence pieces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* The Noise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-red-500/20 bg-black p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/10">
              <AlertTriangle size={18} className="text-red-500" />
              <h3 className="text-lg font-bold text-red-500 uppercase tracking-wide">The Noise</h3>
            </div>
            <ul className="space-y-4">
              {[
                "1,000s of unfiltered headlines flooding your screen",
                "Clickbait and sensational reporting",
                "No impact analysis or market context",
                "Hours wasted sifting through irrelevant content",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <X size={16} className="text-red-500/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Signal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-primary/20 bg-black p-8 glow-green"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
              <Radio size={18} className="text-primary" />
              <h3 className="text-lg font-bold text-primary uppercase tracking-wide">The Signal</h3>
            </div>
            <ul className="space-y-4">
              {[
                "5-8 curated stories with full context and analysis",
                "Verified sources only, zero clickbait guarantee",
                'Impact scoring with "So What?" actionable insights',
                "Intelligence delivered in minutes, not hours",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SOURCES SECTION ───────────────────────────────────────────
function Sources() {
  const sourceGroups = [
    {
      category: "Central Banks & Regulators",
      sources: ["Reserve Bank of India", "SEBI", "Federal Reserve", "ECB"],
    },
    {
      category: "Government & Institutions",
      sources: ["Ministry of Finance", "World Bank", "IMF", "NITI Aayog"],
    },
    {
      category: "Premium News Wires",
      sources: ["Bloomberg", "Reuters", "Financial Times", "Economic Times"],
    },
  ];

  return (
    <section id="sources" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Eye size={16} className="text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Sourcing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            We monitor the sources<br />
            <span className="text-gray-500">that move markets.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {sourceGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="surface-card rounded-lg p-6"
            >
              <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-6">{group.category}</h4>
              <ul className="space-y-3">
                {group.sources.map((source) => (
                  <li key={source} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    {source}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ───────────────────────────────────────────────
function CTA({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Ready to know first?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Join the waitlist for early access to institutional-grade market intelligence, delivered before it becomes noise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpen}
              className="btn-primary px-10 py-4 rounded text-base inline-flex items-center gap-2"
            >
              Request Early Access
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-8 font-mono">
            Free during early access. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────
function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="border-t border-border bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          <div className="md:col-span-1">
            <img src="/logo.svg" alt="Ferel" className="h-7 w-auto mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Institutional-grade market intelligence for the modern trader.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#platform" className="hover:text-white transition-colors">Intelligence Feed</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#sources" className="hover:text-white transition-colors">Sources</a></li>
              <li><button onClick={onOpenModal} className="hover:text-white transition-colors">Early Access</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/account-deletion" className="hover:text-white transition-colors">Account Deletion</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><span>support@ferel.app</span></li>
              <li><span>Kochi, Kerala, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ferelvian Finalform Retail (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 font-mono">
            Built in Kochi, India
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────
export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <TickerBar />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <StatsBar />
      <PlatformPreview onOpenModal={() => setIsModalOpen(true)} />
      <Features />
      <Audience />
      <Comparison />
      <Sources />
      <CTA onOpen={() => setIsModalOpen(true)} />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
    </div>
  );
}
