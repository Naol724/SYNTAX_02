'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram,
  ChevronRight, ArrowRight, Twitter, Facebook, Send
} from "lucide-react";
import { SocialBar } from "@/components/ui/social";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#website", label: "Website Development" },
  { href: "/services#mobile", label: "Mobile Applications" },
  { href: "/services#gaming", label: "Gaming Platforms" },
  { href: "/services#enterprise", label: "Enterprise Systems" },
  { href: "/services#bots", label: "Bot Development" },
  { href: "/services#cloud", label: "Cloud & DevOps" },
  { href: "/services#design", label: "UI/UX Design" },
  { href: "/services#support", label: "Support & Maintenance" },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-gray-300 border-t border-gray-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all"
              >
                <span className="text-white font-black text-xl leading-none">S</span>
              </motion.div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg">Syntax Software</div>
                <div className="text-xs text-blue-400 font-semibold tracking-wide">Solutions</div>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Building the Digital Future of Ethiopia since 2019. 
              A full-stack software company delivering websites, mobile apps, 
              gaming platforms, enterprise systems, and AI-powered bots.
            </p>

            {/* Social Links */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Us</p>
              <SocialBar />
            </div>

            {/* Contact CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20">
              <h4 className="font-semibold text-white mb-2">Ready to start?</h4>
              <p className="text-sm text-gray-400 mb-4">Get in touch and let's build something great.</p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-white mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="font-semibold text-white mb-6 text-sm">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.03 }}
                >
                  <Link href={service.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="font-semibold text-white mb-6 text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Address</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Bole Dembel, Amir Commercial Complex<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-sm text-gray-400">
                    +251 945 455 141<br />
                    +251 940 023 840
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm text-gray-400">
                    syntaxsoftwaresolution@gmail.com
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Mon–Fri: 8AM–6PM<br />
                    Sat: 9AM–4PM • Support: 24/7
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-gray-800/50 text-gray-400 text-xs font-medium rounded-lg border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              © {currentYear} Syntax Software Solutions. All rights reserved.
            </motion.p>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Get Support
              </Link>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-600"
            >
              syntaxsoftwaresolution.com
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}