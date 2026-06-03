"use client";

import { motion } from "framer-motion";
import { Megaphone, Search, Video, PenTool, Code, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Meta Ads",
    description: "Data-driven Facebook and Instagram campaigns that convert clicks into loyal customers and scale your revenue.",
    icon: Megaphone,
  },
  {
    title: "Google Ads",
    description: "Capture high-intent traffic with targeted Search and Performance Max campaigns optimized for ROI.",
    icon: Search,
  },
  {
    title: "Video Editing",
    description: "Engaging short-form and long-form video content designed for modern social media algorithms.",
    icon: Video,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and elevate your brand aesthetic.",
    icon: PenTool,
  },
  {
    title: "SaaS Development",
    description: "Scalable, full-stack web applications tailored to solve complex business problems.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">Our Services</h2>
          <p className="text-[var(--muted)] text-lg">Comprehensive digital solutions to accelerate your growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--section-bg)] flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] transition-colors">
                  <Icon className="text-[var(--foreground)] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">{service.description}</p>
                <a href="#contact" className="inline-flex items-center font-medium text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
