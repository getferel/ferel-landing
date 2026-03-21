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
  AlertTriangle
} from "lucide-react";
import { useState, useEffect } from "react";
import EarlyAccessModal from "@/components/EarlyAccessModal";

// Navigation
function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Ferel" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#pulse" className="text-sm text-gray-400 hover:text-primary transition-colors">Pulse</a>
              <a href="#features" className="text-sm text-gray-400 hover:text-primary transition-colors">Features</a>
              <a href="#sources" className="text-sm text-gray-400 hover:text-primary transition-colors">Sources</a>
              <button onClick={onOpenModal} className="bg-primary hover:bg-accent text-background px-5 py-2 rounded-lg text-sm font-semibold transition-all">
                Get Early Access
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#pulse" className="block px-3 py-2 hover:bg-secondary rounded">Pulse</a>
            <a href="#features" className="block px-3 py-2 hover:bg-secondary rounded">Features</a>
            <a href="#sources" className="block px-3 py-2 hover:bg-secondary rounded">Sources</a>
            <button onClick={onOpenModal} className="w-full text-left px-3 py-2 text-primary font-semibold">Get Early Access</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Hero Section - 60/40 Split with Email Capture
function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        onOpenModal();
        setSubmitted(false);
        setEmail("");
      }, 1500);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy + Email Capture */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pr-8"
          >
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full live-indicator" />
              <span className="text-sm font-medium">Live Intelligence Feed</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Market Intelligence{" "}
              <span className="gradient-text">Before It Becomes Noise</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
              We source, analyze, and publish high-signal macro and geopolitical news. Get the intelligence that moves markets, delivered with context.
            </p>
            
            {/* Email Capture */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-secondary/50 border border-gray-700 rounded-xl px-5 py-4 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                {submitted ? (
                  <span>Opening...</span>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </form>
            
            <div className="pt-4 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Editorial Curation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Zero Clickbait</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Floating Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating effect */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl shadow-primary/20">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-background relative">
                  {/* App UI - Pulse Feed */}
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">Breaking Intelligence</h3>
                      <span className="text-xs text-primary">LIVE</span>
                    </div>
                    
                    {/* News Cards */}
                    <div className="space-y-3">
                      <div className="glass-card p-3 rounded-lg border-l-4 border-l-red-500">
                        <div className="text-xs text-gray-400 mb-1">Geopolitical</div>
                        <div className="text-sm font-semibold">RBI Policy Shift</div>
                        <div className="text-xs text-red-400 mt-1">Impact: Critical</div>
                      </div>
                      
                      <div className="glass-card p-3 rounded-lg border-l-4 border-l-amber-500">
                        <div className="text-xs text-gray-400 mb-1">Global Macro</div>
                        <div className="text-sm font-semibold">Trade Agreement</div>
                        <div className="text-xs text-amber-400 mt-1">Impact: High</div>
                      </div>
                      
                      <div className="glass-card p-3 rounded-lg border-l-4 border-l-gray-500">
                        <div className="text-xs text-gray-400 mb-1">Market News</div>
                        <div className="text-sm font-semibold">Sector Analysis</div>
                        <div className="text-xs text-gray-400 mt-1">Impact: Neutral</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Animated News Feed Component
function NewsFeedItem({ time, headline, impact, category, soWhat, delay }: { time: string; headline: string; impact: "Critical" | "High" | "Neutral"; category: string; soWhat: string; delay: number }) {
  const impactColors = {
    Critical: "bg-red-500/20 text-red-400 border-red-500/30",
    High: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Neutral: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-6 rounded-2xl border-l-4 border-l-primary hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Clock size={12} />
            {time}
          </span>
          <span className="text-xs text-primary">{category}</span>
        </div>
      </div>
      
      <h4 className="text-lg font-semibold mb-3">{headline}</h4>
      
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className={`text-xs px-3 py-1.5 rounded-full border ${impactColors[impact]}`}>
          Impact: {impact}
        </span>
        <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
          <Target size={12} />
          <span>So What? {soWhat}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Pulse Section - Animated Live Feed
function Pulse({ onOpenModal }: { onOpenModal: () => void }) {
  const newsItems = [
    { time: "2 min ago", headline: "RBI announces unexpected policy shift on repo rates", impact: "Critical" as const, category: "Monetary Policy", soWhat: "Watch for volatility in banking stocks" },
    { time: "15 min ago", headline: "New trade agreement signed between India and UAE", impact: "High" as const, category: "Global Trade", soWhat: "Energy sector likely to benefit" },
    { time: "32 min ago", headline: "Tech sector sees institutional buying surge", impact: "High" as const, category: "Market Movement", soWhat: "NIFTY IT may outperform today" },
    { time: "1 hr ago", headline: "Oil prices stabilize amid geopolitical tensions", impact: "Neutral" as const, category: "Commodities", soWhat: "Monitor inflation data" },
  ];

  return (
    <section id="pulse" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full live-indicator" />
            <span className="text-sm font-medium">Live Feed</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The{" "}
            <span className="gradient-text">Pulse</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time curated intelligence. Every story tagged with impact level and actionable context.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {newsItems.map((item, i) => (
            <NewsFeedItem
              key={i}
              time={item.time}
              headline={item.headline}
              impact={item.impact}
              category={item.category}
              soWhat={item.soWhat}
              delay={i * 0.15}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={onOpenModal}
            className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center gap-2"
          >
            <span>Get Full Access</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Bento Grid Features Section
function Features() {
  const features = [
    {
      icon: Newspaper,
      title: "Editorial Intelligence",
      description: "Our team and AI filter 1,000s of stories daily. Only high-signal, market-moving intelligence makes the cut.",
      size: "large",
    },
    {
      icon: Activity,
      title: "Impact Scoring",
      description: "Every story tagged: Critical, High, or Neutral. Know what matters before you read.",
      size: "medium",
    },
    {
      icon: Globe,
      title: "Macro & Geopolitical",
      description: "Deep coverage of policy changes, trade news, and international relations that shape markets.",
      size: "medium",
    },
    {
      icon: Filter,
      title: "Zero Clickbait",
      description: "No noise. No fluff. Only actionable intelligence.",
      size: "small",
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Be first to know when critical intelligence breaks.",
      size: "small",
    },
    {
      icon: Shield,
      title: "Verified Sources",
      description: "Curated from premium outlets, official statements, verified channels.",
      size: "small",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Intelligence,{" "}
            <span className="gradient-text">Not Noise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We curate, analyze, and deliver only the stories that move markets.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Editorial Intelligence</h3>
            <p className="text-gray-400 text-lg">
              Our team and AI filter 1,000s of stories daily. We source from premium outlets, official statements, and verified channels. Only high-signal, market-moving intelligence makes the cut—delivering context, not just headlines.
            </p>
          </motion.div>
          
          {/* Medium Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Impact Scoring</h3>
            <p className="text-gray-400">Every story tagged: Critical, High, or Neutral. Know what matters before you read.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Macro & Geopolitical</h3>
            <p className="text-gray-400">Deep coverage of policy changes, trade news, and international relations that shape markets—from central banks to trading floors.</p>
          </motion.div>
          
          {/* Small Cards */}
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Bar - Source Logos
function Sources() {
  const sources = [
    "Reserve Bank of India",
    "Ministry of Finance",
    "Bloomberg",
    "Reuters",
    "Economic Times",
    "Financial Times",
    "SEBI",
    "World Bank",
  ];

  return (
    <section id="sources" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider">Sources We Monitor</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {sources.map((source, i) => (
            <motion.div
              key={source}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-sm md:text-base text-gray-500 font-medium"
            >
              {source}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Noise vs Signal Comparison
function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From{" "}
            <span className="text-red-400">Noise</span>{" "}
            to{" "}
            <span className="gradient-text">Signal</span>
          </h2>
          <p className="text-xl text-gray-400">
            How we filter 1,000s of stories into 5 actionable intelligence pieces.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Noise Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">The Noise</h3>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5" />
                <span>1,000s of daily headlines with no context</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5" />
                <span>Clickbait and sensationalism</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5" />
                <span>No impact analysis or actionable insights</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5" />
                <span>Overwhelming information overload</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Signal Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-primary">The Signal</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>5 curated stories with full context</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Verified sources only, zero clickbait</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Impact scoring + "So What?" analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Actionable intelligence for decision makers</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl text-center"
        >
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Know First</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join early access and get curated market intelligence delivered before it becomes noise.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2"
            >
              <span>Get Early Access</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/logo.svg" alt="Ferel" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 max-w-md">
              Curated news intelligence for decision makers. High-signal macro and geopolitical coverage.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#pulse" className="hover:text-primary transition-colors">Pulse</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#sources" className="hover:text-primary transition-colors">Sources</a></li>
              <li><button onClick={onOpenModal} className="hover:text-primary transition-colors">Early Access</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li>© 2026 Ferelvian</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>A product of Ferelvian Finalform Retail PVT, Kochi, Kerala, India</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Pulse onOpenModal={() => setIsModalOpen(true)} />
      <Features />
      <Sources />
      <Comparison />
      <CTA onOpen={() => setIsModalOpen(true)} />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
    </div>
  );
}
