"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  type ContentItem = {
    subtitle?: string;
    text: string;
    items?: string[];
    links?: { text: string; url: string }[];
  };

  type Section = {
    number: string;
    title: string;
    content: ContentItem[];
  };

  const sections: Section[] = [
    {
      number: "1",
      title: "WHAT INFORMATION DO WE COLLECT?",
      content: [
        {
          subtitle: "Personal information you disclose to us",
          text: "We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
          items: ["Names", "Phone numbers", "Email addresses", "Usernames", "Passwords", "Contact preferences", "Contact or authentication data", "Billing addresses"],
        },
        {
          subtitle: "Sensitive Information",
          text: "We do not process sensitive information.",
        },
        {
          subtitle: "Payment Data",
          text: "We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay and Stripe.",
          links: [
            { text: "Razorpay Privacy Policy", url: "https://razorpay.com/privacy-policy/" },
            { text: "Stripe Privacy", url: "https://stripe.com/in/privacy" },
          ],
        },
        {
          subtitle: "Social Media Login Data",
          text: "We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account.",
        },
        {
          subtitle: "Application Data",
          text: "If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:",
          items: ["Push Notifications: We may request to send you push notifications regarding your account or certain features of the application(s)."],
        },
        {
          subtitle: "Information automatically collected",
          text: "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.",
        },
        {
          subtitle: "Google API",
          text: "Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.",
        },
      ],
    },
    {
      number: "2",
      title: "HOW DO WE PROCESS YOUR INFORMATION?",
      content: [
        {
          text: "We process your personal information for a variety of reasons, including:",
          items: [
            "To facilitate account creation and authentication",
            "To deliver and facilitate delivery of services to the user",
            "To respond to user inquiries and offer support",
            "To fulfill and manage your orders",
            "To enable user-to-user communications",
            "To request feedback",
            "To send you marketing and promotional communications",
            "To deliver targeted advertising to you",
            "To post testimonials",
            "To protect our Services from fraud and security threats",
            "To identify usage trends",
            "To determine the effectiveness of marketing campaigns",
            "To comply with our legal obligations",
          ],
        },
      ],
    },
    {
      number: "3",
      title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
      content: [
        {
          text: "We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf. The categories of third parties we may share personal information with are as follows:",
          items: [
            "Ad Networks",
            "AI Platforms",
            "Communication & Collaboration Tools",
            "Data Analytics Services",
            "Data Storage Service Providers",
            "Finance & Accounting Tools",
            "Payment Processors",
            "Performance Monitoring Tools",
            "Retargeting Platforms",
            "Product Engineering & Design Tools",
            "Sales & Marketing Tools",
            "Social Networks",
            "Testing Tools",
            "User Account Registration & Authentication Services",
            "Website Hosting Service Providers",
          ],
        },
        {
          text: "We also may need to share your personal information in connection with Business Transfers (mergers, sale of assets) or with our Affiliates and Business Partners.",
        },
      ],
    },
    {
      number: "4",
      title: "WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?",
      content: [
        {
          text: "The Services may link to third-party websites or contain advertisements from third parties not affiliated with us. We cannot guarantee the safety and privacy of data you provide to any third parties.",
        },
      ],
    },
    {
      number: "5",
      title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
      content: [
        {
          text: "We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information. We use Google Analytics to track and analyze the use of the Services.",
          links: [
            { text: "Opt out of Google Analytics", url: "https://tools.google.com/dlpage/gaoptout" },
          ],
        },
      ],
    },
    {
      number: "6",
      title: "DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?",
      content: [
        {
          text: "We provide AI Products through third-party service providers, including Anthropic, DeepSeek, and Google Cloud AI. Our AI Products are used for research, automation, development, text and video analysis, document generation, insights, translation, and applications. You can opt out by contacting us.",
        },
      ],
    },
    {
      number: "7",
      title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
      content: [
        {
          text: "If you register with social media, we receive certain profile information (like name, email, and profile picture). We use this only for the purposes described in this Privacy Notice.",
        },
      ],
    },
    {
      number: "8",
      title: "HOW LONG DO WE KEEP YOUR INFORMATION?",
      content: [
        {
          text: "We keep your personal information generally for the period of time in which users have an account with us. When we have no ongoing legitimate business need, we will either delete or anonymize your information.",
        },
      ],
    },
    {
      number: "9",
      title: "HOW DO WE KEEP YOUR INFORMATION SAFE?",
      content: [
        {
          text: "We have implemented reasonable technical and organizational security measures. However, no electronic transmission or storage is 100% secure, and transmission is at your own risk.",
        },
      ],
    },
    {
      number: "10",
      title: "DO WE COLLECT INFORMATION FROM MINORS?",
      content: [
        {
          text: "By using the Services, you represent that you are at least 18. If we learn we have collected data from users under 18, we will deactivate the account and delete the data.",
        },
      ],
    },
    {
      number: "11",
      title: "WHAT ARE YOUR PRIVACY RIGHTS?",
      content: [
        {
          text: "If we rely on your consent to process data, you have the right to withdraw it at any time. You can opt out of marketing communications by clicking the unsubscribe link or replying 'STOP' or 'UNSUBSCRIBE'.",
        },
        {
          subtitle: "Account Information",
          text: "You can log in to your account settings to update information or contact us to terminate your account.",
        },
      ],
    },
    {
      number: "12",
      title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
      content: [
        {
          text: "Most web browsers include a Do-Not-Track ('DNT') feature. We do not currently respond to DNT browser signals as no uniform technology standard has been finalized.",
        },
      ],
    },
    {
      number: "13",
      title: "DO WE MAKE UPDATES TO THIS NOTICE?",
      content: [
        {
          text: "The updated version will be indicated by an updated 'Revised' date at the top. We may notify you of material changes.",
        },
      ],
    },
    {
      number: "14",
      title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
      content: [
        {
          text: "If you have questions or comments about this notice, you may email us at support@ferel.app or contact us by post at:",
        },
        {
          subtitle: "FERELVIAN FINALFORM RETAIL (OPC) PRIVATE LIMITED",
          text: "39/2475-B1, Suite E61, LR Towers\nSJRRA 104, South Janatha Road\nPalarivattom, Kochi, Kerala 682025\nIndia",
        },
      ],
    },
    {
      number: "15",
      title: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
      content: [
        {
          text: "Based on applicable laws, you may have the right to request access to your personal information, correct inaccuracies, or delete it. To exercise these rights, please contact us or submit a data subject access request.",
        },
      ],
    },
  ];

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
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: <span className="text-foreground font-medium">March 21, 2026</span>
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              This Privacy Notice for <strong className="text-foreground">FERELVIAN FINALFORM RETAIL (OPC) PRIVATE LIMITED</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Visit our website at <a href="https://ferel.app/" className="text-primary hover:underline">https://ferel.app/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Download and use our mobile application (Ferel: Stock Market News AI) or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-foreground">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@ferel.app" className="text-primary hover:underline">support@ferel.app</a>.
            </p>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Summary of Key Points</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span>
              </li>
            </ul>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {section.number}. {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.number}
                id={`section-${section.number}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {section.number}. {section.title}
                </h2>
                <div className="space-y-6 text-gray-300">
                  {section.content.map((content, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      {content.subtitle && (
                        <h3 className="text-lg font-semibold text-foreground">{content.subtitle}</h3>
                      )}
                      <p className="leading-relaxed">{content.text}</p>
                      {content.items && (
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          {content.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {content.links && (
                        <div className="space-y-2 ml-4">
                          {content.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline block"
                            >
                              {link.text} →
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-400 mb-6">
              We're here to help. Contact us anytime about your privacy concerns.
            </p>
            <a
              href="mailto:support@ferel.app"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-background px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <Mail size={18} />
              <span>Email Support</span>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Ferelvian Finalform Retail (OPC) Private Limited. All rights reserved.</p>
          <p className="mt-2">Kochi, Kerala, India</p>
        </div>
      </footer>
    </div>
  );
}
