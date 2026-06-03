"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern -z-10" />
      <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 -z-10 animate-pulse" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-[var(--accent)] text-sm font-bold tracking-[0.15em] uppercase">
              Creative • Marketing • Development
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-[5.5rem] font-bold tracking-tight font-[family-name:var(--font-display)] leading-[1.05]"
          >
            We grow brands <br />
            with <span className="text-[var(--accent)]">ads, design <br className="hidden md:block" />& code.</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-[480px] leading-relaxed"
          >
            Meta Ads, Google Ads, video content, UI/UX, and full-stack SaaS — everything your brand needs to scale, under one roof.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="group flex items-center justify-center px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium rounded-full transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              See Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-[var(--border)] hover:border-gray-300 dark:hover:border-[var(--foreground)] text-gray-900 dark:text-[var(--foreground)] font-medium rounded-full transition-all shadow-sm"
            >
              Book a Call
            </a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/100?img=11",
                "https://i.pravatar.cc/100?img=33",
                "https://i.pravatar.cc/100?img=44"
              ].map((src, i) => (
                <img key={i} src={src} alt="Client" className="w-12 h-12 rounded-full border-2 border-white dark:border-[var(--background)] object-cover shadow-sm" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 dark:text-white">Join 50+ brands scaling with us</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-[var(--muted)]">4.9/5 from 30+ reviews</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Dashboard Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full max-w-[640px] mx-auto ml-10">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative bg-white dark:bg-[var(--card-bg)] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-[var(--border)] overflow-hidden flex transform-gpu"
              style={{ transform: 'perspective(1200px) rotateY(-8deg) rotateX(4deg)' }}
            >
              {/* Sidebar */}
              <div className="w-[160px] bg-[#f8f9fa] dark:bg-[var(--section-bg)] p-5 border-r border-gray-100 dark:border-[var(--border)] flex flex-col gap-2">
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Nexus.</div>
                {[
                  { name: 'Overview', active: true },
                  { name: 'Campaigns', active: false },
                  { name: 'Analytics', active: false },
                  { name: 'Reports', active: false },
                  { name: 'Inbox', active: false },
                  { name: 'Settings', active: false }
                ].map((menu, i) => (
                  <div key={i} className={`h-10 rounded-xl flex items-center px-4 ${menu.active ? 'bg-[var(--accent)] text-white shadow-md' : 'text-gray-500 dark:text-[var(--muted)] hover:bg-gray-200/50 dark:hover:bg-[var(--card-bg)]'}`}>
                    <div className={`w-4 h-4 rounded-sm mr-3 ${menu.active ? 'bg-white/30' : 'bg-gray-300 dark:bg-[var(--border)]'}`} />
                    <span className="text-sm font-medium">{menu.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-8 flex flex-col gap-6 bg-white dark:bg-[var(--card-bg)]">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Total Revenue', value: '$48,290', trend: '+18.2%' },
                    { label: 'Ad Spend', value: '$12,430', trend: '-8.3%', down: true },
                    { label: 'New Leads', value: '847', trend: '+34.6%' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl border border-gray-100 dark:border-[var(--border)] bg-[#f8f9fa]/50 dark:bg-[var(--section-bg)]">
                      <div className="text-xs text-gray-500 dark:text-[var(--muted)] font-medium mb-1.5">{stat.label}</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className={`text-xs mt-2 font-semibold ${stat.down ? 'text-red-500' : 'text-emerald-500'}`}>
                        {stat.down ? '↓' : '↑'} {stat.trend.replace(/[+-]/, '')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="flex-1 min-h-[160px] rounded-2xl border border-gray-100 dark:border-[var(--border)] bg-[#f8f9fa]/50 dark:bg-[var(--section-bg)] p-5 flex flex-col justify-end gap-2 relative overflow-hidden">
                   <div className="absolute top-4 left-5 text-sm font-bold text-gray-900 dark:text-white">Revenue Overview</div>
                   <div className="flex items-end h-24 gap-1.5 mt-6 w-full">
                     {[30, 45, 35, 60, 40, 75, 55, 80, 60, 90, 75, 100].map((height, i) => (
                       <motion.div
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${height}%` }}
                         transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                         className="flex-1 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-t-sm opacity-80 transition-colors"
                       />
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements mimicking the mockup */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-12 top-32 bg-white/90 backdrop-blur-md dark:bg-[var(--card-bg)]/90 p-4 rounded-3xl shadow-xl border border-white/50 dark:border-[var(--border)] flex items-center justify-center w-24 h-24 z-10"
            >
              {/* Google Ads-like logo shape */}
              <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 w-8 h-4 bg-yellow-400 rounded-full transform -rotate-45 origin-bottom-left" />
                <div className="absolute top-2 left-2 w-10 h-4 bg-blue-500 rounded-full transform -rotate-45" />
                <div className="absolute bottom-1 left-4 w-4 h-4 bg-green-500 rounded-full" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -left-10 bottom-24 bg-white/90 backdrop-blur-md dark:bg-[var(--card-bg)]/90 p-5 rounded-3xl shadow-xl border border-white/50 dark:border-[var(--border)] z-10 w-48"
            >
               <div className="text-sm text-gray-500 dark:text-[var(--muted)] font-medium mb-1 flex justify-between">
                 <span>ROAS</span>
                 <span className="text-emerald-500 text-xs font-bold bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full">↑ 22.1%</span>
               </div>
               <div className="text-3xl font-bold text-gray-900 dark:text-white">4.2x</div>
               <div className="mt-4 w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-[var(--accent)] w-[75%] rounded-full" />
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
