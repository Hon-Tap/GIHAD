
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  HeartHandshake,
  Users,
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    title: "Humanity",
    description:
      "Human suffering must be addressed wherever it exists. Protecting dignity, life, and hope remains our primary responsibility.",
  },
  {
    icon: ShieldCheck,
    title: "Neutrality",
    description:
      "We do not align with political, racial, or ideological divisions. Our work exists solely to protect vulnerable lives.",
  },
  {
    icon: Users,
    title: "Impartiality",
    description:
      "Assistance is delivered based entirely on urgency, vulnerability, and human need without discrimination.",
  },
  {
    icon: Globe2,
    title: "Independence",
    description:
      "Our humanitarian decisions remain autonomous and focused entirely on community wellbeing and protection.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5] text-zinc-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-36">

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:col-span-7"
          >
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
              The Story of GIHAD
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-serif leading-[1.05] tracking-tight text-white md:text-7xl">
              Born From Crisis. Built For Human Dignity.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              GIHAD emerged during one of South Sudan’s most difficult periods —
              when conflict, displacement, hunger, and collapsing systems left
              vulnerable communities without protection, healthcare, or sustainable livelihoods.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              What began as a response to urgent humanitarian suffering evolved
              into a long-term mission focused on resilience, recovery, food security,
              healthcare access, and restoring dignity to underserved communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Connect With GIHAD
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                  alt="Humanitarian field work"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
                <span className="block text-sm font-semibold text-white">
                  “Nurturing Health & Agricultural Steps for Life-Saving and Zero Hunger.”
                </span>
              </div>
            </div>
          </motion.div>

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

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Why We Exist
            </span>

            <h2 className="mt-4 text-5xl font-serif leading-tight tracking-tight text-zinc-900">
              Communities cannot heal where survival itself is uncertain.
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-600">
              Across regions affected by conflict, displacement, food insecurity,
              and collapsing infrastructure, millions continue to face daily
              humanitarian challenges.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              GIHAD was created to stand inside those realities — not from a
              distance, but directly within communities — helping families move
              beyond emergency dependence toward long-term resilience and dignity.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Our work is rooted in listening, local participation, sustainable
              systems, and restoring hope where systems have failed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-2xl shadow-zinc-900/5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
                  alt="Community resilience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= HUMAN APPROACH ================= */}
      <section className="border-y border-zinc-200 bg-white py-28">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Community Philosophy
          </span>

          <h2 className="mt-6 text-5xl font-serif leading-tight tracking-tight text-zinc-900">
            Humanitarian work begins by seeing people as partners — not statistics.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-zinc-600">
            Every intervention designed by GIHAD is rooted in community voices,
            cultural understanding, local participation, and long-term ownership.
            We believe resilience cannot be imported — it must be built together.
          </p>

        </div>
      </section>

      {/* ================= HUMANITARIAN PRINCIPLES ================= */}
      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Humanitarian Principles
            </span>

            <h2 className="mt-4 text-5xl font-serif tracking-tight text-zinc-900">
              The values guiding every humanitarian decision we make.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-[2rem] border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">
                    <Icon className="h-6 w-6 text-emerald-700 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif tracking-tight text-zinc-900">
                    {principle.title}
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-600">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= GEOGRAPHIC REACH ================= */}
      <section className="relative overflow-hidden bg-[#062F1D] py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Geographic Presence
            </span>

            <h2 className="mt-4 text-5xl font-serif leading-tight tracking-tight">
              Working Across Vulnerable Regions In South Sudan.
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-300">
              GIHAD currently operates across Upper Nile, Bahr El Ghazal,
              Central Equatoria, Jonglei, Abyei, and the Pibor Administrative Area.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Our teams work directly with local communities, displaced families,
              farmers, women-led groups, and vulnerable households to strengthen
              long-term resilience systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1400&auto=format&fit=crop"
                  alt="South Sudan field work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif leading-tight tracking-tight text-zinc-900"
          >
            Building sustainable futures through dignity, resilience, and human-centered action.
          </motion.h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            GIHAD continues to work alongside vulnerable communities to create
            pathways toward long-term recovery, self-reliance, and social stability.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500"
            >
              Partner With GIHAD
            </Link>

            <Link
              href="/donate"
              className="rounded-full border border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
            >
              Support Humanitarian Work
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

