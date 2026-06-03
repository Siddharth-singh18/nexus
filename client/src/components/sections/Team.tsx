"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const fallbackTeam = [
  { name: "Siddharth Singh", role: "Co-Founder / Full-Stack & Systems", avatarUrl: "/team/siddharth_nexus.png" },
  { name: "Prince Upadhyay", role: "Co-Founder / Frontend & UI Architecture", avatarUrl: "/team/prince_nexus.png" },
  { name: "Abhishek Singh", role: "Lead / Growth & Meta Ads", avatarUrl: "/team/abhishek_nexus.png" },
];

export default function Team() {
  const [team, setTeam] = useState<any[]>(fallbackTeam);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    fetch(`${apiUrl}/api/team`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setTeam(data);
      })
      .catch(console.error);
  }, []);
  return (
    <section id="team" className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 tracking-tight">The minds behind the magic.</h2>
            <p className="text-[var(--muted)] text-xl">A small, elite team of founders and specialists dedicated to scaling your business.</p>
          </div>
          <a href="#contact" className="group hidden md:flex items-center text-[var(--foreground)] font-medium text-lg">
            Join our team
            <span className="ml-3 w-10 h-10 rounded-full bg-[var(--section-bg)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-white transition-all group-hover:scale-110 shadow-sm">
              →
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pb-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group flex flex-col ${index === 1 ? 'md:mt-16' : index === 2 ? 'md:mt-32' : ''}`}
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-[var(--section-bg)] shadow-xl">
                <img 
                  src={member.avatarUrl || "https://i.pravatar.cc/500"} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-[var(--foreground)]">{member.name}</h3>
              <p className="text-[var(--accent)] font-medium text-sm md:text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
