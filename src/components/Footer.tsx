const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#070711] px-5 py-8 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-300">
            Maitreyee Samanta
          </span>
          . All Rights Reserved.
        </p>

        {/* Built with */}
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
          Built with{" "}
          <span className="text-violet-400">React</span>{" "}
          &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;