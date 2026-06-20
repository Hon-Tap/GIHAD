"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ChevronRight, Phone, Mail, ArrowUpRight, Heart } from "lucide-react";

// Pruned layout directory to remove clutter and drop redundant projects route
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================================================= */}
      {/* TOP STRIP: Clean, Accessible Utility Bar          */}
      {/* ================================================= */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-[60] hidden border-b border-zinc-200/60 bg-[#FAF9F5] lg:block"
          >
            <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 lg:px-8">
              <div className="flex items-center gap-6 text-xs font-medium text-zinc-600">
                <a href="tel:+211920000000" className="flex items-center gap-2 transition hover:text-emerald-700">
                  <Phone className="h-3.5 w-3.5 text-emerald-700" />
                  <span>+211 920 000 000</span>
                </a>
                <a href="mailto:info@gihad.org" className="flex items-center gap-2 transition hover:text-emerald-700">
                  <Mail className="h-3.5 w-3.5 text-emerald-700" />
                  <span>info@gihad.org</span>
                </a>
              </div>

              <div className="flex items-center text-xs font-semibold text-zinc-600">
                <span className="inline-flex items-center gap-1.5 font-medium text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Official National NGO • South Sudan
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MAIN NAVIGATION BAR: Premium Light Canvas         */}
      {/* ================================================= */}
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 border-b border-zinc-200 bg-white/95 shadow-md backdrop-blur-md py-1"
            : "top-0 lg:top-11 bg-white border-b border-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* Identity Brand Group - Preserved Exactly from image_bd2e92.png */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group focus:outline-none">
              <Image
                src="/gihad-logo.png"
                alt="GIHAD Logo"
                width={52}
                height={52}
                priority
                className="h-13 w-13 object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tight text-zinc-900 leading-none">
                  GIHAD
                </h1>
                <p className="mt-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-emerald-700 leading-none">
                  Health & Agriculture Dev.
                </p>
              </div>
            </Link>

            {/* Structured Navigation Links */}
            <nav className="hidden xl:flex items-center">
              <div className="flex items-center gap-8">
                {navigation.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative py-2 text-sm font-bold transition-colors duration-200 ${
                        active ? "text-emerald-700" : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <motion.span
                          layoutId="active-line"
                          className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-emerald-700"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Consolidated Single Premium CTA Matrix */}
            <div className="hidden items-center gap-4 shrink-0 xl:flex">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#062F1D] px-5 text-xs font-bold text-white hover:bg-emerald-900 transition-all shadow-sm group hover:scale-[1.01]"
              >
                <Heart className="h-3.5 w-3.5 fill-emerald-400 stroke-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Support Our Mission</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400/80" />
              </Link>
            </div>

            {/* Premium Mobile Menu Toggle Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Panel"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-800 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors focus:outline-none xl:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* MOBILE DRAWER: UNICEF Style High-Contrast Layout  */}
      {/* ================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[70] bg-zinc-900/30 backdrop-blur-md xl:hidden"
            />

            {/* Content Drawer Canvas */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 36 }}
              className="fixed right-0 bottom-0 top-0 z-[80] flex h-full w-full max-w-sm flex-col border-l border-zinc-200 bg-white"
            >
              {/* Drawer Top Header Identity Group */}
              <div className="border-b border-zinc-100 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/gihad-logo.png"
                      alt="GIHAD Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-black text-zinc-900 leading-none">GIHAD</h3>
                      <p className="mt-1.5 text-[8px] font-extrabold uppercase tracking-[0.15em] text-emerald-700 leading-none">
                        Health & Agriculture
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-900 focus:outline-none"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Navigation Items (Clean List Architecture) */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all ${
                          active
                            ? "bg-emerald-50 text-emerald-800"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className={`h-4 w-4 ${active ? "text-emerald-700" : "text-zinc-400"}`} />
                      </Link>
                    );
                  })}
                </nav>

                {/* Info Card Block */}
                <div className="mt-8 rounded-2xl border border-zinc-200 bg-[#FAF9F5] p-5 text-zinc-900">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Humanitarian Action
                  </span>
                  <h3 className="mt-3 text-xs font-semibold text-zinc-600 leading-relaxed">
                    Nurturing strategic health and agricultural workflows for immediate life-saving and resilience deployment across local communities.
                  </h3>
                </div>
              </div>

              {/* Drawer Bottom Contacts & Main CTA */}
              <div className="border-t border-zinc-100 bg-zinc-50/80 px-6 py-6 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#062F1D] px-4 text-xs font-bold text-white hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  <Heart className="h-3.5 w-3.5 fill-emerald-400 stroke-emerald-400" />
                  <span>Support Our Mission</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-auto text-emerald-400/80" />
                </Link>

                <div className="space-y-2.5 text-xs font-semibold text-zinc-500 font-mono pt-2">
                  <a href="tel:+211920000000" className="flex items-center gap-3 hover:text-emerald-700">
                    <Phone className="h-4 w-4 text-emerald-700" />
                    <span>+211 920 000 000</span>
                  </a>
                  <a href="mailto:info@gihad.org" className="flex items-center gap-3 hover:text-emerald-700">
                    <Mail className="h-4 w-4 text-emerald-700" />
                    <span>info@gihad.org</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}