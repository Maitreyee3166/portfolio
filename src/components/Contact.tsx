const Contact = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="
    relative
    overflow-hidden
    bg-[#080812]
    px-5
    py-28
    lg:px-8
  "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[140px]" />

      {/* ================= GRID BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION TITLE ================= */}

        <SectionTitle
          number="09"
          title="Let's Connect"
          subtitle="Open to learning, collaboration and career opportunities"
        />

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/80 p-8 backdrop-blur-xl lg:p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-[90px]" />

            <div className="relative">
              {/* Small label */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                  Get in touch
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  great
                </span>{" "}
                together.
              </h3>

              {/* Description */}
              <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
                I am open to learning opportunities, internships, collaborations
                and junior developer opportunities. Feel free to connect with
                me.
              </p>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm text-gray-300">
                  Open to opportunities
                </span>
              </div>

              {/* Contact items */}
              <div className="mt-8 space-y-3">
                {/* Email */}
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "mailto:maitreyeesamanta66@gmail.com")
                  }
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/5 text-violet-300 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/10">
                    @
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-300">
                      maitreyeesamanta66@gmail.com
                    </p>
                  </div>

                  <span className="ml-auto text-gray-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-300">
                    →
                  </span>
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  onClick={() => openLink("https://github.com/Maitreyee3166")}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/5 text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10">
                    GH
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      GitHub
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-300">
                      github.com/Maitreyee3166
                    </p>
                  </div>

                  <span className="ml-auto text-gray-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                    ↗
                  </span>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  onClick={() => openLink("https://www.linkedin.com/")}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-fuchsia-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/5 text-fuchsia-300 transition-all duration-300 group-hover:border-fuchsia-400/40 group-hover:bg-fuchsia-500/10">
                    in
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      LinkedIn Profile
                    </p>
                  </div>

                  <span className="ml-auto text-gray-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-fuchsia-300">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE - FORM */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b15]/80 p-8 backdrop-blur-xl lg:p-10">
            {/* Top gradient */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-violet-400/10" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-cyan-400/10" />

            <div className="relative">
              {/* Form heading */}
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
                  Send a message
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Have an idea?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Tell me a little about what you have in mind.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-violet-400/50 focus:bg-violet-500/[0.02] focus:ring-1 focus:ring-violet-400/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-violet-400/50 focus:bg-violet-500/[0.02] focus:ring-1 focus:ring-violet-400/20"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-violet-400/50 focus:bg-violet-500/[0.02] focus:ring-1 focus:ring-violet-400/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080b16] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-violet-400/50 focus:bg-violet-500/[0.02] focus:ring-1 focus:ring-violet-400/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-6 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.3)]"
                >
                  <span className="relative z-10">Send Message →</span>

                  <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </form>
            </div>
          </div>
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
          Contact
        </span>
      </div>

      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Contact;
