"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [method, setMethod] = useState<'email' | 'whatsapp'>('email');
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactInfo: "",
    service: "SAAS_DEV",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.contactInfo,
          service: formData.service,
          message: formData.message,
        })
      });

      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ firstName: "", lastName: "", contactInfo: "", service: "SAAS_DEV", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[var(--section-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-[var(--card-bg)] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl border border-[var(--border)] overflow-hidden relative">
          
          {/* Decorative blobs */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 tracking-tight leading-tight">
                  Let's build <br/>something <span className="text-[var(--accent)]">extraordinary.</span>
                </h2>
                <p className="text-[var(--muted)] text-xl mb-12 max-w-md leading-relaxed">
                  Ready to scale your brand? Drop us a line and we'll get back to you within 24 hours to discuss how we can help.
                </p>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-sm text-[var(--muted)] uppercase tracking-wider mb-2">Email Us</h4>
                  <a href="mailto:hello@nexusstudio.co" className="text-2xl font-medium hover:text-[var(--accent)] transition-colors">hello@nexusstudio.co</a>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--muted)] uppercase tracking-wider mb-2">Call Us</h4>
                  <a href="tel:+1234567890" className="text-2xl font-medium hover:text-[var(--accent)] transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--background)] p-8 md:p-12 rounded-[2rem] border border-[var(--border)] shadow-inner">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[var(--muted)]">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">First Name</label>
                      <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all text-[var(--foreground)]" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1">Last Name</label>
                      <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all text-[var(--foreground)]" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Preferred Contact Method</label>
                    <div className="flex p-1.5 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
                      <button 
                        type="button"
                        onClick={() => setMethod('email')}
                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${method === 'email' ? 'bg-[var(--accent)] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}
                      >
                        Email
                      </button>
                      <button 
                        type="button"
                        onClick={() => setMethod('whatsapp')}
                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${method === 'whatsapp' ? 'bg-[#25D366] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">{method === 'email' ? 'Email Address' : 'WhatsApp Number'}</label>
                    <input 
                      required
                      type={method === 'email' ? 'email' : 'tel'} 
                      value={formData.contactInfo}
                      onChange={e => setFormData({...formData, contactInfo: e.target.value})}
                      className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all text-[var(--foreground)]" 
                      placeholder={method === 'email' ? 'john@company.com' : '+1 (555) 000-0000'} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Service Required</label>
                    <select required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all text-[var(--foreground)]">
                      <option value="META_ADS">Meta Ads</option>
                      <option value="GOOGLE_ADS">Google Ads</option>
                      <option value="VIDEO_EDITING">Video Editing</option>
                      <option value="UI_UX">UI/UX Design</option>
                      <option value="SAAS_DEV">SaaS Development</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">How can we help?</label>
                    <textarea required minLength={10} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all resize-none text-[var(--foreground)]" placeholder="Tell us about your project and goals..."></textarea>
                  </div>

                  {status === "error" && <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>}

                  <button disabled={status === "loading"} type="submit" className="w-full py-4 mt-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group text-lg disabled:opacity-70">
                    {status === "loading" ? "Sending..." : "Send Message"}
                    {status !== "loading" && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
