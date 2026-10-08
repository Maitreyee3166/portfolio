const LearningJourney = () => {
  const learningAreas = [
    "Modern JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "REST API",
    "Database Management",
    "Authentication & Authorization",
    "Testing",
    "Git & GitHub",
    "Full-Stack Development",
  ];

  return (
    <section
  id="learning"
  className="
    relative
    overflow-hidden
    border-y
    border-violet-400/10
    bg-[#080812]
    px-5
    py-24
    lg:px-8
  "
>
      {/* =====================================
          Background
      ===================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Violet Glow */}

        <div
          className="
            absolute
            left-[15%]
            top-0
            h-80
            w-80
            rounded-full
            bg-violet-600/10
            blur-[130px]
          "
        />

        {/* Fuchsia Glow */}

        <div
          className="
            absolute
            bottom-0
            right-[15%]
            h-80
            w-80
            rounded-full
            bg-fuchsia-600/10
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(139,92,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.5)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ================= Section Heading ================= */}

        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-violet-400">
              08
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Learning
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Learning Journey
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            Continuously learning, building, and improving my development
            skills through practical experience.
          </p>
        </div>

        {/* ================= Cards ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= Left Card ================= */}

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0912]/70 p-8 backdrop-blur-xl lg:p-10">

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/[0.08] blur-3xl" />

            <div className="relative">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                <span className="text-2xl text-violet-400">
                  ✦
                </span>
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                My Learning Journey
              </p>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Learning by{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  building
                </span>
                .
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                As a fresher, I am continuously improving my development skills
                through structured learning and hands-on projects.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                I believe that building real-world projects is one of the best
                ways to understand programming, strengthen problem-solving
                skills, and grow as a developer.
              </p>

              <div className="mt-8 border-l border-violet-400/30 pl-5">
                <p className="text-sm italic leading-7 text-gray-500">
                  "Learn something new, build something real, and keep
                  improving."
                </p>
              </div>
            </div>
          </div>

          {/* ================= Right Card ================= */}

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0912]/70 p-8 backdrop-blur-xl lg:p-10">

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/[0.05] blur-3xl" />

            <div className="relative">

              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                  Areas of Learning
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Technologies & Skills
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
                  Technologies and concepts I am continuously learning and
                  applying through projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {learningAreas.map((skill, index) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 hover:-translate-y-0.5 ${
                      index % 2 === 0
                        ? "border-violet-400/20 bg-violet-500/[0.08] text-violet-300 hover:border-violet-400/40"
                        : "border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-300 hover:border-cyan-400/40"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                  <span className="text-sm text-gray-500">
                    Always learning. Always building.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom Space ================= */}

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-violet-500/30" />

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            Keep Learning
          </span>

          <div className="h-px w-20 bg-gradient-to-l from-transparent to-fuchsia-500/30" />
        </div>
      </div>

      {/* ================= Bottom Divider ================= */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
    </section>
  );
};

export default LearningJourney;