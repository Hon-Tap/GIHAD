"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
} from "lucide-react";

const strategicPrograms = [
  {
    label: "AGRICULTURE",
    title: "Food Security & Agricultural Resilience",
    description:
      "Strengthening local farming systems through sustainable agriculture, seedling support, farmer empowerment, climate-smart cultivation, and food production initiatives.",
    image: "/seedlingtraining.jpeg",
    icon: Sprout,
    metrics: [
      "Climate-smart farming systems",
      "Farmer empowerment & training",
      "Sustainable food production",
    ],
  },
  {
    label: "HEALTHCARE",
    title: "Community Health & Emergency Outreach",
    description:
      "Delivering healthcare outreach, vaccination support, emergency medical response, and life-saving interventions for vulnerable populations.",
    image: "/vaccination.jpeg",
    icon: HeartPulse,
    metrics: [
      "Vaccination outreach programs",
      "Emergency medical support",
      "Community healthcare systems",
    ],
  },
  {
    label: "HUMANITARIAN",
    title: "Protection & Humanitarian Response",
    description:
      "Supporting communities affected by displacement, flooding, conflict, and disease outbreaks through coordinated humanitarian systems.",
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
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
  },
  {
    icon: Droplets,
    title: "WASH Systems",
  },
  {
    icon: ShieldCheck,
    title: "Protection Services",
  },
  {
    icon: Users,
    title: "Community Recovery",
  },
  {
    icon: Globe2,
    title: "Resilience Building",
  },
];

export default function ProgramsPage() {
  return (
    <main className="overflow-hidden bg-[#F6F8F6] text-zinc-900">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#0B241B]">

        {/* BACKGROUND */}

        <div className="absolute inset-0">

          <Image
            src="/vaccination.jpeg"
            alt="GIHAD healthcare outreach"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081C14]/90 via-[#0B241B]/72 to-[#0B241B]/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8F6] via-transparent to-transparent" />

        </div>

        {/* CONTENT */}

        <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-32 pt-44 lg:px-12">

          <div className="max-w-5xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-xl"
            >
              Strategic Programs
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl xl:text-[88px]"
            >

              Programs designed
              <br />

              around people,
              <br />

              dignity &
              <span className="text-emerald-200">
                {" "}resilience.
              </span>

            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-10 max-w-3xl text-lg leading-9 text-zinc-200 md:text-xl"
            >

              GIHAD delivers integrated humanitarian programs focused on
              healthcare outreach, food security, emergency preparedness,
              agricultural resilience, and sustainable community recovery
              across South Sudan.

            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-12 flex flex-wrap gap-4"
            >

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0B241B] transition-all duration-300 hover:bg-zinc-100"
              >

                Contact GIHAD

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/get-involved"
                className="rounded-full border border-white/10 bg-black/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Get Involved
              </Link>

            </motion.div>

          </div>

        </div>

        {/* IMPROVED CURVE */}

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
      {/* INTRO BLOCK */}
      {/* ================================================= */}

      <section className="relative -mt-10 z-40 px-6 lg:px-12">

        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-emerald-100 bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)] lg:p-16">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Humanitarian Programs
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0B241B] md:text-5xl">
                Sustainable interventions rooted in community realities.
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-600">

              <p>
                GIHAD implements integrated humanitarian programs designed
                to strengthen vulnerable communities facing food insecurity,
                displacement, disease outbreaks, flooding, and healthcare
                challenges across South Sudan.
              </p>

              <p>
                Our interventions prioritize long-term resilience,
                community participation, sustainable recovery,
                and human dignity through practical field-centered systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* PROGRAMS */}
      {/* ================================================= */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="space-y-32">

            {strategicPrograms.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className={`grid items-center gap-16 lg:grid-cols-2 ${
                    index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >

                  {/* IMAGE */}

                  <div
                    className={`${
                      index % 2 !== 0 ? "lg:col-start-2" : ""
                    }`}
                  >

                    <div className="overflow-hidden rounded-[2.8rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                      <div className="relative aspect-[4/3] overflow-hidden">

                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover transition duration-700 hover:scale-105"
                        />

                      </div>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div
                    className={`${
                      index % 2 !== 0 ? "lg:col-start-1" : ""
                    }`}
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

                      <Icon className="h-7 w-7 text-emerald-700" />

                    </div>

                    <div className="mt-8 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-700">

                      {program.label}

                    </div>

                    <h3 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#0B241B] md:text-5xl">
                      {program.title}
                    </h3>

                    <p className="mt-8 text-lg leading-8 text-zinc-600">
                      {program.description}
                    </p>

                    <div className="mt-10 space-y-5">

                      {program.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="flex items-center gap-4"
                        >

                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                          <span className="text-zinc-700">
                            {metric}
                          </span>

                        </div>
                      ))}

                    </div>

                    <button className="group mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700">

                      <span>Learn More</span>

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                    </button>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* SECTORS */}
      {/* ================================================= */}

      <section className="bg-white py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Areas Of Intervention
            </span>

            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#0B241B]">
              Multi-sector humanitarian systems supporting vulnerable communities.
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  key={sector.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="rounded-[2rem] border border-zinc-100 bg-[#F8FAF8] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                    <Icon className="h-6 w-6 text-emerald-700" />

                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-[#0B241B]">
                    {sector.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-600">
                    Community-centered intervention systems focused on
                    resilience, recovery, and long-term humanitarian support.
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#0B241B] py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl font-semibold leading-tight tracking-tight text-white"
          >

            Supporting communities through sustainable humanitarian action.

          </motion.h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">

            GIHAD continues to strengthen resilience across South Sudan
            through healthcare outreach, agriculture, emergency response,
            protection systems, and sustainable recovery frameworks.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

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
              Support GIHAD
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}