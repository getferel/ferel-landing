"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowLeft, MessageSquare } from "lucide-react";
import { useState } from "react";

// Navigation
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Ferel" className="h-8 w-auto" />
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#features" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#pulse" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Pulse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Contact Form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 rounded-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Send us a message</h3>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
          <p className="text-gray-400">We'll get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-secondary/50 border border-gray-700 rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-secondary/50 border border-gray-700 rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="w-full bg-secondary/50 border border-gray-700 rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-secondary/50 border border-gray-700 rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary hover:bg-accent text-background px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <Send size={20} />
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

// Contact Info Card
function ContactCard({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          {href ? (
            <a href={href} className="text-gray-400 hover:text-primary transition-colors">
              {value}
            </a>
          ) : (
            <p className="text-gray-400">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Main Contact Page
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about Ferel? We're here to help. Reach out and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <ContactCard
                icon={Mail}
                title="Email"
                value="suport@ferel.app"
                href="mailto:suport@ferel.app"
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                value="+91 7907170680"
                href="tel:+917907170680"
              />
              <ContactCard
                icon={MapPin}
                title="Location"
                value="Kochi, Kerala, India"
              />
              
              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h4 className="font-semibold mb-3">Response Time</h4>
                <p className="text-gray-400 text-sm">
                  We typically respond within 24 hours during business days (Monday-Friday, 9 AM - 6 PM IST).
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link href="/#pulse" className="hover:text-primary transition-colors">Pulse</Link></li>
                <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/#sources" className="hover:text-primary transition-colors">Sources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/account-deletion" className="hover:text-primary transition-colors">Delete Account</Link></li>
                <li>© 2026 Ferelvian</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>A product of Ferelvian Finalform Retail PVT, Kochi, Kerala, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
