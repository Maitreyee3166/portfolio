
import profileImage from "../assets/maitreyee.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070711] px-5 pt-24 text-white lg:px-8"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Cyan Glow */}
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ================= LEFT ================= */}

        <div className="relative z-10">
          {/* Small Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-2.5 w-2.5">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            <span className="text-sm tracking-wide text-gray-400">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="mt-6">
            {/* Small intro */}
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.4em] text-slate-400 sm:text-base">
              Hello, I'm
            </span>

            {/* First name */}
            <span
              className="
      block
      text-4xl
      font-black
      leading-[0.9]
      tracking-[-0.055em]
      text-white
      sm:text-7xl
      lg:text-8xl
    "
            >
              Maitreyee
            </span>

            {/* Last name */}
            <span
              className="
      mt-2
      block
      bg-gradient-to-r
      from-violet-400
      via-fuchsia-400
      to-cyan-400
      bg-clip-text
      text-4xl
      font-black
      leading-none
      tracking-[-0.04em]
      text-transparent
      sm:text-5xl
      lg:text-6xl
    "
            >
              Samanta
            </span>

            {/* Developer line */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-violet-500 to-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
                Full Stack Developer{" "}
                <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 font-mono text-sm text-violet-300">
                  MERN
                </span>
              </span>
            </div>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I am a passionate and motivated Software Developer and a fresher who
            enjoys building modern and user-friendly web applications. I have
            learned frontend and backend development using technologies like{" "}
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
              HTML
            </span>{" "} ,{" "}
           <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
              CSS
            </span>{" "} ,{" "}
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
             JavaScript
            </span>{" "} ,{" "}
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
              React
            </span>{" "} ,{" "}
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
              Node.js
            </span>{" "}and{" "}
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-violet-400/30 hover:text-violet-300">
              Express.js
            </span>{" "}. I enjoy solving
            programming problems, learning new technologies, and creating
            real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4 mb-5">
            {/* Projects */}
            <button
              type="button"
              // onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]"
            >
              <span>View My Projects</span>

              <span className="ml-2 inline-block transition-all duration-300 group-hover:ml-3">
                →
              </span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={() =>
                window.open("https://api.github.com/users/Maitreyee3166/repos", "_blank")
              }
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-gray-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
            >
              GitHub ↗
            </button>

            {/* Contact */}
            <button
              type="button"
              // onClick={() => scrollToSection("contact")}
              className="group relative overflow-hidden rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-7 py-3.5 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span>Contact Me</span>

              <span className="ml-2 inline-block transition-all duration-300 group-hover:ml-3">
                →
              </span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
          {/* Huge Background Name */}
          <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[110px] font-black leading-none text-white/[0.025] sm:text-[150px]">
            DEV
          </div>

          {/* Orbit */}
          <div className="absolute h-[360px] w-[360px] rounded-full border border-violet-400/10 sm:h-[470px] sm:w-[470px]" />

          <div className="absolute h-[290px] w-[290px] rounded-full border border-cyan-400/10 sm:h-[390px] sm:w-[390px]" />

          {/* Orbit dots */}
          <div className="absolute left-[8%] top-[30%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />

          <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

          <div className="absolute bottom-[20%] right-[10%] h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.7)]" />

          {/* ================= PHOTO ================= */}

          <div className="relative z-10">
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-violet-600/30 blur-[70px]" />

            {/* Image Frame */}
            {/* Photo Glow */}
            <div className="absolute inset-5 rounded-full bg-yellow-400/20 blur-[60px]" />

            {/* PHOTO */}
            <div
              className="
                relative
                h-[300px]
                w-[235px]
                overflow-hidden
                rounded-[7rem]
                border
                border-yellow-400/25
                bg-gradient-to-b
                from-yellow-400/10
                to-transparent
                p-1.5
                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                sm:h-[300px]
                sm:w-[275px]
              "
            >
              <div className="h-full w-full overflow-hidden rounded-[6.5rem] bg-[#111111]">
                <img
                  src={profileImage}
                  alt="Maitreyee Samanta"
                  className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* ================= FLOATING CARDS ================= */}

            {/* MERN */}
            <div className="absolute -left-10 top-20 rounded-2xl border border-white/10 bg-[#10101c]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-16">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">
                Stack
              </p>

              <p className="mt-1 font-mono text-lg font-bold text-violet-300">
                MERN
              </p>
            </div>

            {/* Code */}
            <div className="absolute bottom-20 rounded-2xl border border-white/10 bg-[#10101c]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-12">
              <p className="font-mono text-xs text-gray-500">{"<code />"}</p>

              <p className="mt-1 text-sm font-semibold text-gray-200">
                Turning ideas
              </p>

              <p className="text-sm font-semibold text-violet-300">
                into experiences.
              </p>
            </div>

            {/* Location */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#10101c]/90 px-5 py-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span>📍</span>

                <span className="text-sm text-gray-300">Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <div className="h-10 w-px bg-gradient-to-b from-violet-400/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
