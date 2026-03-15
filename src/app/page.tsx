"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Brain, 
  Zap, 
  Bell, 
  Globe, 
  BarChart3,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// Sparkline component for market indices
function Sparkline({ data, color = "#10B981" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 200;
    const y = 50 - ((val - min) / range) * 50;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="200" height="50" className="sparkline">
      <polyline points={points} stroke={color} strokeWidth="2" fill="none" />
    </svg>
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
              <a href="#markets" className="hover:text-primary transition-colors">Markets</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#download" className="bg-primary hover:bg-accent text-background px-4 py-2 rounded-lg font-semibold transition-all">
                Download
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
            <a href="#markets" className="block px-3 py-2 hover:bg-secondary rounded">Markets</a>
            <a href="#about" className="block px-3 py-2 hover:bg-secondary rounded">About</a>
            <a href="#download" className="block px-3 py-2 text-primary font-semibold">Download</a>
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
              <span className="text-sm font-medium">Live Market Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Real-time Market Intelligence,{" "}
              <span className="gradient-text">Powered by AI</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg">
              Master the Indian markets with AI-analyzed news and global macro insights delivered to your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Download on App Store</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card hover:bg-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Get it on Google Play</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
          
          {/* Phone Mockup */}
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
                {/* App UI Mockup */}
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Market Overview</h3>
                    <span className="text-xs text-primary">LIVE</span>
                  </div>
                  
                  {/* Market Cards */}
                  <div className="space-y-3">
                    <div className="glass-card p-3 rounded-lg">
                      <div className="text-xs text-gray-400">NIFTY 50</div>
                      <div className="text-lg font-bold">22,456.75</div>
                      <div className="text-xs text-primary">+1.2%</div>
                    </div>
                    
                    <div className="glass-card p-3 rounded-lg">
                      <div className="text-xs text-gray-400">SENSEX</div>
                      <div className="text-lg font-bold">73,892.40</div>
                      <div className="text-xs text-primary">+0.9%</div>
                    </div>
                    
                    <div className="glass-card p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Top Story</div>
                      <div className="text-sm font-semibold">RBI Policy Impact</div>
                      <div className="text-xs text-gray-400">High Impact</div>
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

// Features Section
function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Analyzed News",
      description: "Beyond just headlines—sentiment and impact analysis powered by advanced AI.",
    },
    {
      icon: Globe,
      title: "Market-Moving Insights",
      description: "Specialized focus on Indian Equities (NSE/BSE) and Global Macro trends.",
    },
    {
      icon: Zap,
      title: "Breaking Highlights",
      description: "Top story feed showing critical impact levels in real-time.",
    },
    {
      icon: BarChart3,
      title: "Real-time Indices",
      description: "Visual sparklines for S&P 500, NASDAQ, and Nifty 50.",
    },
    {
      icon: TrendingUp,
      title: "Smart Alerts",
      description: "Never miss a market-moving event with intelligent notifications.",
    },
    {
      icon: Bell,
      title: "Personalized Feed",
      description: "AI curates content based on your portfolio and interests.",
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
            Intelligence Meets{" "}
            <span className="gradient-text">Simplicity</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to stay ahead of the markets, distilled into one powerful app.
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

// Market Data Section
function Markets() {
  const indices = [
    { name: "NIFTY 50", value: "22,456.75", change: "+1.2%", data: [22100, 22200, 22150, 22300, 22400, 22450, 22456] },
    { name: "SENSEX", value: "73,892.40", change: "+0.9%", data: [73200, 73400, 73350, 73600, 73750, 73850, 73892] },
    { name: "S&P 500", value: "5,234.18", change: "+0.5%", data: [5180, 5200, 5190, 5210, 5220, 5230, 5234] },
    { name: "NASDAQ", value: "16,428.82", change: "+0.7%", data: [16200, 16300, 16280, 16350, 16400, 16420, 16428] },
  ];

  return (
    <section id="markets" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Global Markets,{" "}
            <span className="gradient-text">One Dashboard</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track Indian and global indices with real-time updates and AI insights.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indices.map((index, i) => (
            <motion.div
              key={index.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">{index.name}</div>
                  <div className="text-2xl font-bold">{index.value}</div>
                </div>
                <div className="text-primary font-semibold">{index.change}</div>
              </div>
              <Sparkline data={index.data} />
            </motion.div>
          ))}
        </div>
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
              <span className="gradient-text">Master the Markets</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of traders and investors using AI-powered intelligence to make smarter decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-accent text-background px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>App Store</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card hover:bg-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Google Play</span>
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
              AI-powered financial intelligence for modern investors.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#markets" className="hover:text-primary transition-colors">Markets</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
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
      <Markets />
      <CTA />
      <Footer />
    </div>
  );
}
