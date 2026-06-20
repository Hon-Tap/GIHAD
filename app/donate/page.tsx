"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Heart,
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  TrendingUp,
  Coins
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function DonatePage() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-zinc-700 antialiased selection:bg-emerald-600/10 pb-32">
      
      {/* ================= HERO ARCHITECTURE (Deep Forest Green Brand Theme) ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-32">
        {/* Subtle glow accent mirroring the structural matrix from image_be048c.png */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_40%)]" />
        <div className="absolute inset-0 z-0 opacity-[0.015] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/30 bg-emerald-950/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                <Coins className="h-3 w-3 text-emerald-400" /> Capital & Resource Mobilization
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl leading-[1.05] text-white"
            >
              Fueling Frontline Pipelines. <br />
              <span className="text-emerald-400">Sustaining Deep Impact.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-base leading-relaxed text-emerald-100/70 font-medium"
            >
              GIHAD manages high-transparency project accounts. Direct resource allocations support regional nutrition clusters, seed bank distribution structures, and structural emergency clean water deployment grids across South Sudan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= FUNDING TIERS SECTION (Clean Light Matrix) ================= */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <div className="mb-12 max-w-xl">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase block mb-2">Institutional Routing</span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Select Funding Protocol</h2>
            <p className="text-sm text-zinc-500 mt-1">Review our standard tracking pipelines. All clear capital clearances require explicit coordinator alignment.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Heart,
                title: "Emergency Response",
                metric: "CRITICAL PIPELINE",
                text: "Directly funds rapid-deployment nutrition paste distribution, severe acute malnutrition triage kits, and localized airborne medicine networks.",
              },
              {
                icon: Briefcase,
                title: "Agrarian Recovery",
                metric: "SUSTAINABLE ASSETS",
                text: "Allocates long-term micro-grants for community tools, robust seed varieties resilient to climate volatility, and cooperative storage units.",
              },
              {
                icon: Layers,
                title: "WASH Infrastructure",
                metric: "CAPITAL PROJECTS",
                text: "Underwrites deep solar-powered borehole drilling operations, water-purification chemical logistics, and community sanitation block integration.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-8 hover:border-emerald-600/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF9F5] border border-zinc-100 text-emerald-800 group-hover:text-white group-hover:bg-emerald-700 transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-emerald-700 transition-colors">
                        {item.metric}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-600 transition-colors group/link"
                    >
                      <span>Request Transfer Info</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ================= SECURE MANUAL DISBURSEMENT GATEWAY ================= */}
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-7xl border border-zinc-200/80 bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 p-6 text-zinc-100 pointer-events-none opacity-40 hidden md:block">
            <Fingerprint className="h-36 w-36 stroke-[1]" />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF9F5] border border-zinc-100">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Offline Allocation Clearances & Bank Routing
              </h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                To fulfill our commitment to zero systemic leaks and complete compliance with RRC guidelines, GIHAD bypasses digital third-party processing fees. All programmatic donations, physical asset grants, and international wire clearings are processed manually via certified institutional bank transfers.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                <span className="flex items-center gap-1"><TrendingUp className="h-3.5 w-3.5 text-emerald-600" /> 100% Directed to Field Budgets</span>
                <span className="h-3 w-[1px] bg-zinc-200" />
                <span>Audited In Juba HQ</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-800 px-6 text-xs font-bold text-white hover:bg-emerald-900 transition-colors shadow-sm"
              >
                Connect with Secretariat Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}