"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Globe2,
  ArrowRight,
  ShieldAlert,
  Fingerprint,
  Radio
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

export default function GetInvolvedPage() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-zinc-700 antialiased selection:bg-emerald-600/10 pb-32">
      
      {/* ================= HERO ARCHITECTURE (Deep Forest Green Brand Theme) ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-32">
        {/* Subtle glow accent echoing the design matrix from image_be048c.png */}
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
                <Radio className="h-3 w-3 animate-pulse" /> Personnel Deployment 2026
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl leading-[1.05] text-white"
            >
              Systemic Collaboration. <br />
              <span className="text-emerald-400">Frontline Mobilization.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-base leading-relaxed text-emerald-100/70 font-medium"
            >
              GIHAD opens localized operational tracking frameworks to institutional international actors, field specialists, and strategic compliance partners looking to anchor development grids within South Sudan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= ENGAGEMENT PILLARS SECTION (Clean Light Matrix) ================= */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Users,
                title: "Field Deployment",
                metric: "VOLUNTEER PIPELINE",
                text: "Integrate directly within regional coordination hubs, supporting mechanical asset verification and rapid nutritional logistics distributions.",
              },
              {
                icon: HeartHandshake,
                title: "Institutional Alliance",
                metric: "STRATEGIC PARTNER",
                text: "Co-sign joint operational matrix frameworks to scale baseline agrarian resilience structures and clean fluid assets under cluster regulations.",
              },
              {
                icon: Globe2,
                title: "Resilience Advocacy",
                metric: "AWARENESS GRID",
                text: "Amplify verified grassroots accountability records, transitioning raw field monitoring metrics into global legislative visibility.",
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
                      <span>Initiate Request</span>
                      <ArrowRight className="h-3,5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ================= TACTICAL TRUST & CLOSING CTA ================= */}
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-7xl border border-zinc-200/80 bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 p-6 text-zinc-100 pointer-events-none opacity-40 hidden md:block">
            <Fingerprint className="h-36 w-36 stroke-[1]" />
          </div>

          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF9F5] border border-zinc-100">
              <ShieldAlert className="h-4 w-4 text-emerald-700" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Ready to transition accountability parameters into active execution?
              </h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                All partnership applications and operational inquiries are logged through our secure communications framework to sync directly with Juba secretariat coordinators.
              </p>
            </div>
            
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-800 px-5 text-xs font-bold text-white hover:bg-emerald-900 transition-colors shadow-sm"
              >
                Access Contact Gateway
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}