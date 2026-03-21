"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Trash2, Shield, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-2xl mb-6">
              <Trash2 className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Delete Your Account</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              At <strong className="text-foreground">Ferel</strong>, we prioritize your privacy and believe you should have complete control over your data.
            </p>
          </motion.div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl mb-12 border-l-4 border-l-red-500"
          >
            <p className="text-gray-300 leading-relaxed">
              If you decide to leave our platform, we have a manual review process to ensure your request is handled securely.
            </p>
          </motion.div>

          {/* What Happens Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trash2 className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold">What happens when you delete your account?</h2>
            </div>
            <p className="text-gray-300 mb-6">
              When an account deletion is processed, your personal information is removed from our active databases:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Profile Data</h3>
                  <p className="text-gray-400 text-sm">Your name, email, phone number, and account settings are permanently deleted.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Personalized Intelligence</h3>
                  <p className="text-gray-400 text-sm">Your custom watchlists, saved market-moving news, and notification preferences are removed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Access</h3>
                  <p className="text-gray-400 text-sm">You will immediately lose access to the premium market intelligence feed and all active subscription features.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Request Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">How to request account deletion</h2>
            </div>
            <p className="text-gray-300 mb-6">
              To delete your account and associated data, please follow these steps:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Send an email to <a href="mailto:support@ferel.app" className="text-primary hover:underline">support@ferel.app</a></h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Use the subject line: <strong className="text-primary">"Account Deletion Request"</strong></h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Send the request from the <strong className="text-primary">registered email address</strong> associated with your Ferel account</h3>
                </div>
              </div>
            </div>
            <div className="mt-6 glass-card p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Our team will verify the request and process the deletion within <strong className="text-primary">48 to 72 hours</strong>. You will receive a confirmation email once the process is complete.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold">Important Considerations</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Active Subscriptions</h3>
                  <p className="text-gray-400">
                    Deleting your account <strong className="text-amber-400">does not</strong> automatically cancel a paid subscription. Since payments are managed by the Google Play Store, you must manually cancel your plan in the <strong className="text-foreground">Play Store → Subscriptions</strong> menu to avoid future charges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Data Retention</h3>
                  <p className="text-gray-400">
                    To comply with Indian financial and tax regulations (GST), billing and transaction records are legally required to be retained for a period of up to <strong className="text-foreground">7 years</strong>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security Logs</h3>
                  <p className="text-gray-400">
                    We may retain anonymized logs for a limited period (up to <strong className="text-foreground">180 days</strong>) for security and fraud prevention purposes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 rounded-2xl text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Ready to Delete Your Account?</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Send us an email from your registered address and we'll process your request within 48-72 hours.
            </p>
            <a
              href="mailto:support@ferel.app?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              <Mail size={18} />
              <span>Send Deletion Request</span>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Ferelvian Finalform Retail (OPC) Private Limited. All rights reserved.</p>
          <p className="mt-2">Kochi, Kerala, India</p>
        </div>
      </footer>
    </div>
  );
}
