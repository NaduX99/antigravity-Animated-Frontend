"use client";

import { Facebook, Instagram, Twitter, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-gray-900/95 backdrop-blur-md border-t border-white/10 pt-20 pb-10 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold">Nano Banana</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Crafting the future of freshness through cold-pressed innovation and ethical sourcing. Pure nature, bottled for you.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            <SocialIcon icon={<Facebook className="w-5 h-5" />} />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><FooterLink href="#">All Juices</FooterLink></li>
            <li><FooterLink href="#">Limited Editions</FooterLink></li>
            <li><FooterLink href="#">Bundles</FooterLink></li>
            <li><FooterLink href="#">Subscriptions</FooterLink></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><FooterLink href="#">Shipping Info</FooterLink></li>
            <li><FooterLink href="#">Return Policy</FooterLink></li>
            <li><FooterLink href="#">Store Locator</FooterLink></li>
            <li><FooterLink href="#">Contact Us</FooterLink></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Newsletter</h4>
          <p className="text-gray-400 text-sm">Get the latest freshness updates and offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/10 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-colors"
            />
            <button className="absolute right-2 top-2 bg-orange-500 p-1.5 rounded-full hover:bg-orange-600 shadow-[0_10px_22px_rgba(249,115,22,0.35)] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Mail className="w-3 h-3" />
            <span>fresh@nanobanana.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
        <p>© {year} Nano Banana. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -3, backgroundColor: "rgba(249, 115, 22, 1)" }}
      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-orange-500 transition-colors inline-block relative group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
