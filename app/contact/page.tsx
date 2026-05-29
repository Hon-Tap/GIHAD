"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ArrowRight,
  Send,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#F6F3EE] text-zinc-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#081C15] pt-40 pb-44">

        {/* ATMOSPHERIC GRADIENTS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_35%)]" />

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

          <div className="grid items-center gap-20 lg:grid-cols-12">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >

              <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-xl">
                Humanitarian Coordination
              </div>

              <h1 className="mt-8 text-5xl font-serif leading-[1.02] tracking-tight text-white md:text-7xl">
                Let’s Create Meaningful Humanitarian Impact Together.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                Whether you are a donor, development agency,
                humanitarian partner, volunteer, or institutional collaborator,
                GIHAD welcomes strategic partnerships focused on resilience,
                recovery, and sustainable community transformation.
              </p>

              {/* CONTACT STRIP */}
              <div className="mt-14 space-y-5">

                {[
                  {
                    icon: Mail,
                    title: "Email Communication",
                    value: "gfad3019@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Direct Coordination",
                    value: "+211 922 522747",
                  },
                  {
                    icon: MapPin,
                    title: "Headquarters",
                    value: "Tongpiny, Juba • South Sudan",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                        <Icon className="h-6 w-6 text-emerald-300" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                          {item.title}
                        </p>

                        <p className="mt-2 text-base text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

              </div>

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative lg:col-span-6"
            >

              {/* OUTER GLOW */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-3xl" />

              {/* FORM CONTAINER */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111827]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:p-10">

                {/* TOP */}
                <div className="flex items-start justify-between gap-6">

                  <div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                      Collaboration Portal
                    </span>

                    <h2 className="mt-5 text-4xl font-serif leading-tight tracking-tight text-white">
                      Start A Conversation With Our Team.
                    </h2>

                  </div>

                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:flex">
                    <Send className="h-6 w-6 text-emerald-400" />
                  </div>

                </div>

                {/* FORM */}
                <form className="mt-12 space-y-7">

                  {/* ROW 1 */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your full name"
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Your email address"
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500 focus:bg-white/[0.05]"
                      />
                    </div>

                  </div>

                  {/* ROW 2 */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Organization
                      </label>

                      <input
                        type="text"
                        placeholder="Your organization or institution"
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="Partnership, support, or inquiry"
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500 focus:bg-white/[0.05]"
                      />
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Message
                    </label>

                    <textarea
                      rows={7}
                      placeholder="Tell us about your collaboration, initiative, partnership opportunity, or humanitarian inquiry..."
                      className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm leading-8 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500 focus:bg-white/[0.05]"
                    />
                  </div>

                  {/* BOTTOM */}
                  <div className="flex flex-col gap-5 pt-2 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-3 text-sm text-zinc-400">

                      <Clock3 className="h-4 w-4 text-emerald-400" />

                      <span>
                        Average response time: 24–48 hours
                      </span>

                    </div>

                    <motion.button
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-emerald-500"
                    >
                      <span>Send Message</span>

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>

                  </div>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= INSTITUTIONAL STRIP ================= */}
      <section className="relative -mt-20 pb-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

            <div className="grid lg:grid-cols-3">

              {[
                {
                  title: "Operational Presence",
                  text: "Active humanitarian operations across Upper Nile, Jonglei, Central Equatoria, Bahr El Ghazal, Abyei, and Pibor Administrative Area.",
                },
                {
                  title: "Institutional Collaboration",
                  text: "Supporting partnerships with NGOs, development agencies, humanitarian actors, local communities, and donor institutions.",
                },
                {
                  title: "Community-Centered Action",
                  text: "Focused on sustainable healthcare, food systems, WASH infrastructure, protection systems, and resilience recovery.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`p-10 lg:p-12 ${
                    index !== 2
                      ? "border-b border-zinc-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    {item.title}
                  </span>

                  <p className="mt-6 text-lg leading-8 text-zinc-600">
                    {item.text}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}