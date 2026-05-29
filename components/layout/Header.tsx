"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      {/* ================= MAIN HEADER ================= */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* NAV CONTAINER */}
        <div
          className={`relative transition-all duration-700 ${
            isScrolled
              ? "px-4 pt-4 lg:px-8"
              : "px-0 pt-0"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-700 ${
              isScrolled
                ? "rounded-[1.75rem] border border-white/10 bg-[#FAF9F5]/80 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:px-8"
                : "border-b border-white/10 bg-black/10 px-6 py-6 backdrop-blur-xl lg:px-12"
            }`}
          >
            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="group relative flex items-center gap-4"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isScrolled
                    ? "h-12 w-12 shadow-lg"
                    : "h-14 w-14 shadow-2xl"
                }`}
              >
                <Image
                  src="/gihad-logo.jpg"
                  alt="GIHAD Logo"
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span
                  className={`font-serif text-2xl leading-none tracking-tight transition-colors duration-500 ${
                    isScrolled
                      ? "text-zinc-900"
                      : "text-white"
                  }`}
                >
                  GIHAD
                </span>

                <span
                  className={`mt-1 text-[10px] font-bold uppercase tracking-[0.28em] transition-colors duration-500 ${
                    isScrolled
                      ? "text-emerald-700"
                      : "text-emerald-300"
                  }`}
                >
                  Health & Agriculture
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative py-2"
                  >
                    <span
                      className={`relative z-10 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                        isScrolled
                          ? isActive
                            ? "text-zinc-950"
                            : "text-zinc-600 group-hover:text-zinc-950"
                          : isActive
                          ? "text-white"
                          : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Elegant Underline */}
                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      whileHover={{
                        width: "100%",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full ${
                        isScrolled
                          ? "bg-emerald-700"
                          : "bg-emerald-300"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ================= RIGHT ACTIONS ================= */}
            <div className="hidden items-center gap-5 lg:flex">

              {/* Get Involved */}
              <Link
                href="/get-involved"
                className={`group flex items-center gap-2 text-[13px] font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? "text-zinc-700 hover:text-zinc-950"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>Get Involved</span>

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {/* Donate CTA */}
              <motion.button
                whileHover={{
                  y: -1,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-emerald-500"
              >
                {/* top reflection */}
                <span className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />

                <span className="relative flex items-center gap-2">
                  <Heart className="h-4 w-4 fill-white/10" />
                  Donate Now
                </span>
              </motion.button>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 lg:hidden ${
                isScrolled
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-white/10 text-white backdrop-blur-xl"
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            className="fixed inset-0 z-40 bg-[#04150d]/80 backdrop-blur-2xl lg:hidden"
          >
            {/* PANEL */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 220,
              }}
              className="absolute inset-x-0 bottom-0 rounded-t-[2.5rem] border-t border-white/10 bg-[#062F1D] px-8 pb-10 pt-28"
            >
              {/* Top Label */}
              <div className="mb-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                  Navigation
                </span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all ${
                          isActive
                            ? "bg-emerald-500/10 text-white"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="text-xl font-serif tracking-tight">
                          {item.name}
                        </span>

                        <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-14 border-t border-white/10 pt-8">

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <h3 className="text-2xl font-serif tracking-tight text-white">
                    Support Humanitarian Action
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Help strengthen healthcare, food systems, agricultural resilience,
                    and vulnerable communities across South Sudan.
                  </p>

                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-500">
                    <Heart className="h-4 w-4 fill-white/10" />
                    Donate Now
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

