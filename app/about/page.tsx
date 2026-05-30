"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  HeartPulse,
  Droplets,
} from "lucide-react";

const sectors = [
  {
    icon: Sprout,
    title: "Agriculture & Food Security",
    description:
      "Supporting sustainable farming systems, seed distribution, and food resilience for vulnerable communities.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description:
      "Providing vaccination support, emergency healthcare systems, and community medical outreach programs.",
  },
  {
    icon: Droplets,
    title: "WASH & Sanitation",
    description:
      "Improving safe water access, sanitation systems, and hygiene awareness within underserved communities.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#F7FBF8] text-zinc-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}
      {/* Increased pt-40 to pt-48 to ensure it drops nicely below the header */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0B241B] pt-40 pb-24 md:pt-48">
        
        {/* BACKGROUND IMAGE & OVERLAYS */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workshop.jpeg"
            alt="GIHAD humanitarian workshop"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-overlay"
          />
          {/* Subtle gradient overlay to match the dark green brand identity */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B241B]/95 via-[#0B241B]/85 to-[#0B241B]/95" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
                About GIHAD
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-[80px]"
            >
              Humanitarian action supporting communities through health &{" "}
              <span className="text-emerald-400">resilience.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl"
            >
              Global Intervention for Health & Agricultural Development (GIHAD) is a
              South Sudanese humanitarian organization committed to strengthening
              vulnerable communities through healthcare outreach, food security
              systems, emergency response, and sustainable recovery.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0B241B] transition-all hover:bg-emerald-50"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                Contact GIHAD
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* WHO WE ARE */}
      {/* ================================================= */}
      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 pb-24 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-200/50 md:p-14 lg:p-16"
        >
          {/* Added items-start to prevent vertical stretching and eliminate empty space */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0B2E1F] md:text-4xl">
                Responding directly to humanitarian realities across South Sudan.
              </h2>
            </div>
            
            <div className="space-y-6 text-[17px] leading-relaxed text-zinc-600">
              <p>
                GIHAD was established to strengthen vulnerable communities
                affected by conflict, displacement, disease outbreaks, food
                insecurity, poverty, and limited healthcare access.
              </p>
              <p>
                Through integrated humanitarian systems, we support communities
                with sustainable interventions focused on healthcare outreach,
                agriculture, WASH services, emergency preparedness, and resilience
                development.
              </p>
              <p>
                Our approach is deeply community-centered — working directly with
                local populations, leaders, volunteers, and humanitarian partners
                to create long-term impact rooted in dignity and local ownership.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* IMAGE + STORY */}
      {/* ================================================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] w-full overflow-hidden rounded-[2rem] md:h-[600px]"
          >
            <Image
              src="/seedlingtraining.jpeg"
              alt="GIHAD agriculture support"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Our Commitment
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0B2E1F]">
              Communities deserve systems that restore hope and resilience.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-zinc-600">
              At GIHAD, humanitarian response goes beyond emergency support. We
              believe sustainable recovery begins when communities are empowered
              with healthcare access, food systems, protection, and opportunities
              for long-term resilience.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-zinc-600">
              Our interventions are designed to strengthen local capacity, support
              vulnerable families, and build systems capable of sustaining
              communities during and after crises.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 border-l-4 border-emerald-500 pl-6">
              <p className="text-xl font-medium italic leading-relaxed text-[#0B2E1F]">
                “Nurturing Health & Agricultural Steps for Life-Saving and Zero Hunger.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MISSION, VISION, APPROACH (Bento Grid) */}
      {/* ================================================= */}
      <section className="bg-white py-24 md:py-32 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Mission */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-[2rem] bg-zinc-50 p-10 transition-colors hover:bg-zinc-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-[#0B2E1F]">Mission</h3>
              <p className="mt-4 flex-1 leading-relaxed text-zinc-600">
                To strengthen vulnerable communities through integrated humanitarian
                systems rooted in healthcare, agriculture, resilience, and
                sustainable recovery.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-[2rem] bg-[#0B241B] p-10 text-white shadow-xl shadow-[#0B2E1F]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 backdrop-blur-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-bold">Vision</h3>
              <p className="mt-4 flex-1 leading-relaxed text-zinc-300">
                A resilient South Sudan where communities have sustainable access
                to healthcare, food security, dignity, and humanitarian protection
                systems.
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-[2rem] bg-zinc-50 p-10 transition-colors hover:bg-zinc-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-[#0B2E1F]">Approach</h3>
              <p className="mt-4 flex-1 leading-relaxed text-zinc-600">
                We work directly with communities, local leaders, and humanitarian
                partners to create long-term resilience and sustainable recovery
                systems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* INTERVENTION AREAS */}
      {/* ================================================= */}
      <section className="py-24 bg-zinc-50 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Areas Of Intervention
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0B2E1F]">
              Integrated humanitarian systems supporting vulnerable communities.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {sectors.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group rounded-[2rem] border border-zinc-200/60 bg-white p-8 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0B2E1F]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FINAL CTA SECTION */}
      {/* ================================================= */}
      <section className="relative overflow-hidden bg-[#0B241B] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Community Impact
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Building sustainable recovery through local participation.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-zinc-300">
              GIHAD continues to work alongside vulnerable communities across
              South Sudan to improve resilience, healthcare access, agricultural
              productivity, and emergency preparedness systems.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="rounded-full border border-zinc-500/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[2rem] md:h-[500px]"
          >
            <Image
              src="/pharmacy and fs.jpeg"
              alt="GIHAD healthcare support"
              fill
              className="object-cover"
            />
          </motion.div>
          
        </div>
      </section>
    </main>
  );
}