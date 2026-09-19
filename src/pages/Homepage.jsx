import { SocialLinks } from "../components/SocialLinks";
import { projects } from "../project-list";

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <header className="relative px-6 pb-20 pt-8 md:px-12 md:pb-28 md:pt-12 lg:px-24 xl:px-40">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-600/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-neutral-900 pb-6">
            <p className="text-sm font-semibold tracking-tight">
              AO<span className="text-amber-600">.</span>
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-neutral-600 sm:block">
              Frontend / Fullstack Developer
            </p>

            <a
              href="mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"
              className="text-xs font-medium text-neutral-400 transition-colors hover:text-amber-500"
            >
              Get in touch ↗
            </a>
          </div>

          {/* Hero */}
          <div className="mt-16 grid items-center gap-14 md:mt-24 md:grid-cols-[1fr_auto] lg:gap-24">
            {/* Intro */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-amber-600" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Available for work
                </span>
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Hello, I'm
              </p>

              <h1 className="mt-3 text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
                Overcomer
                <span className="block text-amber-600">Atoyeje.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
                I build responsive, functional and thoughtful web experiences
                that turn ideas into useful digital products.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-4 rounded-full bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-amber-500"
                >
                  View my work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"
                  className="inline-flex items-center gap-3 rounded-full border border-neutral-800 px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition-all duration-300 hover:border-amber-600 hover:text-amber-500"
                >
                  Hire me
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
            <div className="relative mx-auto w-fit md:mx-0">
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-16 select-none text-[180px] font-bold leading-none tracking-[-0.08em] text-neutral-900 md:-right-20 md:-top-24 md:text-[240px]"
              >
                01
              </span>

              {/* Image */}
              <div className="relative overflow-hidden bg-neutral-900">
                <img
                  src="/images/file_00000000b1d061fd8e593e7191014ff2 (1)_2.png"
                  alt="Overcomer Atoyeje"
                  className="h-[390px] w-[300px] object-cover md:h-[470px] md:w-[360px] lg:h-[520px] lg:w-[400px] rounded-lg"
                />

                {/* Very subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Image metadata */}
              <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3">
                {/* <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  Atoyeje Overcomer
                </span>

                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  2026
                </span> */}
              </div>
            </div>
          </div>

          {/* Tech strip */}
          <div className="mt-20 flex flex-col gap-5 border-t border-neutral-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Supabase</span>
            </div>

            <a
              href="#projects"
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-amber-500"
            >
              Scroll to explore
              <span className="text-base">↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          SELECTED WORK
      ===================================================== */}
      <section
        id="projects"
        className="border-y border-neutral-900 bg-neutral-950 px-6 py-24 md:px-12 md:py-32 lg:px-24 xl:px-40"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="01 — Selected Work"
            title="Things I've built."
            description="A selection of projects where I've designed, developed and solved problems through code."
          />

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                number={String(index + 1).padStart(2, "0")}
                title={project.title}
                image={project.imageSrc}
                desc={project.desc}
                stack={project.stack}
                url={project.url}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section
        id="about"
        className="px-6 py-24 md:px-12 md:py-32 lg:px-24 xl:px-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <div>
              <SectionLabel text="02 — About Me" />

              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                I care about how things{" "}
                <span className="text-amber-600">work</span> and feel.
              </h2>
            </div>

            <div className="lg:pt-12">
              <p className="text-base leading-8 text-neutral-400 md:text-lg">
                I'm Atoyeje Overcomer, a web developer passionate about building
                responsive and user-focused websites. I enjoy taking an idea
                from a rough concept and turning it into a working digital
                experience.
              </p>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                My focus is writing clean, maintainable code while paying
                attention to performance, usability and visual details. I'm
                constantly learning and exploring new technologies to become a
                better developer.
              </p>

              <div className="mt-12 border-t border-neutral-900 pt-7">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  <TechBadge
                    image="/images/134b64009d7c45128e6bde5b6587553e.jpg"
                    name="React"
                  />

                  <TechBadge
                    image="/images/JavaScript-logo.png"
                    name="JavaScript"
                  />

                  <TechBadge image="/images/tailwind.png" name="Tailwind CSS" />

                  <TechBadge
                    image="/images/css3-emblem-blue-shield-and-white-text-vector.jpg"
                    name="CSS"
                  />

                  <TechBadge
                    image="/images/html5-emblem-orange-shield-and-white-text-vector.jpg"
                    name="HTML"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="border-y border-neutral-900 bg-neutral-900/30 px-6 py-24 md:px-12 md:py-32 lg:px-24 xl:px-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 — Capabilities"
            title="What I can help with."
            description="From focused landing pages to complete web applications, I build around the needs of the project."
          />

          <div className="mt-16 grid overflow-hidden rounded-2xl border border-neutral-800 md:grid-cols-2 lg:grid-cols-3">
            <Service
              number="01"
              title="Frontend Development"
              description="Responsive, fast and accessible interfaces built with modern HTML, CSS, JavaScript and React."
            />

            <Service
              number="02"
              title="Web Applications"
              description="Interactive applications with modern frameworks, reusable components and thoughtful architecture."
            />

            <Service
              number="03"
              title="UI Implementation"
              description="Turning Figma, Adobe XD and other designs into accurate, responsive and functional interfaces."
            />

            <Service
              number="04"
              title="Performance"
              description="Improving loading speed, responsiveness and overall user experience across different devices."
            />

            <Service
              number="05"
              title="Maintenance"
              description="Bug fixes, content updates, improvements and ongoing changes to keep websites reliable."
            />

            <Service
              number="06"
              title="Landing Pages"
              description="Focused landing pages designed to communicate clearly and guide visitors toward action."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-24 xl:px-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="04 — Process"
            title="How I approach a project."
            description="A straightforward process that keeps the work focused from the first idea to the final product."
          />

          <div className="mt-16 grid gap-10 border-t border-neutral-900 pt-10 md:grid-cols-4 md:gap-8">
            <ProcessStep
              number="01"
              title="Understand"
              text="Understand the goals, users, requirements and constraints."
            />

            <ProcessStep
              number="02"
              title="Plan"
              text="Break the project into clear features, components and stages."
            />

            <ProcessStep
              number="03"
              title="Build"
              text="Turn the plan into a responsive and functional experience."
            />

            <ProcessStep
              number="04"
              title="Refine"
              text="Test, optimize and polish the details before delivery."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section className="px-6 pb-8 md:px-12 lg:px-24 xl:px-40">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-amber-600 px-7 py-16 text-black md:px-14 md:py-20 lg:px-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                Have a project in mind?
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
                Let's build something useful.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 opacity-70 md:text-base">
                Have an idea, need a website or want to improve an existing
                product? Let's talk about what you're building.
              </p>

              <a
                href="mailto:atoyejeovercomer2@gmail.com?subject=Project%20Inquiry"
                className="mt-9 inline-flex items-center gap-4 rounded-full bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="flex flex-col gap-7 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-700">
              © {new Date().getFullYear()} Atoyeje Overcomer
            </p>

            <div className="flex items-center gap-3">
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

            <p className="text-[10px] text-neutral-700">
              atoyejeovercomer2@gmail.com
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel text={eyebrow} />

      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
        {description}
      </p>
    </div>
  );
}

