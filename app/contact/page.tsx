"use client";

import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Clock3,
  ShieldCheck,
  Eye
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-zinc-800 antialiased selection:bg-emerald-700/20 pb-32">
      
      {/* ================= HIGH-CONTRAST ACCESSIBLE HERO SECION ================= */}
      <section className="relative overflow-hidden pt-40 pb-20 border-b border-zinc-200 bg-white">
        {/* Subtle geometric structural grid texture inspired by image_be048c.png */}
        <div className="absolute inset-0 z-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            
            {/* LEFT COLUMN: HIGH READABILITY TEXT PANELS */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-800/20 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-900 font-mono">
                  <Eye className="h-3.5 w-3.5 text-emerald-800" /> High-Contrast Accessibility Mode
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl leading-[1.05] text-[#062F1D]"
              >
                Let’s Anchor Sustainable <br />
                <span className="text-emerald-700">Transformations.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl text-base leading-relaxed text-zinc-600 font-medium"
              >
                Whether you are registering a programmatic donation intent, coordinating cluster deployment, or establishing institutional agrarian frameworks, our tracking secretariat balances verified transparency across all parameters.
              </motion.p>

              {/* ACCESSIBLE CONTACT CARDS */}
              <motion.div variants={fadeInUp} className="pt-4 space-y-3 max-w-lg">
                {[
                  {
                    icon: Mail,
                    title: "Email Gateway",
                    value: "gfad3019@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Direct Coordination Line",
                    value: "+211 922 522747",
                  },
                  {
                    icon: MapPin,
                    title: "Secretariat Headquarters",
                    value: "Tongpiny, Juba • South Sudan",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-[#FAF9F5] p-4 transition-colors hover:bg-white"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#062F1D] text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                          {item.title}
                        </p>
                        <p className="text-base font-bold text-[#062F1D] mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: HIGH-CONTRAST FORM PORTAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border-2 border-zinc-300 bg-[#FAF9F5] p-8 shadow-sm">
                
                <div className="flex items-start justify-between gap-4 border-b border-zinc-200/80 pb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">
                      Secure Communications
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-[#062F1D] mt-1">
                      Initiate System Dialogue
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-zinc-200 text-[#062F1D]">
                    <Send className="h-4 w-4" />
                  </div>
                </div>

                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Full Identity
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name..."
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Secure Email
                      </label>
                      <input
                        type="email"
                        placeholder="partner@institution.org"
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Organization / Entity
                      </label>
                      <input
                        type="text"
                        placeholder="Multilateral Agency"
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Subject Matrix
                      </label>
                      <input
                        type="text"
                        placeholder="Resource Clearance Allocation"
                        className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Message Parameters
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify requirements, funding deployment intents, or operational coordinates..."
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
                      <Clock3 className="h-4 w-4 text-emerald-800" />
                      <span>Tracking response: 24–48 Hours</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#062F1D] px-6 text-xs font-bold text-white shadow-sm hover:bg-emerald-900 transition-colors whitespace-nowrap"
                    >
                      <span>Transmit Entry</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GEOGRAPHIC REGULATORY GRID ================= */}
      <section className="mt-16 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs">
          <div className="grid divide-y divide-zinc-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
            {[
              {
                title: "Operational Frameworks",
                text: "Full monitoring presence deployed across Upper Nile, Jonglei, Central Equatoria, Bahr El Ghazal, Abyei, and Pibor Administrative Area.",
              },
              {
                title: "Compliance Verification",
                text: "Aligning deep stakeholder workflows with international standards, domestic NGO regulations, and structured cluster rules.",
              },
              {
                title: "Systemic Agribusiness & WASH",
                text: "Directing foundational infrastructure development towards clean hydro-logistics and community asset resilience networks.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-800" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#062F1D] uppercase">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 font-medium">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}