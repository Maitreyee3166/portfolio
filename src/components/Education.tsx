const Education = () => {
  const education = [
    {
      number: "01",
      level: "Bachelor's Degree",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution:
        "Bengal Institute of Technology and Management (Santiniketan)",
      score: "76.67%",
      year: "Completed",
      accent: "violet",
    },
    {
      number: "02",
      level: "Higher Secondary",
      degree: "Higher Secondary",
      field: "",
      institution: "Gopalpur High School",
      score: "90%",
      year: "Completed",
      accent: "fuchsia",
    },
    {
      number: "03",
      level: "Secondary Education",
      degree: "Secondary",
      field: "",
      institution: "Gopalpur High School",
      score: "86%",
      year: "Completed",
      accent: "cyan",
    },
  ];

  return (
    <section
      id="education"
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
        {/* Section heading */}
        <SectionTitle
          number="06"
          title="Education"
          subtitle="My academic journey and achievements"
        />

        {/* Education cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/30 hover:shadow-[0_25px_80px_rgba(124,58,237,0.15)]"
            >
              {/* Top gradient */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-[70px] transition-all duration-700 group-hover:bg-violet-500/20" />

              <div className="relative">
                {/* Number + year */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-violet-400">
                    {item.number}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-500">
                    {item.year}
                  </span>
                </div>

                {/* Level */}
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                  {item.level}
                </p>

                {/* Degree */}
                <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                  {item.degree}
                </h3>

                {/* Field */}
                <p className="mt-2 text-sm font-medium text-violet-300">
                  {item.field}
                </p>

                {/* Institution */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Institution
                  </p>

                  <p className="mt-2 leading-6 text-gray-300">
                    {item.institution}
                  </p>
                </div>

                {/* Score */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      Percentage
                    </p>
                  </div>

                  {/* Decorative circle */}
                  <p className="mt-1 text-3xl font-black text-white">
                    {item.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-sm font-bold text-violet-400">
          {number}
        </span>

        <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-600">
          Education
        </span>
      </div>

      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-gray-500">{subtitle}</p>
      {/* <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" /> */}

      {/* <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" /> */}
    </div>
  );
};

export default Education;
