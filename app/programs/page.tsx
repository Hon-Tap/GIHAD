
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  HeartPulse,
  ShieldCheck,
  Droplets,
  Users,
  Tractor,
  Fish,
  Globe2,
} from "lucide-react";

const strategicPrograms = [
  {
    label: "GROW",
    title: "Agriculture & Food Systems",
    description:
      "Scaling food production through climate-smart agriculture, tractors, fishing kits, farmer cooperatives, and sustainable cultivation systems.",
    image:
      "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2070&auto=format&fit=crop",
    icon: Sprout,
    metrics: [
      "120+ farming cooperatives",
      "Climate-smart agriculture",
      "Agricultural machinery access",
    ],
  },
  {
    label: "RESTORE",
    title: "Livelihood & Economic Recovery",
    description:
      "Protecting vulnerable households through economic resilience programs, VSLA initiatives, livelihood restoration, and local asset empowerment.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    icon: Users,
    metrics: [
      "Village savings initiatives",
      "Fishing & recovery kits",
      "Community resilience training",
    ],
  },
  {
    label: "NOURISH",
    title: "Health, WASH & Protection",
    description:
      "Delivering healthcare outreach, nutrition support, WASH infrastructure, protection systems, and emergency humanitarian response.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    icon: HeartPulse,
    metrics: [
      "Community healthcare systems",
      "Nutrition interventions",
      "Water & sanitation access",
    ],
  },
];

const sectors = [
  {
    icon: Tractor,
    title: "Agricultural Mechanization",
  },
  {
    icon: Fish,
    title: "Food Security & Fishing Systems",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
  },
  {
    icon: Droplets,
    title: "WASH Infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Inclusion",
  },
  {
    icon: Globe2,
    title: "Climate Resilience",
  },
];

export default function ProgramsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5] text-zinc-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl"
            >
              Strategic Humanitarian Programs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-5xl font-serif leading-[1.05] tracking-tight text-white md:text-7xl"
            >
              Building Resilient Communities Through Integrated Humanitarian Action.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300"
            >
              GIHAD deploys long-term community-centered programs addressing
              food insecurity, healthcare access, economic vulnerability,
              agricultural resilience, and humanitarian protection systems
              across South Sudan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500">
                <span>Explore Interventions</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Download Framework
              </button>
            </motion.div>

          </div>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-[90px] w-full fill-[#FAF9F5]"
          >
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= STRATEGIC PROGRAMS ================= */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Operational Programs
            </span>

            <h2 className="mt-4 text-4xl font-serif tracking-tight text-zinc-900 md:text-6xl">
              Institutional Programs Designed Around Human Survival & Recovery.
            </h2>
          </div>

          <div className="mt-20 space-y-24">

            {strategicPrograms.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`grid items-center gap-14 lg:grid-cols-2 ${
                    index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  
                  {/* IMAGE */}
                  <div className={`${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
                      
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                        {program.label}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={`${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                      <Icon className="h-7 w-7 text-emerald-700" />
                    </div>

                    <h3 className="mt-8 text-4xl font-serif tracking-tight text-zinc-900">
                      {program.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                      {program.description}
                    </p>

                    <div className="mt-10 space-y-4">
                      {program.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-emerald-600" />
                          <span className="text-zinc-700">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <button className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-800">
                      <span>View Full Intervention</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= SECTOR GRID ================= */}
      <section className="border-y border-zinc-200 bg-white py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Sectors of Intervention
            </span>

            <h2 className="mt-4 text-4xl font-serif tracking-tight text-zinc-900 md:text-5xl">
              Multi-Sector Humanitarian Response Systems.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-[2rem] border border-zinc-200 bg-[#FAF9F5] p-8 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">
                    <Icon className="h-6 w-6 text-emerald-700 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif tracking-tight text-zinc-900">
                    {sector.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-600">
                    Integrated community-centered intervention systems designed
                    for long-term resilience and sustainable humanitarian recovery.
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif leading-tight tracking-tight text-white"
          >
            Sustainable Programs Built Around Human Dignity & Community Recovery.
          </motion.h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            GIHAD continues to strengthen vulnerable communities through
            agriculture, healthcare, emergency response, protection systems,
            and long-term humanitarian resilience frameworks.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500">
              Partner With GIHAD
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Support Humanitarian Programs
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}