"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { useEffect, useState } from "react";

const fallbackTestimonials = [
  { reviewerName: "Sarah Jenkins", role: "CMO", company: "TechFlow", text: "Nexus Studio completely transformed our go-to-market strategy. The new web app they built is stunning, and their ad campaigns lowered our CPA by 40%.", avatarInitials: "SJ" },
  { reviewerName: "David Chen", role: "Founder", company: "Elevate", text: "Working with this team was seamless. They understood our brand vision immediately and delivered a product that exceeded our expectations in every way.", avatarInitials: "DC" },
  { reviewerName: "Emily Watson", role: "Director", company: "Loom", text: "Their UI/UX expertise is unmatched. The design is not only beautiful but incredibly intuitive. Our user retention has doubled since launch.", avatarInitials: "EW" },
  { reviewerName: "Marcus Johnson", role: "CEO", company: "GrowthCo", text: "Nexus doesn't just build websites; they build scalable businesses. The full-stack SaaS platform they developed for us is rock solid.", avatarInitials: "MJ" },
  { reviewerName: "Lisa Ray", role: "Marketing VP", company: "Sync", text: "The best agency experience we've ever had. Fast, responsive, and incredibly talented. They are now an extension of our own team.", avatarInitials: "LR" }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([...fallbackTestimonials, ...fallbackTestimonials]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    fetch(`${apiUrl}/api/testimonials`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setTestimonials([...data, ...data]);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <section className="py-32 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 tracking-tight">Don't just take our word for it.</h2>
        <p className="text-[var(--muted)] text-xl">Trusted by founders and marketing teams worldwide.</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Marquee effect using Framer Motion */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 px-4 w-max"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-[350px] md:w-[450px] bg-[var(--card-bg)] rounded-[2rem] p-8 md:p-10 border border-[var(--border)] shadow-md shrink-0 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-[var(--foreground)]">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--accent)] to-purple-400 shadow-sm flex items-center justify-center text-white font-bold text-lg">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--foreground)] text-lg">{t.reviewerName}</h4>
                  <p className="text-[var(--muted)] text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
