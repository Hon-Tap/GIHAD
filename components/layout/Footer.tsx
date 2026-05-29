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
  ExternalLink 
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
    { name: "Partnerships", href: "/contact" }
  ],
  standards: [
    { name: "Humanitarian Code", href: "/about" },
    { name: "Climate Justice", href: "/programs" },
    { name: "Peacebuilding", href: "/programs" },
    { name: "Resource Blog", href: "https://globalinterventionforhealth&agricultural.blogspot.com/" }
  ]
};

const microSpring = { type: "spring", stiffness: 400, damping: 30 } as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-[#05070a] font-sans text-zinc-400 select-none">
      {/* Low-profile ambient glow to keep background rich without adding height */}
      <div className="absolute -bottom-20 left-1/2 h-[180px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-950/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 relative z-10">
        
        {/* MAIN COMPACT GRID */}
        <div className="grid grid-cols-1 gap-10 pb-10 border-b border-zinc-900/60 lg:grid-cols-12 lg:gap-6 items-start">
          
          {/* Column Group 1: Brand & Mini-Newsletter (4/12 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group focus:outline-none">
              <div className="h-5 w-1 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-y-120" />
              <span className="text-lg font-black tracking-tight text-white leading-none">GIHAD</span>
              <span className="text-[9px] font-medium text-emerald-500/80 tracking-wider uppercase bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.5 rounded">SS-NGO</span>
            </Link>
            <p className="text-xs leading-relaxed text-zinc-500 max-w-sm">
              Executing structured emergency response frameworks and deep socio-economic resilience platforms across South Sudan.
            </p>
            {/* Inline Low-Profile Newsletter */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center max-w-xs pt-1">
              <Mail className="absolute left-3.5 h-3.5 w-3.5 text-zinc-600" />
              <input
                type="email"
                placeholder="Institutional email"
                className="h-9 w-full rounded-lg bg-zinc-950 pl-9 pr-24 text-xs text-white placeholder-zinc-600 ring-1 ring-zinc-900 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/30 focus:bg-[#090d14]"
              />
              <motion.button 
                whileTap={{ scale: 0.97 }}
                transition={microSpring}
                className="absolute right-1 flex h-7 items-center gap-0.5 rounded-md bg-emerald-600/90 px-2.5 text-[11px] font-semibold text-white hover:bg-emerald-600 transition-colors"
              >
                <span>Join</span>
                <ArrowRight className="h-3 w-3" />
              </motion.button>
            </form>
          </div>

          {/* Column Group 2: Quick Links Subgrid (5/12 Columns) */}
          <div className="grid grid-cols-3 gap-4 lg:col-span-5 pt-1">
            <div className="space-y-2.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Sectors</h3>
              <ul className="space-y-1.5 text-xs">
                {footerLinks.sectors.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors block truncate">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Governance</h3>
              <ul className="space-y-1.5 text-xs">
                {footerLinks.governance.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors block truncate">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Compliance</h3>
              <ul className="space-y-1.5 text-xs">
                {footerLinks.standards.map((link) => {
                  const isExt = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <a href={link.href} target={isExt ? "_blank" : undefined} rel={isExt ? "noopener noreferrer" : undefined} className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1 truncate">
                        <span>{link.name}</span>
                        {isExt && <ExternalLink className="h-2.5 w-2.5 text-zinc-700 shrink-0" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column Group 3: Compact Office Block (3/12 Columns) */}
          <div className="lg:col-span-3 lg:border-l lg:border-zinc-900/60 lg:pl-6 space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              Secretariat
            </h3>
            <div className="text-xs text-zinc-500 space-y-2 leading-snug">
              <p className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-emerald-600/80 shrink-0 mt-0.5" />
                <span>Plot 111, Block 5, Tongpiny, Juba</span>
              </p>
              <div className="space-y-0.5 pt-1.5 border-t border-zinc-900/80 font-mono text-[11px]">
                <a href="mailto:gfad3019@gmail.com" className="flex items-center gap-1.5 text-zinc-500 hover:text-emerald-400 transition-colors">
                  <Mail className="h-3 w-3 text-emerald-600/80" />
                  <span>gfad3019@gmail.com</span>
                </a>
                <div className="flex items-start gap-1.5 text-zinc-600">
                  <Phone className="h-3 w-3 text-emerald-600/80 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>+211 922 522747</span>
                    <span>+211 910 229336</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS & REGISTRY ROW */}
        <div className="flex flex-col gap-4 pt-6 text-[10px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          {/* Flat Minimalist Badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-medium">
            <span className="flex items-center gap-1 text-zinc-500">
              <Shield className="h-3 w-3 text-emerald-600/50" /> RRC No. 6274
            </span>
            <span className="h-3 w-[1px] bg-zinc-900 hidden sm:inline" />
            <span className="flex items-center gap-1 text-zinc-500">
              <Globe className="h-3 w-3 text-emerald-600/50" /> UN-OCHA Aligned
            </span>
            <span className="h-3 w-[1px] bg-zinc-900 hidden sm:inline" />
            <span className="flex items-center gap-1 text-zinc-500">
              <HeartHandshake className="h-3 w-3 text-emerald-600/50" /> Zero Hunger Target
            </span>
          </div>

          {/* Legal / Meta */}
          <div className="text-left sm:text-right text-zinc-500">
            <p>© {currentYear} GIHAD South Sudan. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}