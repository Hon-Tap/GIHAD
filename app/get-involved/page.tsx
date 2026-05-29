
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Globe2,
  ArrowRight,
} from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5]">

      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Get Involved
          </span>

          <h1 className="mt-6 text-5xl font-serif leading-tight text-white md:text-7xl">
            Be Part Of Sustainable Humanitarian Change.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Support vulnerable communities through volunteering,
            partnerships, advocacy, humanitarian collaboration,
            and long-term recovery initiatives.
          </p>

        </div>

      </section>

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-12">

          {[
            {
              icon: Users,
              title: "Volunteer",
              text: "Join community-centered initiatives and field support programs.",
            },
            {
              icon: HeartHandshake,
              title: "Partner",
              text: "Collaborate with GIHAD on humanitarian and development programs.",
            },
            {
              icon: Globe2,
              title: "Advocate",
              text: "Amplify awareness and strengthen humanitarian visibility.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-zinc-200 bg-white p-10 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">
                  <Icon className="h-7 w-7 text-emerald-700 transition group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-serif text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-600">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}

        </div>

      </section>

    </main>
  );
}
