import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20 lg:px-24 xl:px-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16 lg:gap-24">
          
          {/* Text */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-600" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Available for work
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Overcomer
              <span className="block text-amber-600">Atoyeje.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-neutral-400 md:text-lg">
              Frontend & Fullstack Web Developer building responsive,
              functional and thoughtful digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"
                className="group inline-flex items-center gap-3 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-500"
              >
                Hire Me
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-amber-600 hover:text-amber-500"
              >
                View My Work
              </a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-3">
              <SocialLinks
                iconData="fab fa-google"
                to="mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"
              />

              <SocialLinks
                iconData="fab fa-github"
                to="https://github.com/overcomer-v"
              />

              <SocialLinks
                iconData="fab fa-twitter"
                to="https://x.com/victor_atoyeje_?s=09"
              />
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto md:mx-0">
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-amber-600/40" />

            <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
              <img
                className="h-[360px] w-[300px] object-cover md:h-[430px] md:w-[350px] lg:h-[500px] lg:w-[400px]"
                src="/images/file_00000000b1d061fd8e593e7191014ff2 (1)_2.png"
                alt="Overcomer Atoyeje"
              />

              {/* Image overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Developer · Designer
                </p>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -left-5 top-8 hidden rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs text-neutral-400 shadow-xl md:block">
              Building for the web
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-20 flex flex-col gap-5 border-t border-neutral-800 pt-6 text-xs uppercase tracking-widest text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>React · Next.js · JavaScript · TypeScript</span>

          <a
            href="#projects"
            className="flex items-center gap-3 transition-colors hover:text-amber-500"
          >
            Explore my work
            <span className="text-lg">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}
