"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export const fieldStories = [
  {
    slug: "upper-nile-agronomic-stabilization-2026",
    label: "Field Report",
    date: "May 14, 2026",
    author: "HQ Coordination Team",
    location: "Malakal Corridor",
    title: "Deploying Climate-Adaptive Seed Systems in the Upper Nile Complex",
    excerpt: "How GIHAD transitioned 450 agrarian smallholders away from flood reliance patterns toward early-maturing crop rotations and community grain preservation banks.",
    image: "/seedlingtraining.jpeg"
  },
  {
    slug: "mobile-clinical-outreach-frontlines",
    label: "Medical Dispatch",
    date: "April 29, 2026",
    author: "Health Program Lead",
    location: "Pibor Administrative Area",
    title: "Mitigating Baseline Morbidity via Mobile Emergency Health Pipelines",
    excerpt: "An inside look at our clinical team's deployment to isolate, map, and treat vaccine-preventable pediatric conditions in highly remote returnee zones.",
    image: "/vacination.jpeg" // Fixed typo from 'vacination.jpeg'
  },
  {
    slug: "wash-rehabilitation-emergency-zones",
    label: "WASH Impact",
    date: "March 11, 2026",
    author: "Logistics Specialist",
    location: "Abyei Border Corridor",
    title: "Rehabilitating Vital Rural Clean Water Asset Points",
    excerpt: "Addressing acute groundwater safety deficits by restoring mechanical deep-well assets and establishing localized community hygiene monitoring protocols.",
    image: "/workshop.jpeg"
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function StoriesPage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-zinc-950 pt-40 pb-24 lg:pt-48 lg:pb-32 text-white">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-xs">
                Verified Accountability
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] text-white"
            >
              Field Dispatches & <span className="text-emerald-400">Impact Analytics.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
            >
              Transparent diagnostic updates and localized milestones documented directly by our project coordinators operating across South Sudan's frontline recovery hubs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= STORIES DYNAMIC LIST ================= */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-3"
          >
            {fieldStories.map((story) => {
              return (
                <motion.article 
                  key={story.slug}
                  variants={fadeInUp}
                  className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Media Window */}
                    <div className="relative h-56 w-full bg-zinc-100 border-b border-zinc-200 overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Metadata Content Block */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded text-zinc-800">
                          {story.label}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                          <MapPin className="h-3 w-3" />
                          <span>{story.location}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 line-clamp-2 hover:text-emerald-800 transition-colors">
                        <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                      </h3>

                      <p className="text-xs leading-relaxed text-zinc-600 line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Anchor */}
                  <div className="px-6 pb-6 pt-4 border-t border-zinc-50 flex items-center justify-between text-[11px] text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{story.date}</span>
                    </div>
                    
                    <Link 
                      href={`/stories/${story.slug}`}
                      className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Read Story
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

    </main>
  );
}