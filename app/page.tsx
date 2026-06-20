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
  BookOpen,
  Scale,
  Users,
  MapPin,
  TrendingUp,
  Activity,
  Award,
  CircleDot,
  Briefcase
} from "lucide-react";

const operationalSectors = [
  {
    label: "Food Security & Livelihoods",
    title: "General Food Assistance & Resilient Livelihoods",
    description:
      "Deploying immediate General Food Assistance (GFA) alongside sustainable systems like Farmer Field Schools (FFS), tractors, and Cash-for-Work (C4W) frameworks to eliminate institutional hunger.",
    image: "/seedlingtraining.jpeg",
    link: "/programs#fsl",
  },
  {
    label: "Health & Nutrition",
    title: "Clinical Outreach & Acute Malnutrition Management",
    description:
      "Operating mobile clinical units, implementing Expanded Programs for Immunization (EPI), and running targeted CMAM and stabilization centers for remote communities.",
    image: "/vacination.jpeg",
    link: "/programs#health",
  },
  {
    label: "WASH & Infrastructure",
    title: "Safe Drinking Water & Sanitation Facilities",
    description:
      "Rehabilitating critical clean water infrastructure, establishing localized sanitation networks, and running community-led hygiene campaigns to suppress waterborne disease profiles.",
    image: "/workshop.jpeg",
    link: "/programs#wash",
  },
];

const capabilities = [
  {
    icon: Sprout,
    title: "Community Agriculture",
    description: "Distributing modern agricultural assets including tractors, fishing kits, and crop harvesting machinery to build long-term food autonomy.",
  },
  {
    icon: Users,
    title: "Economic Recovery",
    description: "Fostering municipal market stability through structured Village Savings Loan Associations (VSLA) and entrepreneurship mentorship.",
  },
  {
    icon: HeartPulse,
    title: "Nutrition Interventions",
    description: "Managing Moderate Acute Malnutrition (MAM) alongside intensive Stabilization Centers for severely vulnerable demographics.",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Safeguarding",
    description: "Defending the fundamental rights of IDPs, refugees, returnees, and persons with disabilities (PWD) through localized monitoring.",
  },
  {
    icon: BookOpen,
    title: "Education & Literacy",
    description: "Empowering structural community recovery by improving institutional literacy and long-form vocational training tracks.",
  },
  {
    icon: Scale,
    title: "Climate Justice",
    description: "Advocating for legal environmental frameworks and mobilizing grassroots adaptation strategies against intense climatic shifts.",
  },
];

