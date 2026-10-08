import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    // ["GitHub Projects", "githubprojects"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#070711]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
  type="button"
  onClick={() => scrollToSection("home")}
  className="text-2xl font-black tracking-[-0.04em] text-white"
>
  Portfolio<span className="text-violet-400">.</span>
</button>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, id]) => (
            <button
              key={name}
              type="button"
              onClick={() => scrollToSection(id)}
              className="relative text-sm font-medium text-gray-400 transition duration-300 hover:text-white"
            >
              {name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Let's Talk */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="ml-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-violet-500/30"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition hover:border-violet-400/40 hover:text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#070711]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-3">
          {links.map(([name, id], index) => (
            <button
              key={name}
              type="button"
              onClick={() => scrollToSection(id)}
              className={`block w-full py-4 text-left text-sm font-medium text-gray-400 transition hover:text-violet-400 ${
                index !== links.length - 1
                  ? "border-b border-white/[0.05]"
                  : ""
              }`}
            >
              <span className="mr-3 font-mono text-xs text-violet-500/70">
                0{index + 1}
              </span>
              {name}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-4 mb-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20"
          >
            Let's Talk →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;