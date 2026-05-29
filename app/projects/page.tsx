
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Climate-Smart Agricultural Recovery",
    location: "Upper Nile",
    image:
      "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Community Healthcare Outreach",
    location: "Jonglei",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Clean Water Rehabilitation",
    location: "Central Equatoria",
    image:
      "https://images.unsplash.com/photo-1541516160913-d454565554ef?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5]">

      <section className="relative overflow-hidden bg-[#062F1D] pt-40 pb-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Impact Projects
          </span>

          <h1 className="mt-6 text-5xl font-serif leading-tight text-white md:text-7xl">
            Humanitarian Projects Creating Long-Term Community Impact.
          </h1>

        </div>

      </section>

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-12">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  {project.location}
                </p>

                <h3 className="mt-4 text-3xl font-serif text-zinc-900">
                  {project.title}
                </h3>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}

