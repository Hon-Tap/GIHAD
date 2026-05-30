"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  HeartPulse,
  ShieldCheck,
  Droplets,
  BookOpen,
  Users,
  Globe2,
  HeartHandshake,
  Shield,
  Activity,
} from "lucide-react";

const operationalCards = [
  {
    label: "AGRICULTURE",
    title: "Food Security & Farming",
    description:
      "Empowering local farmers through sustainable agriculture, seed distribution, and climate-smart farming systems.",
    image: "/seedlingtraining.jpeg",
  },
  {
    label: "HEALTH",
    title: "Healthcare Outreach",
    description:
      "Providing vaccination campaigns, emergency response systems, and life-saving healthcare support for communities.",
    image: "/vaccination.jpeg",
  },
  {
    label: "HUMANITARIAN",
    title: "Emergency Response",
    description:
      "Supporting vulnerable communities through preparedness workshops, protection systems, and humanitarian coordination.",
    image: "/workshop.jpeg",
  },
];

const competencies = [
  {
    icon: Sprout,
    title: "Food Security",
    description:
      "Agricultural production systems, food assistance, and sustainable farming resilience initiatives.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Community healthcare systems, vaccination outreach, and emergency medical interventions.",
  },
  {
    icon: Droplets,
    title: "WASH Programs",
    description:
      "Water access, sanitation rehabilitation, and hygiene promotion within vulnerable communities.",
  },
  {
    icon: BookOpen,
    title: "Capacity Building",
    description:
      "Training local communities through education, awareness campaigns, and resilience development programs.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Systems",
    description:
      "Protecting vulnerable populations through safeguarding and humanitarian inclusion systems.",
  },
  {
    icon: Users,
    title: "Community Recovery",
    description:
      "Restoring dignity and strengthening local resilience through integrated humanitarian support.",
  },
];

