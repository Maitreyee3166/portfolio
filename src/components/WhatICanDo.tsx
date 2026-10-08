
import {
  Monitor,
  Server,
  Database,
  Layers3,
  PlugZap,
} from "lucide-react";

const WhatICanDo = () => {
  const services = [
    {
      number: "01",
      icon: Monitor,
      title: "Frontend Development",
      description:
        "I can create responsive and interactive user interfaces using React, Next.js, JavaScript, TypeScript, Tailwind CSS, and Material UI.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
      ],
      color: "violet",
    },
    {
      number: "02",
      icon: Server,
      title: "Backend Development",
      description:
        "I can build REST APIs and backend applications using Node.js and Express.js.",
      technologies: ["Node.js", "Express.js", "REST API"],
      color: "cyan",
    },
    {
      number: "03",
      icon: Database,
      title: "Database Development",
      description:
        "I can work with databases such as MongoDB, MySQL, and PostgreSQL.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "fuchsia",
    },
    {
      number: "04",
      icon: Layers3,
      title: "Full-Stack Development",
      description:
        "I can build complete web applications by connecting frontend applications with backend APIs and databases.",
      technologies: ["Frontend", "Backend", "Database"],
      color: "violet",
    },
    {
      number: "05",
      icon: PlugZap,
      title: "API Integration",
      description:
        "I can integrate external APIs and display dynamic data in web applications.",
      technologies: ["REST API", "Axios", "Dynamic Data"],
      color: "cyan",
    },
  ];

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-[#070711] px-5 py-28 lg:px-8"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[130px]" />

      {/* ================= GRID ================= */}

      <div
  className="
    pointer-events-none
    absolute
    inset-0
    opacity-[0.03]
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
  }}
/>
      {/* Top divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-violet-400">
              07
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              What I Can Do
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            What I Can{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Do
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            I build modern, responsive, and functional web applications by
            combining frontend, backend, databases, and API integrations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            const colorClasses = {
              violet: {
                icon: "border-violet-400/20 bg-violet-500/10 text-violet-400",
                number: "text-violet-400",
                badge:
                  "border-violet-400/20 bg-violet-500/[0.07] text-violet-300",
                hover: "group-hover:border-violet-400/30",
              },
              cyan: {
                icon: "border-cyan-400/20 bg-cyan-500/10 text-cyan-400",
                number: "text-cyan-400",
                badge:
                  "border-cyan-400/20 bg-cyan-500/[0.07] text-cyan-300",
                hover: "group-hover:border-cyan-400/30",
              },
              fuchsia: {
                icon: "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-400",
                number: "text-fuchsia-400",
                badge:
                  "border-fuchsia-400/20 bg-fuchsia-500/[0.07] text-fuchsia-300",
                hover: "group-hover:border-fuchsia-400/30",
              },
            };

            const colors =
              colorClasses[service.color as keyof typeof colorClasses];

            return (
              <div
                key={service.number}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0912]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#0d0b16] ${colors.hover} ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/[0.05] blur-3xl transition duration-500 group-hover:bg-violet-500/[0.1]" />

                <div className="relative">
                  {/* Top row */}
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${colors.icon}`}
                    >
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <span
                      className={`font-mono text-sm font-bold ${colors.number}`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-full border px-3 py-1.5 text-xs ${colors.badge}`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-violet-500/30" />

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            Build • Integrate • Deliver
          </span>

          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/30" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
    <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
<div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
    </section>
  );
};

export default WhatICanDo;