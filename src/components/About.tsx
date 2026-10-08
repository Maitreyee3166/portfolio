const About = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#080812] px-5 py-28 lg:px-8"
>
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <SectionTitle
          number="02"
          title="About Me"
          subtitle="Turning ideas into meaningful digital experiences."
        />

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.5fr]">
          {/* ================= LEFT CARD ================= */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]">
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/20 blur-[80px] transition-all duration-700 group-hover:bg-violet-500/30" />

            <div className="relative">
            

              {/* Name */}
              <div className="mt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                  Hello, I'm
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                  Maitreyee
                  <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    Samanta
                  </span>
                </h3>
              </div>

              {/* Role */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-400" />

                <span className="text-sm font-medium text-gray-400">
                  Full Stack Developer
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-gray-400">
                I love building clean, responsive and meaningful digital
                experiences while continuously learning and exploring new
                technologies.
              </p>

              {/* Availability */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-sm text-gray-300">
                    Open to opportunities
                  </span>
                </div>

                <span className="text-xs text-emerald-400">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/70 p-8 backdrop-blur-xl lg:p-10">
            {/* Top gradient line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-violet-400/10" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-cyan-400/10" />

            <div className="relative">
              {/* Intro */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                  My Journey
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Building the web with{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  creativity & code.
                </span>
              </h3>

              {/* Paragraph 1 */}
              <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
                I am a{" "}
                <span className="font-semibold text-white">
                  fresher Software Developer
                </span>{" "}
                with a strong passion for web development. I enjoy transforming
                ideas into responsive, interactive and user-friendly web
                applications.
              </p>

              {/* Paragraph 2 */}
              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                I have worked with both frontend and backend technologies and
                enjoy understanding how every part of an application connects.
                My primary interests include{" "}
                <span className="text-violet-300">
                  React, JavaScript, TypeScript, Node.js and
                  Express.js
                </span>
                .
              </p>

              {/* Paragraph 3 */}
              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                I believe that good development is not only about writing
                code, but also about creating experiences that are{" "}
                <span className="text-cyan-300">
                  simple, useful and enjoyable.
                </span>
              </p>

              {/* Technology section */}
              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                        index % 2 === 0
                          ? "border-violet-400/20 bg-violet-500/5 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/10"
                          : "border-cyan-400/20 bg-cyan-500/5 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-3 gap-3">
                {/* MERN */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-black text-white">
                    MERN
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                    Stack
                  </p>
                </div>

                {/* Technologies */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-black text-white">
                    10+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                    Technologies
                  </p>
                </div>

                {/* Learning */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xl font-black text-white">
                    ∞
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          About
        </span>
      </div>

      {/* Section heading */}
      {/* Dot removed */}
      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-xl text-gray-500">
        {subtitle}
      </p>

      
    </div>
  );
};

export default About;