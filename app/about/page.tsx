"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  HeartPulse,
  Droplets,
  Users,
  Globe2,
} from "lucide-react";

const sectors = [
  {
    icon: Sprout,
    title: "Agriculture & Food Security",
    description:
      "Supporting sustainable farming systems, agricultural resilience, seed distribution, and food security initiatives for vulnerable communities.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description:
      "Providing emergency healthcare support, vaccination outreach, disease prevention, and community health intervention systems.",
  },
  {
    icon: Droplets,
    title: "WASH & Sanitation",
    description:
      "Improving access to safe water, sanitation systems, hygiene awareness, and disease prevention within underserved communities.",
  },
  {
    icon: Users,
    title: "Community Recovery",
    description:
      "Strengthening resilience and restoring dignity through community-centered humanitarian recovery systems.",
  },
];

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F6F8F6] text-zinc-900">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative min-h-[100vh] overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0">

          <Image
            src="/workshop.jpeg"
            alt="GIHAD humanitarian workshop"
            fill
            priority
            className="object-cover object-center"
          />

          {/* SOFT OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#081C14]/82 via-[#0B241B]/58 to-[#0B241B]/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8F6] via-transparent to-transparent" />

        </div>

        {/* CONTENT */}

        <div className="relative z-20 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pb-32 pt-44 lg:px-12">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >

            <motion.div variants={fadeInUp}>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-xl">

                About GIHAD

              </span>

            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl xl:text-[92px]"
            >

              Humanitarian action
              <br />

              supporting communities
              <br />

              through health &
              <span className="text-emerald-200">
                {" "}resilience.
              </span>

            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-10 max-w-3xl text-lg leading-9 text-zinc-200 md:text-xl"
            >

              Global Intervention for Health & Agricultural Development (GIHAD)
              is a South Sudanese humanitarian organization committed to
              strengthening vulnerable communities through healthcare outreach,
              food security systems, emergency response, and sustainable recovery.

            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap gap-4"
            >

              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0B241B] transition-all duration-300 hover:bg-zinc-100"
              >

                Explore Programs

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-black/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Contact GIHAD
              </Link>

            </motion.div>

          </motion.div>

        </div>

        {/* CURVED BOTTOM */}

        <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden leading-none">

          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="relative block h-[140px] w-full"
          >

            <path
              fill="#F6F8F6"
              d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64L1440,181L1360,181C1280,181,1120,181,960,181C800,181,640,181,480,181C320,181,160,181,80,181L0,181Z"
            />

          </svg>

        </div>

      </section>

      {/* ================================================= */}
      {/* ABOUT BLOCK */}
      {/* ================================================= */}

      <section className="relative z-40 -mt-10 px-6 lg:px-12">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
          className="mx-auto grid max-w-6xl gap-12 rounded-[2.5rem] border border-white/40 bg-white/92 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl lg:grid-cols-2 lg:p-16"
        >

          {/* LEFT */}

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0B241B] md:text-5xl">

              Responding directly to humanitarian realities across South Sudan.

            </h2>

          </div>

          {/* RIGHT */}

          <div className="space-y-6 text-lg leading-8 text-zinc-600">

            <p>
              GIHAD works with vulnerable communities affected by conflict,
              disease outbreaks, displacement, food insecurity, and limited
              healthcare access through integrated humanitarian systems.
            </p>

            <p>
              Our interventions focus on healthcare outreach, agriculture,
              emergency response, resilience building, WASH systems, and
              sustainable recovery rooted in dignity and community ownership.
            </p>

          </div>

        </motion.div>

      </section>

      {/* ================================================= */}
      {/* STORY SECTION */}
      {/* ================================================= */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[2.5rem]">

              <div className="relative h-[620px]">

                <Image
                  src="/seedlingtraining.jpeg"
                  alt="GIHAD agricultural support"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
          >

            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700"
            >

              Our Commitment

            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#0B241B]"
            >

              Communities deserve systems that restore hope and resilience.

            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg leading-8 text-zinc-600"
            >

              At GIHAD, humanitarian response goes beyond emergency support.
              We believe sustainable recovery begins when communities are
              empowered with healthcare access, food systems, protection,
              and opportunities for long-term resilience.

            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-zinc-600"
            >

              Our interventions are designed to strengthen local capacity,
              support vulnerable families, and build systems capable of
              sustaining communities during and after crises.

            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 border-l-4 border-emerald-500 pl-6"
            >

              <p className="text-xl leading-9 text-[#0B241B]">

                “Nurturing Health & Agricultural Steps for
                Life-Saving and Zero Hunger.”

              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================================================= */}
      {/* MISSION */}
      {/* ================================================= */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >

            {/* MISSION */}

            <motion.div
              variants={fadeInUp}
              className="rounded-[2rem] bg-[#F7F8F7] p-10"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

                <HeartHandshake className="h-6 w-6 text-emerald-700" />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0B241B]">
                Mission
              </h3>

              <p className="mt-5 leading-8 text-zinc-600">

                To strengthen vulnerable communities through integrated
                humanitarian systems rooted in healthcare, agriculture,
                resilience, and sustainable recovery.

              </p>

            </motion.div>

            {/* VISION */}

            <motion.div
              variants={fadeInUp}
              className="rounded-[2rem] bg-[#0B241B] p-10 text-white shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15">

                <ShieldCheck className="h-6 w-6 text-emerald-300" />

              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Vision
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">

                A resilient South Sudan where communities have sustainable
                access to healthcare, food security, dignity, and
                humanitarian protection systems.

              </p>

            </motion.div>

            {/* APPROACH */}

            <motion.div
              variants={fadeInUp}
              className="rounded-[2rem] bg-[#F7F8F7] p-10"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

                <Globe2 className="h-6 w-6 text-emerald-700" />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0B241B]">
                Approach
              </h3>

              <p className="mt-5 leading-8 text-zinc-600">

                We work directly with communities, local leaders,
                and humanitarian partners to create long-term
                resilience and sustainable recovery systems.

              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================================================= */}
      {/* INTERVENTION AREAS */}
      {/* ================================================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Areas Of Intervention
            </span>

            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#0B241B]">

              Integrated humanitarian systems supporting vulnerable communities.

            </h2>

          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
            className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >

            {sectors.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group rounded-[2rem] border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 transition-all duration-300 group-hover:bg-emerald-100">

                    <Icon className="h-6 w-6 text-emerald-700" />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-[#0B241B]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-600">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#0B241B] py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

          {/* CONTENT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
          >

            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300"
            >

              Community Impact

            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-white"
            >

              Building sustainable recovery through local participation.

            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg leading-8 text-zinc-300"
            >

              GIHAD continues to work alongside vulnerable communities
              across South Sudan to improve resilience, healthcare access,
              agricultural productivity, and emergency preparedness systems.

            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-4"
            >

              <Link
                href="/get-involved"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0B241B] transition hover:bg-zinc-100"
              >
                Get Involved
              </Link>

              <Link
                href="/donate"
                className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Donate Now
              </Link>

            </motion.div>

          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[2.5rem] border border-white/10">

              <div className="relative h-[520px]">

                <Image
                  src="/pharmacy and fs.jpeg"
                  alt="GIHAD healthcare outreach"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}