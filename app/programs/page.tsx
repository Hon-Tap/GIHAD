"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  HeartPulse,
  ShieldCheck,
  Droplets,
  Users,
  Globe2,
  Wheat,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const strategicPrograms = [
  {
    label: "Agriculture",
    title: "Food Security & Agricultural Resilience",
    description:
      "Strengthening local agrarian infrastructure through climate-smart cultivation, adaptive seed distribution channels, and localized capacity building to transition communities from vulnerability to food sovereignty.",
    image: "/seedlingtraining.jpeg",
    icon: Sprout,
    metrics: [
      "Climate-smart farming systems",
      "Farmer empowerment & training",
      "Sustainable food production",
    ],
  },
  {
    label: "Healthcare",
    title: "Community Health & Emergency Outreach",
    description:
      "Deploying integrated primary healthcare outreach, maternal care services, routine child immunization campaigns, and clinical response pipelines to hard-to-reach frontline zones.",
    image: "/vacination.jpeg",
    icon: HeartPulse,
    metrics: [
      "Vaccination outreach programs",
      "Emergency medical support",
      "Community healthcare systems",
    ],
  },
  {
    label: "Humanitarian",
    title: "Protection & Humanitarian Response",
    description:
      "Providing immediate safety diagnostics, protective monitoring networks, and targeted emergency distribution systems for internally displaced populations (IDPs) and communities impacted by sudden environmental shocks.",
    image: "/workshop.jpeg",
    icon: HeartHandshake,
    metrics: [
      "Emergency preparedness workshops",
      "Community resilience systems",
      "Humanitarian coordination support",
    ],
  },
];

const sectors = [
  {
    icon: Wheat,
    title: "Food Security",
    description: "Developing adaptive agronomic pathways, managing seed security pipelines, and establishing community-led grain protection banks.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description: "Mitigating baseline morbidity metrics through mobile diagnostic points, medical supply chain runs, and emergency medical transfers.",
  },
  {
    icon: Droplets,
    title: "WASH Systems",
    description: "Rehabilitating deep boreholes, enforcing localized safety parameters on communal wells, and deploying hygiene infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Services",
    description: "Tracking local vulnerability indicators, facilitating emergency response mapping, and building safe community coordination areas.",
  },
  {
    icon: Users,
    title: "Community Recovery",
    description: "Restoring communal trade networks through village-level savings systems, livestock health metrics, and foundational training assets.",
  },
  {
    icon: Globe2,
    title: "Resilience Building",
    description: "Embedding strategic crisis management mechanisms directly into local leadership structures to counter climate and economic volatility.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ProgramsPage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-zinc-800 pt-20 pb-24 lg:pt-48 lg:pb-32 text-white">
        {/* Fine Technical Grid Matrix */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="absolute inset-0">
          <Image
            src="/vacination.jpeg"
            alt="GIHAD medical team field deployment"
            fill
            priority
            className="object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-xs">
                Operational Framework
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] text-white"
            >
              Programs designed around local people, structural dignity &{" "}
              <span className="text-emerald-400">resilience.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
            >
              GIHAD manages integrated field operations focused on sustainable clinical outreach, food baseline security, rapid shock response, and community-driven socio-economic stabilization across South Sudan.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 shadow-sm"
              >
                Contact GIHAD
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STRATEGIC LOGISTICS OVERVIEW ================= */}
      <section className="relative z-20 -mt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/40">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                Humanitarian Mandate
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                Sustainable interventions rooted in field realities.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-xs leading-relaxed text-zinc-600 md:text-sm">
              <p>
                Our core implementation architecture targets areas severely destabilized by cyclic environmental floods, geopolitical disruptions, and basic systemic infrastructure gaps. We deploy multi-layered field responses that immediately address critical survival markers while locking in localized, autonomous management chains.
              </p>
              <p>
                By syncing physical asset distributions with structural agricultural training and technical clinical logistics, we bypass temporary relief dependency patterns in favor of verifiable community safety nets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PROGRAMS SECTION ================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {strategicPrograms.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="grid items-center gap-12 lg:grid-cols-12"
                >
                  {/* IMAGE - Alternate ordering via flex layout tokens */}
                  <div className={`w-full lg:col-span-5 ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative h-[380px] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={`w-full lg:col-span-7 space-y-6 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 rounded-md bg-zinc-100 border border-zinc-200 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-800">
                        <Icon className="h-3.5 w-3.5 text-emerald-700" />
                        <span>{program.label}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-600">
                      {program.description}
                    </p>

                    {/* METRICS / ACTIONS */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      {program.metrics.map((metric) => (
                        <div key={metric} className="flex items-start gap-2.5 text-xs text-zinc-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <Link 
                        href="/contact" 
                        className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        Institutional Liaison Data
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MULTI-SECTOR CORE INTERVENTIONS ================= */}
      <section className="border-t border-b border-zinc-200 bg-zinc-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Areas of Intervention
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Multi-sector humanitarian frameworks safeguarding field ecosystems.
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sectors.map((sector) => {
              const SectorIcon = sector.icon;

              return (
                <motion.div
                  key={sector.title}
                  variants={fadeInUp}
                  className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-8 shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-950 border border-zinc-800 text-white shadow-xs">
                      <SectorIcon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-zinc-900 tracking-tight">
                      {sector.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                      {sector.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ================= FINAL OPERATIONAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#051C12] py-24 lg:py-32 text-white">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
            Coordinated Action
          </span>
          
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            Supporting structural agency through sustainable response channels.
          </h2>
          
          <p className="mx-auto max-w-2xl text-xs md:text-sm leading-relaxed text-emerald-100/70">
            GIHAD scales its field footprint across South Sudan in alignment with UN cluster objectives, state ministries, and national humanitarian networks to optimize resource deployment integrity.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-emerald-700 shadow-sm"
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Support GIHAD Logistics
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}