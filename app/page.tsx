"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  HeartPulse,
  ShieldCheck,
  Droplets,
  Globe2,
  BookOpen,
  Users,
  Tractor,
  Fish,
  SunMedium,
} from "lucide-react";

const operationalCards = [
  {
    label: "GROW",
    title: "Agriculture & Food Systems",
    description:
      "Scaling climate-smart cultivation systems, agricultural mechanization, food production, and sustainable farming resilience.",
    image:
      "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    label: "RESTORE",
    title: "Livelihood Recovery",
    description:
      "Strengthening economic recovery systems through VSLA initiatives, fishing kits, asset restoration, and community resilience.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
  },
  {
    label: "NOURISH",
    title: "Health & Protection",
    description:
      "Delivering integrated healthcare outreach, WASH systems, nutrition response, and humanitarian protection frameworks.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  },
];

const competencies = [
  {
    icon: Sprout,
    title: "Food Security",
    description:
      "Agricultural production systems, food assistance, and farming resilience programs.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description:
      "Community health systems, emergency response, and medical intervention support.",
  },
  {
    icon: Droplets,
    title: "WASH Systems",
    description:
      "Water access, sanitation rehabilitation, and hygiene infrastructure initiatives.",
  },
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "Community literacy systems, vocational support, and educational resilience programs.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Services",
    description:
      "Gender inclusion, vulnerable protection systems, and humanitarian safeguarding.",
  },
  {
    icon: Users,
    title: "Community Recovery",
    description:
      "Social resilience systems focused on rebuilding dignity and local independence.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="overflow-hidden bg-[#FAF9F5] text-zinc-900">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#062F1D] pt-40 lg:pt-44"
      >
        {/* BACKGROUND */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#062F1D]/40 via-[#062F1D]/75 to-[#062F1D]" />

          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
            alt="Humanitarian support"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-[90px] w-full fill-[#FAF9F5]"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Official National NGO • South Sudan
            </div>

            <h1 className="mt-8 text-5xl font-serif leading-[1.02] tracking-tight text-white md:text-7xl">
              Global Intervention for
              <br />
              Health &{" "}
              <span className="italic text-emerald-300">
                Agricultural
              </span>{" "}
              Development
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
              “Nurturing Health & Agricultural Steps for life-saving and Zero Hunger.”
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              GIHAD addresses critical health, livelihood, and food system crises
              across South Sudan — restoring dignity, strengthening resilience,
              and supporting sustainable community recovery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                <span>Explore Programs</span>

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Contact Juba Office
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">

              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />

              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white">
                <Image
                  src="/gihad-logo.jpg"
                  alt="GIHAD Logo"
                  fill
                  priority
                  className="object-contain p-10"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CREDENTIAL BAR ================= */}
      <section className="relative z-30 -mt-14 px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-900/5 md:grid-cols-4">

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
              title: "Operational Areas",
              value: "5+ Key Regions",
            },
            {
              title: "Institution Type",
              value: "National Humanitarian NGO",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {item.title}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-zinc-900">
                {item.value}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* ================= OPERATIONAL PARADIGM ================= */}
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Operational Paradigm
            </span>

            <h2 className="mt-4 text-5xl font-serif tracking-tight text-zinc-900">
              Humanitarian Systems Designed For Recovery & Resilience.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {operationalCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/programs">

                  <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl">

                    {/* IMAGE */}
                    <div className="relative h-[320px] overflow-hidden">

                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                        {card.label}
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-8">

                      <h3 className="text-3xl font-serif tracking-tight text-zinc-900 transition-colors group-hover:text-emerald-800">
                        {card.title}
                      </h3>

                      <p className="mt-5 leading-8 text-zinc-600">
                        {card.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-800">

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

      {/* ================= GUIDING INTENT ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:px-12">

          {/* LEFT */}
          <div className="lg:col-span-5">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Guiding Intent
            </span>

            <h2 className="mt-5 text-5xl font-serif leading-tight tracking-tight text-white">
              Human dignity is the foundation of every intervention we design.
            </h2>

          </div>

          {/* RIGHT */}
          <div className="space-y-12 lg:col-span-7">

            {[
              {
                title: "Vision",
                text: "A resilient South Sudan where vulnerable communities are empowered with sustainable systems for health, food security, and economic independence.",
              },
              {
                title: "Mission",
                text: "To strengthen communities through integrated humanitarian action rooted in healthcare, agriculture, resilience, and human-centered recovery.",
              },
              {
                title: "Values",
                text: "Compassion, accountability, inclusion, neutrality, sustainability, and long-term community ownership guide our institutional decisions.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-white/10 pb-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                  <h3 className="min-w-[180px] text-3xl font-serif text-emerald-300">
                    {item.title}
                  </h3>

                  <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                    {item.text}
                  </p>

                </div>
              </motion.div>
            ))}

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

            <h2 className="mt-4 text-5xl font-serif tracking-tight text-zinc-900">
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
                  className="group rounded-[2rem] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-all duration-500 group-hover:bg-emerald-600">
                    <Icon className="h-6 w-6 text-emerald-700 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif tracking-tight text-zinc-900">
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

      {/* ================= FIELD FOOTPRINT ================= */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Field Footprint
            </span>

            <h2 className="mt-4 text-5xl font-serif tracking-tight">
              Humanitarian Presence Across Areas Facing Crisis & Vulnerability.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-12">

            {/* LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="group relative overflow-hidden rounded-[2.5rem]">

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1931&auto=format&fit=crop"
                    alt="Field support"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
                    Field Logistics & Recovery
                  </div>

                </div>

              </div>
            </motion.div>

            {/* SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-5"
            >

              <div className="overflow-hidden rounded-[2rem]">

                <div className="relative aspect-[4/3]">

                  <Image
                    src="https://images.unsplash.com/photo-1541516160913-d454565554ef?q=80&w=2070&auto=format&fit=crop"
                    alt="Community water access"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

              <div>

                <p className="text-lg leading-8 text-zinc-300">
                  GIHAD continues to operate across Upper Nile, Jonglei,
                  Bahr El Ghazal, Central Equatoria, Abyei, and the Pibor
                  Administrative Area — delivering humanitarian support
                  directly within vulnerable communities.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Upper Nile Region",
                    "Jonglei State",
                    "Central Equatoria",
                    "Bahr El Ghazal",
                    "Pibor Administrative Area",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />

                      <span className="text-zinc-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

