const skills = [
  {
    title: "Frontend",
    number: "01",
    description: "Building modern, responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },

  {
    title: "Backend",
    number: "02",
    description:
      "Developing scalable APIs and secure server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "Authorization",
      "Socket.IO",
    ],
  },

  {
    title: "Database",
    number: "03",
    description: "Working with relational and NoSQL database systems.",
    skills: ["MongoDB", "MySQL"],
  },

  {
    title: "Testing",
    number: "04",
    description: "Writing reliable tests to maintain application quality.",
    skills: ["Jest", "Supertest"],
  },

  {
    title: "Tools",
    number: "05",
    description: "Tools I use for development, collaboration and API testing.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
    relative
    overflow-hidden
    bg-[#0B0918]
    px-5
    py-24
    lg:px-8
    border-t
    border-violet-400/10
    border-b
    border-violet-400/10
  "
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* =========================
          Background Glow
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-violet-600/[0.07]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-cyan-500/[0.05]
          blur-3xl
        "
      />

      {/* =========================
          Background Grid
      ========================= */}

      <div
  className="
    pointer-events-none
    absolute
    inset-0
    opacity-[0.04]
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
  }}
/>
      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION TITLE ================= */}

        <SectionTitle
          number="03"
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* ================= SKILLS GRID ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {skills.map((category, index) => {
            const isLarge =
              category.title === "Frontend" || category.title === "Backend";

            return (
              <div
                key={category.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)] ${
                  isLarge ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full blur-[80px] transition-all duration-700 ${
                    index % 2 === 0
                      ? "bg-violet-600/10 group-hover:bg-violet-500/20"
                      : "bg-cyan-500/10 group-hover:bg-cyan-400/20"
                  }`}
                />

                {/* Top gradient line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Number + title */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-widest text-violet-400">
                        {category.number}
                      </span>

                      <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Decorative icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-violet-400 transition-all duration-500 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-cyan-300">
                      {category.title.charAt(0)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                          skillIndex % 2 === 0
                            ? "border-violet-400/20 bg-violet-500/5 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200"
                            : "border-cyan-400/20 bg-cyan-500/5 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
            </span>

            <p className="text-sm text-gray-400">
              Always learning. Always building.
            </p>
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Full Stack Developer
          </span>
        </div>
      </div>
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
    </section>
  );
};

/* ================= SECTION TITLE ================= */

const SectionTitle = ({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-14">
      {/* Number + line + label */}
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-sm font-bold text-violet-400">
          {number}
        </span>

        <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-600">
          Skills
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-xl text-gray-500">{subtitle}</p>

      
    </div>
  );
};

export default Skills;
