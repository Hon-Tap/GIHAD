"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  HeartPulse,
  Droplets,
  Users,
  Globe2,
  Award,
  MapPin,
  CircleDot,
  Briefcase
} from "lucide-react";

const sectors = [
  {
    icon: Sprout,
    title: "Agriculture & Food Security",
    description:
      "Deploying sustainable crop production systems, input distribution channels, and technical training to transition agrarian communities away from vulnerability towards long-term dietary autonomy.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description:
      "Delivering lifesaving mobile clinic outreach, expanded childhood immunization programs, and community health monitoring architectures to remote populations.",
  },
  {
    icon: Droplets,
    title: "WASH & Sanitation",
    description:
      "Rehabilitating vital rural clean water delivery assets, setting up structured sanitation points, and driving localized hygiene campaigns to suppress waterborne epidemics.",
  },
  {
    icon: Users,
    title: "Community Recovery",
    description:
      "Restoring socio-economic systems through village saving schemes, protection monitoring, and targeted capability development for returnees and IDPs.",
  },
];

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-zinc-950 pt-40 pb-24 lg:pt-48 lg:pb-32 text-white">
        {/* Soft Technical Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="absolute inset-0">
          <Image
            src="/workshop.jpeg"
            alt="GIHAD humanitarian workshop"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
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
                Institutional Profile
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] text-white"
            >
              Humanitarian action supporting communities through health &{" "}
              <span className="text-emerald-400">resilience.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
            >
              Global Intervention for Health & Agricultural Development (GIHAD) is a registered South Sudanese national non-governmental organization responding systematically to critical deficits across frontline administrative zones.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 shadow-sm"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact HQ Coordination
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= REGISTRATION AUTHORIZATION BAR ================= */}
      <section className="relative z-20 -mt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/40 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "RRC Authorization", value: "Certificate No. 6274", icon: Award },
            { title: "National Headquarters", value: "Tongpiny, Juba, South Sudan", icon: MapPin },
            { title: "Operational Footprint", value: "Upper Nile & Major Regions", icon: CircleDot },
            { title: "Institutional Status", value: "National Humanitarian NGO", icon: Briefcase },
          ].map((item, i) => {
            const BarIcon = item.icon;
            return (
              <div key={i} className="flex items-start gap-4 border-l border-zinc-200/80 pl-6 first:border-0 first:pl-0">
                <div className="mt-1 hidden sm:block">
                  <BarIcon className="h-5 w-5 text-zinc-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {item.title}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-900 tracking-tight">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WHO WE ARE BLOCK ================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid gap-12 lg:grid-cols-12 lg:items-start border-b border-zinc-200 pb-16"
          >
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Responding directly to humanitarian realities across South Sudan.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-zinc-600">
              <p>
                GIHAD works hands-on with vulnerable communities systematically disrupted by localized conflict, sudden disease outbreaks, severe environmental displacement, chronic food asset gaps, and total exclusion from basic clinical care systems.
              </p>
              <p>
                Our core implementation designs unify healthcare provision, modern agricultural inputs, rapid emergency distribution, human safety networks, WASH structures, and long-form socio-economic recovery frameworks built around localized stewardship.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY / COMMITMENT SECTION ================= */}
      <section className="pb-24 lg:pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative h-[480px] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm"
          >
            <Image
              src="/seedlingtraining.jpeg"
              alt="GIHAD agricultural support"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6"
          >
            <motion.span variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Our Commitment
            </motion.span>

            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Communities deserve structures that restore structural agency and dignity.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm leading-relaxed text-zinc-600">
              At GIHAD, direct field delivery goes well beyond the standard temporary distribution of handouts. True structural stabilization kicks in when field logistics empower affected families with permanent clinical setups, resilient food production systems, security guarantees, and dynamic channels for multi-year local capacity ownership.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-emerald-600 bg-emerald-50/50 pl-4 py-2.5">
              <p className="text-base font-semibold text-emerald-900 italic">
                “Nurturing Health & Agricultural Steps for life-saving and Zero Hunger.”
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= MISSION / VISION / APPROACH ================= */}
      <section className="border-t border-b border-zinc-200 bg-zinc-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* MISSION CARD */}
            <motion.div variants={fadeInUp} className="rounded-lg border border-zinc-200 bg-white p-8 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-900 text-white shadow-xs">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-zinc-900">Mission</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                To reinforce structurally fragile rural populations through integrated lifesaving pipelines rooted in premium healthcare distribution, adaptive farm metrics, protection frameworks, and resilient recovery actions.
              </p>
            </motion.div>

            {/* VISION CARD - INSTITUTIONAL HIGH CONTRAST */}
            <motion.div variants={fadeInUp} className="rounded-lg border border-zinc-950 bg-zinc-900 p-8 text-white shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-600 text-white shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">Vision</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                An fully adaptive South Sudan where communities maintain direct, uninterrupted autonomous access to quality medical services, regional food availability markets, personal safety, and dignified living standards.
              </p>
            </motion.div>

            {/* APPROACH CARD */}
            <motion.div variants={fadeInUp} className="rounded-lg border border-zinc-200 bg-white p-8 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-900 text-white shadow-xs">
                <Globe2 className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-zinc-900">Approach</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                We embed ourselves directly within target ecosystems, operating hand-in-hand with municipal leaders, cluster systems, and global partners to guarantee transparent logistics chains.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= AREAS OF INTERVENTION ================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Areas Of Intervention
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Integrated logistics pipelines reinforcing local survival metrics.
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sectors.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-50 border border-zinc-200 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-base font-bold text-zinc-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#051C12] py-24 lg:py-28 text-white border-t border-zinc-950">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
              Community Impact
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight">
              Building autonomous community recovery through transparent field execution.
            </h2>
            <p className="max-w-xl text-xs leading-relaxed text-emerald-100/70">
              GIHAD manages operational infrastructure alongside displaced citizens and institutional response groups to optimize regional safety, primary healthcare access, and self-sufficient farming modules.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-emerald-700"
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative h-[360px] w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
          >
            <Image
              src="/pharmacyfsl.jpeg"
              alt="GIHAD healthcare outreach deployment"
              fill
              className="object-cover brightness-95"
            />
          </motion.div>

        </div>
      </section>

    </main>
  );
}