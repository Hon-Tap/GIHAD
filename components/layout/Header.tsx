"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Publications", href: "/publications" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ========================================================= */}
      {/* TOP CONTACT BAR */}
      {/* ========================================================= */}

      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-0 top-0 z-50 hidden border-b border-white/10 bg-[#03140D]/90 backdrop-blur-2xl lg:block"
          >
            <div className="mx-auto flex h-12 w-full max-w-[1600px] items-center justify-between px-8">
              
              {/* LEFT */}
              <div className="flex items-center gap-6 text-sm text-zinc-300">
                
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" />
                  <span>+211 920 000 000</span>
                </div>

                <div className="h-4 w-px bg-white/10" />

                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-emerald-400" />
                  <span>info@gihad.org</span>
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-8">
                <Link
                  href="/donate"
                  className="text-sm font-medium text-zinc-300 transition hover:text-white"
                >
                  Support Our Mission
                </Link>

                <Link
                  href="/volunteer"
                  className="text-sm font-medium text-zinc-300 transition hover:text-white"
                >
                  Become a Volunteer
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* MAIN NAVBAR */}
      {/* ========================================================= */}

      <motion.header
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0"
            : "top-12"
        }`}
      >
        <div className="w-full border-b border-white/10 bg-[#071A12]/85 backdrop-blur-2xl">
          
          <div className="mx-auto flex h-[92px] w-full max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-10">

            {/* ========================================================= */}
            {/* LOGO */}
            {/* ========================================================= */}

            <Link
              href="/"
              className="group flex shrink-0 items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white"
              >
                <Image
                  src="/gihad-logo.jpg"
                  alt="GIHAD"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              <div className="hidden sm:block">
                <h2 className="font-serif text-[30px] leading-none tracking-tight text-white">
                  GIHAD
                </h2>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400">
                  Health & Agriculture
                </p>
              </div>
            </Link>

            {/* ========================================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ========================================================= */}

            <nav className="hidden items-center xl:flex">
              <div className="flex items-center rounded-full border border-white/5 bg-white/[0.03] px-3 py-3">
                
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative rounded-full px-5 py-3 text-[15px] font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-950/30"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

              </div>
            </nav>

            {/* ========================================================= */}
            {/* RIGHT ACTIONS */}
            {/* ========================================================= */}

            <div className="hidden items-center gap-4 xl:flex">
              
              <Link
                href="/get-involved"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:bg-white/[0.03]"
              >
                Get Involved

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/donate"
                className="rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-400"
              >
                Donate Now
              </Link>

            </div>

            {/* ========================================================= */}
            {/* MOBILE BUTTON */}
            {/* ========================================================= */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[100] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition-all duration-300 xl:hidden"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="relative flex h-5 w-5 items-center justify-center"
              >
                <motion.span
                  variants={{
                    closed: {
                      rotate: 0,
                      y: -6,
                    },
                    open: {
                      rotate: 45,
                      y: 0,
                    },
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  variants={{
                    closed: {
                      opacity: 1,
                    },
                    open: {
                      opacity: 0,
                    },
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  variants={{
                    closed: {
                      rotate: 0,
                      y: 6,
                    },
                    open: {
                      rotate: -45,
                      y: 0,
                    },
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />
              </motion.div>
            </button>

          </div>
        </div>

        {/* ========================================================= */}
        {/* CONTACT ROW ON SCROLL */}
        {/* ========================================================= */}

        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="hidden overflow-hidden border-b border-white/10 bg-[#04120C]/95 lg:block"
            >
              <div className="mx-auto flex h-12 max-w-[1600px] items-center justify-between px-10">
                
                <div className="flex items-center gap-6 text-sm text-zinc-400">
                  
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-emerald-400" />
                    +211 920 000 000
                  </div>

                  <div className="h-4 w-px bg-white/10" />

                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-emerald-400" />
                    info@gihad.org
                  </div>

                </div>

                <div className="text-sm text-zinc-500">
                  Building resilient communities across South Sudan
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ========================================================= */}
      {/* MOBILE MENU */}
      {/* ========================================================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* PANEL */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 260,
              }}
              className="fixed right-0 top-0 z-[80] flex h-screen w-[80%] flex-col overflow-hidden border-l border-white/10 bg-[#04150E] shadow-2xl xl:hidden"
            >
              {/* TOP */}

              <div className="border-b border-white/10 px-6 pb-6 pt-8">
                
                <div className="flex items-center gap-4">
                  
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <Image
                      src="/gihad-logo.jpg"
                      alt="GIHAD"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl text-white">
                      GIHAD
                    </h2>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400">
                      Health & Agriculture
                    </p>
                  </div>

                </div>

              </div>

              {/* NAV */}

              <div className="flex-1 overflow-y-auto px-5 py-6">
                
                <div className="space-y-2">
                  
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: 30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                            isActive
                              ? "bg-emerald-500 text-white"
                              : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          <span className="text-[16px] font-medium">
                            {item.name}
                          </span>

                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    );
                  })}

                </div>

                {/* CTA */}

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 to-white/[0.03] p-6">
                  
                  <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Humanitarian Action
                  </div>

                  <h3 className="mt-5 font-serif text-3xl leading-tight text-white">
                    Together we can change lives
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    Support healthcare, agriculture, food systems,
                    resilience, and vulnerable communities across South Sudan.
                  </p>

                  <Link
                    href="/donate"
                    className="mt-8 flex items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-400"
                  >
                    Donate Now
                  </Link>

                </div>

              </div>

              {/* BOTTOM */}

              <div className="border-t border-white/10 p-5">
                
                <div className="space-y-3 text-sm text-zinc-400">
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-400" />
                    +211 920 000 000
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-400" />
                    info@gihad.org
                  </div>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}