import { useEffect, useState } from "react";

import {
  Swiper,
  SwiperSlide,
  useSwiper,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import {
  ExternalLink,
  Star,
  GitFork,
  Loader2,
  AlertCircle,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

// ========================================
// Swiper Controls
// ========================================

const SwiperControls = () => {
  const swiper = useSwiper();

  return (
    <div className="mt-8 flex justify-center gap-3">
      {/* Previous */}

      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous project"
        className="
          group
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          text-2xl
          text-slate-400
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-violet-400/40
          hover:bg-violet-500/10
          hover:text-violet-300
        "
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          ‹
        </span>
      </button>

      {/* Next */}

      <button
        type="button"
        onClick={() => swiper.slideNext()}
        aria-label="Next project"
        className="
          group
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          text-2xl
          text-slate-400
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-violet-400/40
          hover:bg-violet-500/10
          hover:text-violet-300
        "
      >
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          ›
        </span>
      </button>
    </div>
  );
};

// ========================================
// Projects Component
// ========================================

const Projects = () => {
  const [repositories, setRepositories] = useState<
    GitHubRepository[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ========================================
  // Fetch GitHub Projects
  // ========================================

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/Maitreyee3166/repos`
        );

        const data = await response.json();

        // ========================================
        // GitHub API Error
        // ========================================

        if (!response.ok) {
          console.error(
            "GitHub API error:",
            response.status,
            data
          );

          if (response.status === 403) {
            throw new Error(
              "GitHub API rate limit exceeded. Please try again later."
            );
          }

          if (response.status === 404) {
            throw new Error(
              "GitHub user or repositories not found."
            );
          }

          throw new Error(
            data?.message ||
              `GitHub API error: ${response.status}`
          );
        }

        // ========================================
        // Validate Response
        // ========================================

        if (!Array.isArray(data)) {
          throw new Error(
            "Invalid response received from GitHub."
          );
        }

        // ========================================
        // Only Live Projects
        // ========================================

        const liveProjects = (
          data as GitHubRepository[]
        )
          .filter(
            (repo) =>
              repo.homepage &&
              repo.homepage.trim() !== ""
          )
          .slice(0, 5);

        setRepositories(liveProjects);
      } catch (err) {
        console.error(
          "Failed to fetch GitHub repositories:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load projects."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // ========================================
  // Loading
  // ========================================

  if (loading) {
    return (
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          border-y
          border-violet-400/10
          bg-[#0B0918]
          px-5
          py-24
          lg:px-8
        "
      >
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-400/20
                bg-violet-400/5
              "
            >
              <Loader2
                className="animate-spin text-violet-400"
                size={25}
              />
            </div>

            <p className="text-sm text-slate-500">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ========================================
  // Main UI
  // ========================================

  return (
    <section
  id="projects"
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

      {/* =====================================
          Content
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================
            Header
        ===================================== */}

        <div className="mb-16">
          {/* Section Label */}

          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-violet-400/20
                bg-violet-400/5
                text-xs
                font-bold
                text-violet-300
                shadow-[0_0_25px_rgba(124,58,237,0.12)]
              "
            >
              04
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-slate-500
              "
            >
              My Project
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Project
            </span>

            
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            A collection of projects I've designed and
            developed using modern technologies to solve
            real-world problems.
          </p>

          {/* Status */}

          <div
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-4
              py-3
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-cyan-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-cyan-400
                "
              />
            </span>

            <span className="text-xs font-medium text-slate-400">
              Live projects
            </span>

            <span className="text-slate-700">
              /
            </span>

            <span className="text-xs font-semibold text-cyan-300">
              {repositories.length}
            </span>

            <span className="text-xs text-slate-500">
              deployed
            </span>
          </div>
        </div>

        {/* =====================================
            Error
        ===================================== */}

        {error ? (
          <div
            className="
              mx-auto
              max-w-2xl
              rounded-3xl
              border
              border-red-400/10
              bg-red-400/[0.03]
              p-8
              text-center
              backdrop-blur-xl
            "
          >
            <div
              className="
                mx-auto
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-red-400/20
                bg-red-400/5
              "
            >
              <AlertCircle
                size={22}
                className="text-red-400"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Projects temporarily unavailable
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="
                mt-6
                rounded-xl
                border
                border-violet-400/20
                bg-violet-400/5
                px-5
                py-2.5
                text-sm
                font-semibold
                text-violet-300
                transition-all
                duration-300
                hover:border-violet-400/40
                hover:bg-violet-400/10
              "
            >
              Try Again
            </button>
          </div>
        ) : repositories.length === 0 ? (
          /* =====================================
             No Live Projects
          ===================================== */

          <div
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#0b0b15]/80
              p-10
              text-center
              backdrop-blur-xl
            "
          >
            <p className="text-slate-400">
              No live projects found.
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Add a homepage URL to your GitHub repository
              to display it here.
            </p>
          </div>
        ) : (
          /* =====================================
             Projects Slider
          ===================================== */

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={repositories.length > 1}
            className="projects-swiper !pb-16"
          >
            {repositories.map((project) => (
              <SwiperSlide
                key={project.id}
                className="!h-auto"
              >
                <article
                  className="
                    group
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-[#0b0b15]/80
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-violet-400/30
                    hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
                  "
                >
                  {/* =================================
                      ACTUAL LIVE WEBSITE
                  ================================= */}

                  <div
                    className="
                      group/header
                      relative
                      h-52
                      overflow-hidden
                      bg-[#080812]
                    "
                  >
                    {project.homepage && (
                      <iframe
                        src={project.homepage}
                        title={`${project.name} live preview`}
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-1/2
                          h-[700px]
                          w-[1200px]
                          -translate-x-1/2
                          -translate-y-1/2
                          scale-[0.38]
                          origin-center
                          border-0
                        "
                        loading="lazy"
                      />
                    )}

                    {/* Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#080812]
                        via-transparent
                        to-black/10
                      "
                    />

                    {/* Code Icon */}

                    <div
                      className="
                        absolute
                        left-6
                        top-6
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-black/40
                        text-xl
                        font-bold
                        text-violet-300
                        backdrop-blur-md
                      "
                    >
                      &lt;/&gt;
                    </div>

                    {/* Project Label */}

                    <div className="absolute bottom-5 left-6">
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-violet-300
                        "
                      >
                        Live Project
                      </p>

                      <div className="mt-1 h-px w-8 bg-violet-400/60" />
                    </div>

                    {/* Bottom Divider */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-violet-400/30
                        to-transparent
                      "
                    />
                  </div>

                  {/* =================================
                      Card Content
                  ================================= */}

                  <div
                    className="
                      flex
                      min-h-[340px]
                      flex-col
                      p-6
                    "
                  >
                    {/* Project Name */}

                    <h3
                      className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-white
                      "
                    >
                      {project.name}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        line-clamp-3
                        min-h-[72px]
                        text-sm
                        leading-6
                        text-slate-400
                      "
                    >
                      {project.description ||
                        "A modern full-stack project built with current web technologies."}
                    </p>

                    {/* Language */}

                    {project.language && (
                      <div className="mt-4">
                        <span
                          className="
                            inline-flex
                            rounded-lg
                            border
                            border-violet-400/10
                            bg-violet-400/5
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-violet-300
                          "
                        >
                          {project.language}
                        </span>
                      </div>
                    )}

                    {/* Topics */}

                    {project.topics.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.topics
                          .slice(0, 3)
                          .map((topic) => (
                            <span
                              key={topic}
                              className="
                                rounded-md
                                border
                                border-white/[0.06]
                                bg-white/[0.03]
                                px-2
                                py-1
                                text-[11px]
                                text-slate-500
                              "
                            >
                              #{topic}
                            </span>
                          ))}
                      </div>
                    )}

                    {/* Stats */}

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        gap-5
                        border-t
                        border-white/[0.06]
                        pt-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-slate-500
                        "
                      >
                        <Star size={14} />

                        <span>
                          {project.stargazers_count}
                        </span>
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-slate-500
                        "
                      >
                        <GitFork size={14} />

                        <span>
                          {project.forks_count}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}

                    <div className="mt-5 flex gap-3">
                      {/* GitHub */}

                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            project.html_url,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="
                          flex-1
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:border-violet-400/30
                          hover:bg-violet-500/10
                        "
                      >
                        GitHub
                      </button>

                      {/* Live Demo */}

                      {project.homepage && (
                        <button
                          type="button"
                          onClick={() =>
                            window.open(
                              project.homepage!,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          className="
                            flex-1
                            rounded-xl
                            border
                            border-cyan-400/20
                            bg-cyan-400/5
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-cyan-300
                            transition-all
                            duration-300
                            hover:border-cyan-400/40
                            hover:bg-cyan-400/10
                          "
                        >
                          <span className="flex items-center justify-center gap-2">
                            Live Demo
                            <ExternalLink size={15} />
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Bottom Divider */}

                    <div
                      className="
                        mt-5
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-violet-400/20
                        to-transparent
                      "
                    />
                  </div>
                </article>
              </SwiperSlide>
            ))}

            {/* Controls */}

            <SwiperControls />
          </Swiper>
        )}
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
    <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

    </section>
  );
};

export default Projects;