const stats = [
  {
    value: "6274",
    label: "RRC Certificate",
  },
  {
    value: "5+",
    label: "Operational Regions",
  },
  {
    value: "10K+",
    label: "People Reached",
  },
  {
    value: "24/7",
    label: "Field Response",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <main className="overflow-hidden bg-[#F7FBF8] text-zinc-900">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#0D3B2A] pt-36 lg:pt-40"
      >

        {/* BACKGROUND */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0"
        >

          <Image
            src="/workshop.jpeg"
            alt="GIHAD workshop"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B241B]/95 via-[#0B241B]/85 to-[#0B241B]/70" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.22),transparent_30%)]" />

        </motion.div>

        {/* FLOATING LIGHT */}
        <div className="absolute left-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-3xl" />

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-[100px] w-full fill-[#F7FBF8]"
          >
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L0,120Z"></path>
          </svg>
        </div>

        <div className="relative z-30 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 lg:grid-cols-12 lg:px-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Official National NGO • South Sudan
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl">
              Global Intervention
              <br />
              for Health &
              <span className="italic text-emerald-300">
                {" "}Agricultural
              </span>
              <br />
              Development
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-emerald-50/90 md:text-xl">
              “Nurturing Health & Agricultural Steps for life-saving and Zero Hunger.”
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              GIHAD addresses critical health, livelihood, and food system
              crises across South Sudan through healthcare outreach,
              agricultural resilience, emergency response, and community
              recovery systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold text-[#052A1A] transition-all duration-300 hover:bg-emerald-300"
              >
                Explore Programs

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Contact Juba Office
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >

                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-300">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:col-span-5"
          >

            <div className="grid grid-cols-2 gap-5">

              {/* LARGE */}
              <div className="col-span-2 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">

                <div className="relative h-[320px] overflow-hidden rounded-[2rem]">

                  <Image
                    src="/vaccination.jpeg"
                    alt="Vaccination outreach"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <div className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#062A1B]">
                      Healthcare Outreach
                    </div>

                  </div>

                </div>

              </div>

              {/* SMALL */}
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

                <div className="relative h-[190px] overflow-hidden rounded-[1.5rem]">

                  <Image
                    src="/seedlingtraining.jpeg"
                    alt="Seedling training"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

                <div className="relative h-[190px] overflow-hidden rounded-[1.5rem]">

                  <Image
                    src="/pharmacy and fs.jpeg"
                    alt="Pharmacy support"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CREDENTIAL BAR ================= */}
      <section className="relative z-30 -mt-14 px-6 lg:px-12">

        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)] md:grid-cols-4">

          {[
            {
              title: "RRC Registration",
              value: "Certificate No. 6274",
            },
            {
              title: "Headquarters",
              value: "Tongpiny, Juba",
            },
            {
              title: "Operational Reach",
              value: "Upper Nile & Beyond",
            },
            {
              title: "Organization Type",
              value: "National Humanitarian NGO",
            },
          ].map((item) => (
            <div key={item.title}>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                {item.title}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-zinc-900">
                {item.value}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Operational Programs
            </span>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight text-[#0D2B1D]">
              Humanitarian Systems Designed For Recovery & Resilience.
            </h2>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {operationalCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
              >

                <Link href="/programs">

                  <div className="group overflow-hidden rounded-[2.3rem] border border-emerald-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]">

                    {/* IMAGE */}
                    <div className="relative h-[320px] overflow-hidden">

                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute left-6 top-6 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#052A1A]">
                        {card.label}
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-8">

                      <h3 className="text-3xl font-semibold tracking-tight text-[#0D2B1D]">
                        {card.title}
                      </h3>

                      <p className="mt-5 leading-8 text-zinc-600">
                        {card.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700">

                        <span>Explore Program</span>

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

                      </div>

                    </div>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= MISSION ================= */}
      <section className="relative overflow-hidden bg-[#EAF8EF] py-32">

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:px-12">

          {/* LEFT */}
          <div className="lg:col-span-5">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Vision • Mission • Values
            </span>

            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#0D2B1D]">
              Human dignity remains the foundation of every intervention we design.
            </h2>

            <div className="mt-10 overflow-hidden rounded-[2rem]">

              <div className="relative h-[360px]">

                <Image
                  src="/workshop.jpeg"
                  alt="GIHAD workshop"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 lg:col-span-7">

            {[
              {
                icon: Globe2,
                title: "Vision",
                text: "A resilient South Sudan where vulnerable communities are empowered through sustainable healthcare, food security, and community recovery systems.",
              },
              {
                icon: HeartHandshake,
                title: "Mission",
                text: "To strengthen communities through integrated humanitarian interventions rooted in health, agriculture, emergency response, and resilience.",
              },
              {
                icon: Shield,
                title: "Core Values",
                text: "Compassion, accountability, inclusion, dignity, sustainability, and community-centered humanitarian leadership.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm"
                >

                  <div className="flex flex-col gap-6 md:flex-row md:items-start">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                      <Icon className="h-7 w-7 text-emerald-700" />
                    </div>

                    <div>

                      <h3 className="text-3xl font-semibold text-[#0D2B1D]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-zinc-600">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CORE COMPETENCIES ================= */}
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Core Competencies
            </span>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight text-[#0D2B1D]">
              Integrated Sectors Supporting Community Survival.
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {competencies.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-[2rem] border border-emerald-100 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-all duration-500 group-hover:bg-emerald-500">

                    <Icon className="h-6 w-6 text-emerald-700 transition-all duration-500 group-hover:text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#0D2B1D]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-600">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}
      <section className="relative overflow-hidden bg-[#0D3B2A] py-32 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-12">

            {/* LEFT */}
            <div className="lg:col-span-7">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Field Operations
              </span>

              <h2 className="mt-5 text-5xl font-semibold tracking-tight">
                Delivering humanitarian support directly within vulnerable communities.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                GIHAD continues to operate across Upper Nile, Jonglei,
                Central Equatoria, Bahr El Ghazal, Abyei, and Pibor
                Administrative Area — supporting communities affected by
                conflict, flooding, disease outbreaks, and food insecurity.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                {[
                  "Upper Nile Region",
                  "Jonglei State",
                  "Central Equatoria",
                  "Pibor Administrative Area",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
                  >

                    <div className="h-3 w-3 rounded-full bg-emerald-300" />

                    <span className="text-zinc-200">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid gap-6 lg:col-span-5">

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">

                <div className="relative h-[260px] overflow-hidden rounded-[1.6rem]">

                  <Image
                    src="/vaccination.jpeg"
                    alt="Vaccination outreach"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">

                <div className="relative h-[260px] overflow-hidden rounded-[1.6rem]">

                  <Image
                    src="/pharmacy and fs.jpeg"
                    alt="Healthcare outreach"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}