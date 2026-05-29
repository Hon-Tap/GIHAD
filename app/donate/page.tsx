
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5]">

      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-36">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <Heart className="h-10 w-10 text-emerald-400" />
          </div>

          <h1 className="mt-8 text-5xl font-serif leading-tight text-white md:text-7xl">
            Support Humanitarian Recovery & Community Resilience.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Your contribution helps vulnerable communities access healthcare,
            food systems, clean water, protection services, and sustainable livelihoods.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-500">
              Donate Securely
            </button>

            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              Contact Donor Relations
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

