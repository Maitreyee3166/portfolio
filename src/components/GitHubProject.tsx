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
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

// --------------------------------------------------
// Custom Swiper Controls
// --------------------------------------------------

const SwiperControls = () => {
  const swiper = useSwiper();

  return (
    <div className="mt-6 flex justify-center gap-3">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous project"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          text-xl
          leading-none
          text-gray-400
          transition-all
          duration-300
          hover:border-violet-400/40
          hover:bg-violet-500/10
          hover:text-violet-300
        "
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => swiper.slideNext()}
        aria-label="Next project"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          text-xl
          leading-none
          text-gray-400
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-cyan-500/10
          hover:text-cyan-300
        "
      >
        ›
      </button>
    </div>
  );
};

const GitHubProject = () => {
   const [repositories, setRepositories] = useState<
    GitHubRepository[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // Fetch GitHub repositories
  // --------------------------------------------------

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/Maitreyee3166/repos`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch GitHub repositories"
          );
        }

        const data: GitHubRepository[] =
          await response.json();

        // Remove forked repositories
        const ownRepositories = data.filter(
          (repository) => repository.name
        );

        setRepositories(ownRepositories);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load GitHub repositories."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (

    <section
      id="githubprojects"
      className="relative overflow-hidden bg-[#100b1f] px-5 py-24 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/[0.06] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      
      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            Section Heading
        ========================= */}

        <div className="mb-14">

          <div className="mb-5 flex items-center gap-4">

            <span className="font-mono text-sm font-bold text-violet-400">
              05
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400" />

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              GitHub Projects
            </span>

          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.04em]
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
               GitHub Projects
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Things I have built through practical learning,
            experimentation, and full-stack development.
          </p>

        </div>

        {/* =========================
            Loading
        ========================= */}

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="flex items-center gap-3 text-gray-400">

              <Loader2
                size={22}
                className="animate-spin text-violet-400"
              />

              <span>
                Loading projects from GitHub...
              </span>

            </div>

          </div>
        )}

        {/* =========================
            Error
        ========================= */}

        {!loading && error && (
          <div
            className="
              rounded-2xl
              border
              border-red-400/20
              bg-red-500/5
              p-6
              text-center
              text-red-300
            "
          >
            {error}
          </div>
        )}

        {/* =========================
            Projects Slider
        ========================= */}

        {!loading &&
          !error &&
          repositories.length > 0 && (

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
  // pagination={{ clickable: true }}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  loop={repositories.length > 1}
  className="projects-swiper !pb-14"
>
              {repositories.map((project) => (

                <SwiperSlide
                  key={project.id}
                  className="
                    !h-auto
                    !w-full
                    sm:!w-[70%]
                    md:!w-[48%]
                    lg:!w-[32%]
                  "
                >

                  {/* =========================
                      Project Card
                  ========================= */}

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
                    "
                  >

                    {/* =========================
                        Project Header
                    ========================= */}

                    <div
                      className="
                        relative
                        flex
                        h-48
                        items-center
                        justify-center
                        overflow-hidden
                        bg-gradient-to-br
                        from-violet-950
                        via-[#17152d]
                        to-[#0f172a]
                      "
                    >

                      {/* Glow */}

                      <div
                        className="
                          absolute
                          h-32
                          w-32
                          rounded-full
                          bg-violet-500/20
                          blur-3xl
                          transition
                          duration-500
                          group-hover:bg-fuchsia-500/20
                        "
                      />

                      {/* Code Icon */}

                      <div
                        className="
                          relative
                          flex
                          flex-col
                          items-center
                        "
                      >

                        <div
                          className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-violet-400/20
                            bg-violet-500/10
                            transition
                            duration-300
                            group-hover:border-fuchsia-400/30
                            group-hover:bg-fuchsia-500/10
                          "
                        >

                          <span
                            className="
                              font-mono
                              text-3xl
                              font-bold
                              text-violet-400
                              transition
                              group-hover:text-fuchsia-400
                            "
                          >
                            {"</>"}
                          </span>

                        </div>

                        <span
                          className="
                            mt-3
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            text-white/30
                          "
                        >
                          Project
                        </span>

                      </div>

                    </div>

                    {/* =========================
                        Project Content
                    ========================= */}

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
                          line-clamp-1
                          text-xl
                          font-bold
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
                          text-gray-400
                        "
                      >
                        {project.description ||
                          "A project built as part of my development journey."}
                      </p>

                      {/* Language */}

                      {project.language && (
                        <div className="mt-5">

                          <span
                            className="
                              rounded-full
                              border
                              border-violet-400/20
                              bg-violet-500/[0.08]
                              px-3
                              py-1.5
                              text-xs
                              text-violet-300
                            "
                          >
                            {project.language}
                          </span>

                        </div>
                      )}

                      {/* Topics */}

                      {project.topics?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">

                          {project.topics
                            .slice(0, 4)
                            .map((topic) => (

                              <span
                                key={topic}
                                className="
                                  rounded-full
                                  border
                                  border-white/[0.08]
                                  bg-white/[0.03]
                                  px-2.5
                                  py-1
                                  text-[11px]
                                  text-gray-500
                                "
                              >
                                #{topic}
                              </span>

                            ))}

                        </div>
                      )}

                      {/* =========================
                          Stats
                      ========================= */}

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
                            text-gray-500
                          "
                        >
                          <Star size={15} />

                          <span className="text-xs">
                            {project.stargazers_count}
                          </span>

                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-gray-500
                          "
                        >
                          <GitFork size={15} />

                          <span className="text-xs">
                            {project.forks_count}
                          </span>

                        </div>

                        <span
                          className="
                            ml-auto
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-gray-600
                          "
                        >
                          GitHub
                        </span>

                      </div>

                      {/* =========================
                          Buttons
                      ========================= */}

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
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-violet-600
                            to-fuchsia-600
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:from-violet-500
                            hover:to-fuchsia-500
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
                                project.homepage as string,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2
                              rounded-xl
                              border
                              border-white/10
                              px-4
                              py-2.5
                              text-sm
                              font-semibold
                              text-gray-300
                              transition
                              hover:border-cyan-400/30
                              hover:bg-cyan-400/5
                              hover:text-cyan-300
                            "
                          >
                            <ExternalLink size={16} />

                            Live
                          </button>
                        )}

                      </div>

                    </div>

                  </article>

                </SwiperSlide>

              ))}

              {/* =========================
                  Custom Slider Controls
              ========================= */}

              <SwiperControls />

            </Swiper>

          )}

        {/* =========================
            No Repositories
        ========================= */}

        {!loading &&
          !error &&
          repositories.length === 0 && (

            <div
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-10
                text-center
              "
            >

              <p className="text-gray-400">
                No GitHub repositories found.
              </p>

            </div>

          )}

        {/* =========================
            Bottom Text
        ========================= */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
          "
        >

          <div
            className="
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              to-violet-500/30
            "
          />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-600
            "
          >
            Built • Learned • Improved
          </span>

          <div
            className="
              h-px
              w-20
              bg-gradient-to-l
              from-transparent
              to-cyan-500/30
            "
          />

        </div>

      </div>

      {/* Bottom Divider */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-rF
          from-transparent
          via-violet-500/30
          to-transparent
        "
      />
<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
    
    </section>
  );
}

export default GitHubProject;
