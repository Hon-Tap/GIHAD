"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowRight, 
  Globe, 
  Shield, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  ExternalLink,
  Lock,
  Compass
} from "lucide-react";

const footerLinks = {
  sectors: [
    { name: "Food Security (FSL)", href: "/programs" },
    { name: "Nutrition Systems", href: "/programs" },
    { name: "Healthcare Outreach", href: "/programs" },
    { name: "WASH Infrastructure", href: "/programs" }
  ],
  governance: [
    { name: "Transparency Log", href: "/about" },
    { name: "Annual Field Reports", href: "/about" },
    { name: "Operational Map", href: "/projects" },
    { name: "Partnerships Hub", href: "/contact" }
  ],
  standards: [
    { name: "Humanitarian Code", href: "/about" },
    { name: "Climate Adaptation", href: "/programs" },
    { name: "Peacebuilding Core", href: "/programs" },
    { name: "Resource Blog", href: "https://globalinterventionforhealth&agricultural.blogspot.com/" }
  ]
};

const microSpring = { type: "spring", stiffness: 400, damping: 30 } as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-[#020406] font-sans text-zinc-400 select-none antialiased">
      {/* Precision ambient positioning elements providing depth over dark background architectures */}
      <div className="absolute -top-40 right-1/4 h-[350px] w-[600px] rounded-full bg-emerald-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 h-[250px] w-[500px] rounded-full bg-zinc-900/10 blur-[100px] pointer-events-none" />

      {/* Top micro-accent perimeter line tracking status color indicators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-12 relative z-10">
        
        {/* PRIMARY EDITORIAL STRUCTURE GRID */}
        <div className="grid grid-cols-1 gap-12 pb-16 border-b border-zinc-900/60 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* COLUMN PANEL 01: BRAND IDENTITY & ACTION CAPTURE CONTAINER */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5 group focus:outline-none">
                <div className="relative h-4 w-1.5 rounded-xs bg-emerald-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    animate={{ y: ["100%", "0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-xl font-black tracking-tighter text-white leading-none">GIHAD</span>
                <span className="text-[9px] font-bold text-emerald-400 tracking-widest uppercase bg-emerald-950/60 border border-emerald-900/40 px-2 py-0.5 rounded-sm font-mono">
                  SS-NGO
                </span>
              </Link>
              
              <p className="text-xs leading-relaxed text-zinc-500 max-w-sm font-medium">
                Global Intervention for Health & Agricultural Development executes systemic emergency deployment pipelines and baseline agrarian recovery frameworks across South Sudan.
              </p>
            </div>

            {/* HIGH-PERFORMANCE INLINE SUBSCRIPTION PIPELINE */}
            <div className="space-y-2">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-600 font-mono">Institutional Tracker</span>
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center max-w-sm">
                <div className="absolute left-3.5 flex items-center pointer-events-none">
                  <Mail className="h-3.5 w-3.5 text-zinc-600 transition-colors group-focus-within:text-emerald-500" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter coordination email"
                  className="h-10 w-full rounded-md bg-zinc-950/80 pl-10 pr-24 text-xs text-white placeholder-zinc-700 ring-1 ring-zinc-900 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/30 focus:bg-[#06090e] font-medium"
                />
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  transition={microSpring}
                  className="absolute right-1 flex h-8 items-center gap-1 rounded bg-zinc-100 px-3 text-[11px] font-bold text-zinc-950 hover:bg-white transition-colors cursor-pointer"
                >
                  <span>Sync</span>
                  <ArrowRight className="h-3 w-3 text-zinc-950 stroke-[2.5]" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* COLUMN PANEL 02: SEGMENTED LINK DIRECTORIES SUBGRID */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-5 lg:pt-1">
            
            {/* SUB-SECTOR COLUMN A */}
            <div className="space-y-3.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono flex items-center gap-1.5">
                <Compass className="h-3 w-3 text-zinc-600 shrink-0" />
                Sectors
              </h3>
              <ul className="space-y-2 text-xs">
                {footerLinks.sectors.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-zinc-500 hover:text-zinc-200 transition-colors font-medium block truncate relative group py-0.5"
                    >
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUB-SECTOR COLUMN B */}
            <div className="space-y-3.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-zinc-600 shrink-0" />
                Governance
              </h3>
              <ul className="space-y-2 text-xs">
                {footerLinks.governance.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-zinc-500 hover:text-zinc-200 transition-colors font-medium block truncate relative group py-0.5"
                    >
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUB-SECTOR COLUMN C */}
            <div className="space-y-3.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-zinc-600 shrink-0" />
                Standards
              </h3>
              <ul className="space-y-2 text-xs">
                {footerLinks.standards.map((link) => {
                  const isExt = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        target={isExt ? "_blank" : undefined} 
                        rel={isExt ? "noopener noreferrer" : undefined} 
                        className="text-zinc-500 hover:text-zinc-200 transition-colors font-medium flex items-center gap-1 relative group py-0.5"
                      >
                        <span className="truncate relative z-10">{link.name}</span>
                        {isExt && <ExternalLink className="h-2.5 w-2.5 text-zinc-700 shrink-0 transition-colors group-hover:text-emerald-500" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* COLUMN PANEL 03: SECRETARIAT HUB INFORMATION MATRICES */}
          <div className="lg:col-span-3 lg:border-l lg:border-zinc-900/60 lg:pl-8 space-y-4">
            <div className="space-y-1">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 font-mono flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                HQ Secretariat
              </h3>
              <p className="text-[11px] text-zinc-600 font-mono tracking-tight uppercase">Juba Operations Center</p>
            </div>
            
            <div className="text-xs text-zinc-500 space-y-3.5 leading-relaxed font-medium">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span>Plot 111, Block 5, Tongpiny, Juba, South Sudan <span className="text-[10px] text-zinc-700 block font-mono mt-0.5">(Near Turkish Embassy)</span></span>
              </p>
              
              <div className="space-y-1.5 pt-3.5 border-t border-zinc-900/80 font-mono text-[11px]">
                <a href="mailto:gfad3019@gmail.com" className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group">
                  <Mail className="h-3.5 w-3.5 text-zinc-700 group-hover:text-emerald-600 transition-colors shrink-0" />
                  <span>gfad3019@gmail.com</span>
                </a>
                <div className="flex items-start gap-2 text-zinc-600">
                  <Phone className="h-3.5 w-3.5 text-zinc-700 shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-zinc-500 font-semibold transition-colors hover:text-white">+211 (0) 922 522747</span>
                    <span className="text-zinc-500 font-semibold transition-colors hover:text-white">+211 (0) 910 229336</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COMPLIANCE META BAR AND BLOCKCHAIN REGISTRY FOOTNOTE */}
        <div className="flex flex-col gap-6 pt-8 text-[10px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Institutional Accountability Grid Badges */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono uppercase tracking-wider text-zinc-500">
            <span className="flex items-center gap-1.5 border border-zinc-900 bg-zinc-950/40 px-2 py-0.5 rounded-xs text-zinc-400">
              <Shield className="h-3 w-3 text-emerald-500/60" /> RRC CERTIFICATE NO. 6274
            </span>
            <span className="flex items-center gap-1.5 border border-zinc-900 bg-zinc-950/40 px-2 py-0.5 rounded-xs text-zinc-400">
              <Globe className="h-3 w-3 text-emerald-500/60" /> UN-OCHA ALIGNED PIPELINES
            </span>
            <span className="flex items-center gap-1.5 border border-zinc-900 bg-zinc-950/40 px-2 py-0.5 rounded-xs text-zinc-400">
              <HeartHandshake className="h-3 w-3 text-emerald-500/60" /> ZERO HUNGER MANDATE
            </span>
          </div>

          {/* Legal / Copyright Alignment */}
          <div className="text-left sm:text-right font-medium text-zinc-600 tracking-tight">
            <p>© {currentYear} GIHAD South Sudan. All operations certified. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}