const activeStates = [
  { name: "Upper Nile State", hub: "Sector Operations Hub" },
  { name: "Jonglei State", hub: "Regional Field Office" },
  { name: "Pibor Administrative Area", hub: "Special Emphasis Zone" },
  { name: "Central Equatoria State", hub: "Juba HQ Coordination" },
  { name: "Bahr El Ghazal Region", hub: "Field Deployment Cluster" },
  { name: "Abyei Administrative Area", hub: "Northern Transition Zone" },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-zinc-50 border-b border-zinc-200/80 pt-32 pb-20 lg:pt-44 lg:pb-28">
        {/* Subtle Institutional Grid Patterns */}
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* HERO LEFT: TEXT & CALLS TO ACTION */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Official National NGO • South Sudan
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-6xl leading-[1.1]">
                  Global Intervention for Health & Agricultural Development
                </h1>
                
                <p className="text-lg font-medium text-emerald-800 bg-emerald-50/50 border-l-4 border-emerald-600 pl-4 py-1.5 max-w-2xl">
                  “Nurturing Health & Agricultural Steps for life-saving and Zero Hunger.”
                </p>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
                GIHAD is a legally recognized South Sudanese national non-profit organization responding to systemic health, food asset, and livelihood deficits caused by structural conflict and accelerating climate anomalies.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 shadow-sm"
                >
                  View Operational Sectors
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
                >
                  Contact Juba HQ
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </Link>
              </div>
            </div>

            {/* HERO RIGHT: UN-STYLE HERO IMAGE GRID */}
            <div className="hidden lg:grid lg:col-span-5 grid-cols-12 gap-3 relative">
              <div className="col-span-12 relative h-72 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
                <Image
                  src="/vacination.jpeg"
                  alt="Vaccination deployment"
                  fill
                  sizes="(max-w-lg) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-3 rounded bg-zinc-900/80 backdrop-blur-xs px-3 py-1 text-[11px] font-medium text-white tracking-wide">
                  Healthcare Outreach Field Unit
                </div>
              </div>
              
              <div className="col-span-6 relative h-40 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
                <Image
                  src="/seedlingtraining.jpeg"
                  alt="Agricultural tools training"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
              
              <div className="col-span-6 relative h-40 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
                <Image
                  src="/workshop.jpeg"
                  alt="Capacity development workshop"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REGISTRATION AUTHORIZATION BAR ================= */}
      {/* Reference UI Layout from image_2c72e2.png */}
      <section className="relative z-20 -mt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/40 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "RRC Authorization", value: "Certificate No. 6274", icon: Award },
            { title: "National Headquarters", value: "Tongpiny, Juba, South Sudan", icon: MapPin },
            { title: "Operational Footprint", value: "Upper Nile & Major Regions", icon: CircleDot },
            { title: "Institutional Status", value: "National Humanitarian NGO", icon: Briefcase },
          ].map((item, i) => {
            const BarIcon = item.icon;
            return (
              <div key={i} className="flex items-start gap-4 border-l border-zinc-200/80 pl-6 first:border-0 first:pl-0">
                <div className="mt-1 hidden sm:block">
                  <BarIcon className="h-5 w-5 text-zinc-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {item.title}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-900 tracking-tight">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= OPERATIONAL PROGRAMS SECTION ================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Core Intervention Frameworks
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Delivering cross-sector humanitarian aid and community-led resilience models.
            </h2>
          </div>

          {/* UN Institutional Style Program Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operationalSectors.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-md"
              >
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-w-md) 100vw, 400px"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-zinc-800 border border-zinc-200 shadow-xs">
                    {card.label}
                  </span>
                </div>
                
                <div className="flex flex-col flex-grow p-5 justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-600">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <Link 
                      href={card.link} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider"
                    >
                      Read Sector Strategy
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CORE PRINCIPLES & GUIDING VALUES ================= */}
      <section className="border-t border-b border-zinc-200 bg-zinc-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* STICKY LEFT COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Core Core Humanitarian Commitments
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Principled, transparent, and community-driven logistics.
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
              GIHAD adheres to the international standards of neutrality, humanity, and total operational accountability to support returnees, IDPs, and marginalized rural populations.
            </p>
          </div>

          {/* RIGHT COLUMN STACK */}
          <div className="lg:col-span-7 space-y-3">
            {[
              {
                title: "Humanity & Accountability",
                text: "Addressing human suffering at its root. Every program is rigorously mapped, executed, and audited to guarantee resource alignment and full gender-based inclusion frameworks.",
              },
              {
                title: "Neutrality & Impartiality",
                text: "Interventions are rendered exclusively based on objective vulnerability metrics. Assistance bypasses political, ideological, or ethnic distinctions to reach those in deepest distress.",
              },
              {
                title: "Durable Resilience & Sustainability",
                text: "Transitioning communities from aid-dependency into self-sufficiency by embedding technological agriculture practices, economic savings mechanics, and community capacity ownership.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-xs"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= EXTRA FUNCTIONAL FIELD CAPABILITIES GRID ================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
              Execution Capabilities
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Cross-Functional Capabilities
            </h2>
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Our organizational organogram and specialized field clusters ensure technical execution even in logistically constrained environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-zinc-200/80 p-5 bg-zinc-50/40 transition-colors hover:bg-white"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-zinc-900 text-white shadow-xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= GEOGRAPHIC IMPACT & FOOTPRINT SECTION ================= */}
      {/* Custom Designed with Dark Institutional Accent Palette from image_2c72c1.png */}
      <section className="relative overflow-hidden bg-[#051C12] py-24 lg:py-28 text-white border-t border-zinc-950">
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* LEFT: MAP HUB LABELS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                  Active Regional Footprint
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight">
                  Reaching isolated frontline geographic corridors across South Sudan.
                </h2>
              </div>
              
              <p className="max-w-xl text-xs leading-relaxed text-emerald-100/70">
                GIHAD orchestrates response assets inside states affected by intense climatic shifts, displacement, and structural food security shortfalls. Field logistics are deployed utilizing community networks across key administrative units.
              </p>

              {/* STATES CHIPS */}
              <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
                {activeStates.map((state, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-emerald-500/10 border border-emerald-500/20">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-100">{state.name}</span>
                      <span className="text-[10px] text-zinc-400">{state.hub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: DEPLOYMENT GRAPHICS */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative h-56 rounded-lg overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image
                  src="/vacination.jpeg"
                  alt="Immunization deployment overview"
                  fill
                  sizes="(max-w-md) 100vw, 450px"
                  className="object-cover brightness-95 filter"
                />
              </div>
              <div className="relative h-36 rounded-lg overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image
                  src="/seedlingtraining.jpeg"
                  alt="Logistics asset staging"
                  fill
                  sizes="(max-w-md) 100vw, 450px"
                  className="object-cover opacity-90"
                />
              </div>
            </div>

          </div>

          {/* STATS STRIP: Emulates exact design tokens discovered in image_2c72c1.png */}
          {/* <div className="mt-20 pt-10 border-t border-white/10 grid gap-6 grid-cols-2 lg:grid-cols-4">
            {[
              { value: "No. 6274", label: "OFFICIAL RRC REGISTRATION", icon: Award },
              { value: "5+ States", label: "ACTIVE FIELD OPERATIONS", icon: MapPin },
              { value: "10K+", label: "VULNERABLE LIVES IMPACTED", icon: TrendingUp },
              { value: "24/7", label: "RAPID CRISIS DEPLOYMENT", icon: Activity },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <StatIcon className="h-4 w-4 text-emerald-400" />
                    <span className="text-2xl font-black tracking-tight text-white lg:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div> */}

        </div>
      </section>

    </main>
  );
}