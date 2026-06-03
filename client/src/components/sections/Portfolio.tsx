"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useEffect, useState } from "react";

const fallbackProjects = [
  { title: "PayFlow", category: "Fintech Web App", thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", color: "bg-blue-500" },
  { title: "CloudLab", category: "Developer Platform", thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", color: "bg-purple-500" },
  { title: "Aura Aesthetics", category: "E-Commerce", thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", color: "bg-amber-500" }
];

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>(fallbackProjects);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    fetch(`${apiUrl}/api/portfolio`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setProjects(data);
      })
      .catch(console.error);
  }, []);
  return (
    <section id="portfolio" className="py-32 bg-[var(--section-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
           <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 tracking-tight">Selected Work</h2>
           <p className="text-[var(--muted)] text-xl max-w-2xl">Digital products and campaigns that drive real results. We don't just build, we launch and scale.</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group cursor-pointer`}
            >
              {/* Image Container */}
              <div className="w-full md:w-3/5 relative overflow-hidden rounded-[2rem] aspect-[4/3] md:aspect-[16/10] bg-[var(--card-bg)] shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg">
                  <span className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">{project.category}</span>
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-full mb-8 ${project.color || 'bg-blue-500'} flex items-center justify-center text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg`}>
                   <ArrowUpRight size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)] group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                <div className="w-full h-[1px] bg-[var(--border)] my-6 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full ${project.color || 'bg-blue-500'} w-0 group-hover:w-full transition-all duration-700 ease-in-out`} />
                </div>
                <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
                  We partnered with {project.title} to completely overhaul their digital presence, resulting in a 3x increase in conversion rate and streamlined user flows.
                </p>
                <a href="#" className="inline-flex items-center text-[var(--foreground)] font-bold text-lg group/link">
                  View Case Study
                  <ArrowUpRight className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[var(--border)] hover:border-[var(--foreground)] rounded-full font-medium transition-colors text-lg">
             View All Projects
           </a>
        </div>
      </div>
    </section>
  );
}
