"use client";

import { motion } from "framer-motion";
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
  Clock
} from "lucide-react";
import { useState } from "react";

// Timeline/Feed component for news pulse
function NewsPulseItem({ time, headline, impact, category }: { time: string; headline: string; impact: "Critical" | "High" | "Neutral"; category: string }) {
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
      className="glass-card p-4 rounded-xl border-l-4 border-l-primary"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock size={12} />
              {time}
            </span>
            <span className="text-xs text-primary">{category}</span>
          </div>
          <h4 className="font-semibold mb-2">{headline}</h4>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${impactColors[impact]}`}>
              Impact: {impact}
            </span>
            <span className="text-xs text-gray-400">Actionable Intelligence</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Navigation
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Ferel</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#pulse" className="hover:text-primary transition-colors">Pulse</a>
              <a href="#macro" className="hover:text-primary transition-colors">Macro</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#download" className="bg-primary hover:bg-accent text-background px-4 py-2 rounded-lg font-semibold transition-all">
                Get Early Access
              </a>
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
            <a href="#features" className="block px-3 py-2 hover:bg-secondary rounded">Features</a>
            <a href="#pulse" className="block px-3 py-2 hover:bg-secondary rounded">Pulse</a>
            <a href="#macro" className="block px-3 py-2 hover:bg-secondary rounded">Macro</a>
            <a href="#about" className="block px-3 py-2 hover:bg-secondary rounded">About</a>
            <a href="#download" className="block px-3 py-2 text-primary font-semibold">Get Early Access</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full live-indicator" />
              <span className="text-sm font-medium">Live Intelligence Feed</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Be the First to Know{" "}
              <span className="gradient-text">What Moves the Markets</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg">
              A curated news engine delivering high-signal macro and geopolitical intelligence. We source, analyze, and publish the stories that matter before they become noise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Early Access</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card hover:bg-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
            
            <div className="pt-4 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>AI-Powered Curation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Editorial Intelligence</span>
              </div>
            </div>
          </motion.div>
          
          {/* Phone Mockup - News Feed UI */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-background relative">
                {/* App UI Mockup - News Feed */}
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Breaking Intelligence</h3>
                    <span className="text-xs text-primary">LIVE</span>
                  </div>
                  
                  {/* News Cards */}
                  <div className="space-y-3">
                    <div className="glass-card p-3 rounded-lg border-l-4 border-l-primary">
                      <div className="text-xs text-gray-400 mb-1">Geopolitical</div>
                      <div className="text-sm font-semibold">RBI Policy Shift</div>
                      <div className="text-xs text-red-400 mt-1">Impact: Critical</div>
                    </div>
                    
                    <div className="glass-card p-3 rounded-lg border-l-4 border-l-amber-500">
                      <div className="text-xs text-gray-400 mb-1">Global Macro</div>
                      <div className="text-sm font-semibold">Trade Agreement Update</div>
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
        </div>
      </div>
    </section>
  );
}

// Features Section - Editorial Intelligence
function Features() {
  const features = [
    {
      icon: Layers,
      title: "Editorial Curation",
      description: "Our team and AI filter out the noise. Only high-signal, market-moving stories make the cut.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Beyond headlines—sentiment analysis, impact scoring, and contextual intelligence.",
    },
    {
      icon: Globe,
      title: "Global Macro Focus",
      description: "Specialized coverage of policy changes, trade news, and international relations.",
    },
    {
      icon: Target,
      title: "Actionable Intelligence",
      description: "Every story explains why it matters to investors and what to watch next.",
    },
    {
      icon: Shield,
      title: "Verified Sources",
      description: "Curated from premium outlets, official statements, and verified channels only.",
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Be first to know when critical intelligence breaks—before it becomes mainstream.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
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
            We curate, analyze, and deliver only the stories that move markets. No clickbait, no fluff.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pulse Section - Live Feed
function Pulse() {
  const newsItems = [
    { time: "2 min ago", headline: "RBI announces unexpected policy shift on repo rates", impact: "Critical", category: "Monetary Policy" },
    { time: "15 min ago", headline: "New trade agreement signed between India and UAE", impact: "High", category: "Global Trade" },
    { time: "32 min ago", headline: "Tech sector sees institutional buying surge", impact: "High", category: "Market Movement" },
    { time: "1 hr ago", headline: "Oil prices stabilize amid geopolitical tensions", impact: "Neutral", category: "Commodities" },
  ];

  return (
    <section id="pulse" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The{" "}
            <span className="gradient-text">Pulse</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Live feed of curated intelligence. Every story tagged with impact level and actionable context.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {newsItems.map((item, i) => (
            <NewsPulseItem
              key={i}
              time={item.time}
              headline={item.headline}
              impact={item.impact as "Critical" | "High" | "Neutral"}
              category={item.category}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">This is just a sample. Get full access to the live feed.</p>
          <button className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold transition-all">
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Macro & Geopolitical Section
function Macro() {
  const macroTopics = [
    {
      icon: Globe,
      title: "Geopolitical Shifts",
      items: ["International relations", "Trade agreements", "Policy changes", "Diplomatic developments"],
    },
    {
      icon: TrendingUp,
      title: "Global Macro Trends",
      items: ["Central bank policies", "Interest rate decisions", "Inflation data", "Economic indicators"],
    },
    {
      icon: Layers,
      title: "Sector Intelligence",
      items: ["Industry analysis", "Regulatory updates", "Market positioning", "Competitive landscape"],
    },
  ];

  return (
    <section id="macro" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Macro &{" "}
            <span className="gradient-text">Geopolitical</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep coverage of the forces that shape markets—from policy rooms to trading floors.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {macroTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {topic.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    <span>{item}</span>
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

// About Section
function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="gradient-text">Decision Makers</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ferel is a curated news intelligence platform by Ferelvian. We combine editorial expertise with AI-powered analysis to deliver only the stories that matter—before they become mainstream noise.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400">Curated Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Live Intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">0</div>
              <div className="text-gray-400">Noise & Clickbait</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Know First</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join early access and get curated market intelligence delivered before it becomes noise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Early Access</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card hover:bg-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>View Sample Feed</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold gradient-text">Ferel</span>
            <p className="text-gray-400 mt-4 max-w-md">
              Curated news intelligence for decision makers. High-signal macro and geopolitical coverage.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pulse" className="hover:text-primary transition-colors">Pulse</a></li>
              <li><a href="#macro" className="hover:text-primary transition-colors">Macro</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Early Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
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
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pulse />
      <Macro />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
