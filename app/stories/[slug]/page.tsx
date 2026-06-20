"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, User, MapPin, ArrowLeft, Share2, ShieldCheck, Clock } from "lucide-react";
// Clean, precise named import with corrected relative path location
import { fieldStories } from "../page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SingleStoryPage({ params }: PageProps) {
  // Safe unwrapping of dynamic routing params matching current Next.js paradigms
  const unwrappedParams = use(params);
  
  // Safe item lookup directly matching the unwrapped dynamic slug parameter
  const story = fieldStories.find((s) => s.slug === unwrappedParams.slug);

  if (!story) {
    notFound();
  }

  // Framer Motion viewport scroll linking for the precision top progress line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100 pb-24">
      
      {/* Unique Razor-Sharp Global Scroll Progress Tracking Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* ================= POST ARTICLE HEADER ================= */}
      <header className="relative bg-zinc-950 pt-40 pb-16 text-white border-b border-zinc-800">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          
          <Link 
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Dispatches
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400">
                {story.label}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 border-l border-zinc-800 pl-3">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                <span>{story.location}, South Sudan</span>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-white max-w-3xl">
              {story.title}
            </h1>

            {/* Reporting Meta Matrix */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs text-zinc-400 border-t border-zinc-900">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <User className="h-3 w-3 text-zinc-400" />
                </div>
                <span className="font-medium text-zinc-300">{story.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                <span>Published {story.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-zinc-500" />
                <span>4 min read documentation</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ================= PRIMARY EDITORIAL GRID ARCHITECTURE ================= */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-12 grid gap-12 lg:grid-cols-12 items-start">
        
        {/* LEFT COLUMN: PRIMARY BODY TEXT */}
        <article className="lg:col-span-8 space-y-8">
          
          {/* Main Content Photographic Feature Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-xs">
            <Image
              src={story.image}
              alt="GIHAD logistics field operational capture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Editorial Content Layout */}
          <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6 text-sm leading-relaxed md:text-base">
            <p className="font-medium text-zinc-950 text-base md:text-lg leading-relaxed">
              Executive Field Summary: As part of GIHAD&apos;s systematic 2026 response mapping across fragile regional sectors, field teams have localized infrastructure assets directly tailored to counter persistent structural baseline shocks.
            </p>
            
            <p>
              By aligning local labor with standardized input pipelines, the ongoing field execution establishes immediate safeguards. Rather than relying on standard external reliance channels, target demographics participate in hands-on distribution protocols, infrastructure setup validation, and continuous technical maintenance workshops.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 tracking-tight pt-4">Operational Diagnostics & Infrastructure Stability</h3>
            
            <p>
              Field evaluations confirm that localized, structural interventions increase baseline resilience vectors against volatile environmental fluctuations by over 40%. Our field reporting highlights how critical input transparency metrics prevent resource dilution across remote logistical lines.
            </p>

            <blockquote>
              “True developmental sustainability is achieved when tracking metrics transfer asset management completely into the hands of community administrative entities.”
            </blockquote>

            <p>
              Moving forward into the next quarterly operational cycle, GIHAD remains committed to expanding this framework to neighboring coordination points in full alignment with UN cluster goals and national registry objectives.
            </p>
          </div>

        </article>

        {/* RIGHT COLUMN: INSTITUTIONAL METADATA BANNER & UTILITIES */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          
          {/* Share Block Widget */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-xs space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Dispatch Utilities
            </h4>
            <button 
              onClick={handleShare}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors text-xs font-semibold px-4 py-2.5 text-zinc-800"
            >
              <Share2 className="h-3.5 w-3.5" />
              {copied ? "Link Copied to Clipboard" : "Copy Shared Document Link"}
            </button>
          </div>

          {/* Validation & Accountability Standard Callout */}
          <div className="rounded-lg border border-zinc-950 bg-zinc-900 p-6 text-white shadow-xs space-y-4">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-emerald-600">
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-tight text-white">
                RRC Standard Compliance
              </h4>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                This diagnostic output is compiled by field staff in direct accordance with verified national humanitarian tracking standards.
              </p>
            </div>
            <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
              ID: GIHAD-FLD-2026
            </div>
          </div>

        </aside>

      </section>

    </main>
  );
}