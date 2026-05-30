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
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
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
      {/* ================================================= */}
      {/* TOP BAR */}
      {/* ================================================= */}

      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: 0.45,
            }}
            className="fixed inset-x-0 top-0 z-50 hidden border-b border-emerald-200/10 bg-[#0B2E1F]/95 backdrop-blur-2xl lg:block"
          >

            <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 lg:px-10">

              {/* LEFT */}
              <div className="flex items-center gap-6 text-sm text-emerald-50/80">

                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-emerald-300" />
                  <span>+211 920 000 000</span>
                </div>

                <div className="h-4 w-px bg-white/10" />

                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-emerald-300" />
                  <span>info@gihad.org</span>
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-8">

                <Link
                  href="/get-involved"
                  className="text-sm font-medium text-emerald-50/80 transition hover:text-white"
                >
                  Get Involved
                </Link>

                <Link
                  href="/donate"
                  className="text-sm font-medium text-emerald-50/80 transition hover:text-white"
                >
                  Support Our Mission
                </Link>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MAIN NAVBAR */}
      {/* ================================================= */}

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
        }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          isScrolled ? "top-0" : "top-11"
        }`}
      >

        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "border-b border-emerald-100/10 bg-[#0B2E1F]/92 backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >

          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-5 lg:px-10">

            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3"
            >

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg"
              >

                <Image
                  src="/gihad-logo.jpg"
                  alt="GIHAD"
                  fill
                  priority
                  className="object-cover"
                />

              </motion.div>

              <div>

                <h2 className="text-[22px] font-semibold tracking-tight text-white lg:text-[24px]">
                  GIHAD
                </h2>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                  Health & Agriculture
                </p>

              </div>

            </Link>

            {/* ================================================= */}
            {/* DESKTOP NAV */}
            {/* ================================================= */}

            <nav className="hidden xl:flex">

              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl">

                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`rounded-full px-5 py-3 text-[15px] font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-emerald-400 text-[#052A1A] shadow-lg"
                          : "text-zinc-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

              </div>

            </nav>

            {/* ================================================= */}
            {/* ACTIONS */}
            {/* ================================================= */}

            <div className="hidden items-center gap-4 xl:flex">

              <Link
                href="/get-involved"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-300/30 hover:bg-white/[0.06]"
              >
                Get Involved

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/donate"
                className="rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#062A1B] transition-all duration-300 hover:bg-emerald-300"
              >
                Donate Now
              </Link>

            </div>

            {/* ================================================= */}
            {/* MOBILE BUTTON */}
            {/* ================================================= */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[100] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl xl:hidden"
            >

              <div className="relative flex h-5 w-5 items-center justify-center">

                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -6,
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 6,
                  }}
                  className="absolute h-[2px] w-5 rounded-full bg-white"
                />

              </div>

            </button>

          </div>

        </div>

      </motion.header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md xl:hidden"
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
                damping: 28,
                stiffness: 260,
              }}
              className="fixed right-0 top-0 z-[80] flex h-screen w-[82%] flex-col overflow-hidden border-l border-white/10 bg-[#071F15] shadow-2xl xl:hidden"
            >

              {/* TOP */}

              <div className="border-b border-white/10 px-6 pb-6 pt-8">

                <div className="flex items-center gap-4">

                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white">

                    <Image
                      src="/gihad-logo.jpg"
                      alt="GIHAD"
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-semibold text-white">
                      GIHAD
                    </h2>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                      Health & Agriculture
                    </p>

                  </div>

                </div>

              </div>

              {/* NAVIGATION */}

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
                              ? "bg-emerald-400 text-[#062A1B]"
                              : "text-zinc-200 hover:bg-white/[0.04] hover:text-white"
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

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-white/[0.03] p-6">

                  <div className="inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Humanitarian Action
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">
                    Together we can restore hope
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    Support healthcare outreach, food systems,
                    agricultural resilience, and vulnerable communities
                    across South Sudan.
                  </p>

                  <Link
                    href="/donate"
                    className="mt-8 flex items-center justify-center rounded-full bg-emerald-400 px-6 py-4 text-sm font-bold text-[#062A1B] transition hover:bg-emerald-300"
                  >
                    Donate Now
                  </Link>

                </div>

              </div>

              {/* FOOTER */}

              <div className="border-t border-white/10 p-5">

                <div className="space-y-3 text-sm text-zinc-400">

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    +211 920 000 000
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-300" />
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