/* =====================================================
   SECTION LABEL
===================================================== */

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-amber-600" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-600">
        {text}
      </span>
    </div>
  );
}

/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({ number, title, image, desc, stack, url, githubUrl }) {
  return (
    <article className="group">
      {/* Image */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
      >
        <div className="absolute left-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-[10px] font-semibold backdrop-blur-md">
          {number}
        </div>

        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </a>

      {/* Details */}
      <div className="mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center justify-between text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h3>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-black"
            >
              ↗
            </a>
          </div>
          <p className="mt-3 md:max-w-xl text-sm leading-6 text-neutral-500">
            {desc}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-800 px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-neutral-500"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-neutral-900 pt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-amber-600 transition-colors hover:text-amber-500"
          >
            View project →
          </a>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   SERVICE
===================================================== */

function Service({ number, title, description }) {
  return (
    <div className="group border-b border-neutral-800 bg-neutral-950 p-7 transition-colors duration-300 hover:bg-neutral-900 md:p-8 lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r lg:nth-[3n+4]:border-r lg:nth-[3n+5]:border-r md:nth-[odd]:border-r lg:nth-last-child(-n+3):border-b-0">
      <div className="flex items-start justify-between">
        <span className="text-[10px] text-neutral-700">{number}</span>

        <span className="text-xl text-neutral-700 transition-colors duration-300 group-hover:text-amber-600">
          ↗
        </span>
      </div>

      <h3 className="mt-14 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
    </div>
  );
}

/* =====================================================
   PROCESS
===================================================== */

function ProcessStep({ number, title, text }) {
  return (
    <div>
      <span className="text-xs font-semibold text-amber-600">{number}</span>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
    </div>
  );
}

/* =====================================================
   TECHNOLOGY BADGE
===================================================== */

function TechBadge({ image, name }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2">
      <img
        src={image}
        alt={name}
        className="h-7 w-7 rounded-full object-cover"
      />

      <span className="pr-1 text-xs font-medium text-neutral-300">{name}</span>
    </div>
  );
}
