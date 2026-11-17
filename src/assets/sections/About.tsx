
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#151515] px-5 py-24 text-[#F2F0ED] sm:px-6 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Profile photograph */}
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#FF4B0B]/50" />

          <div className="relative aspect-4/5 overflow-hidden bg-[#202020]">
            <img
              src="/images/Myselfphoto.jpg"
              alt="Gary Collins"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

            <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-white">
              FIG. 04 — THE PERSON BEHIND THE PLATE
            </p>
          </div>
        </div>

        {/* About content */}
        <div className="relative">

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4B0B]">
            04 — About Me
          </p>

          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
            A passion for the craft.
          </h2>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#999999]">
            Gary Collins · Aspiring Culinary Professional
          </p>

          {/* Expanded Biography */}
          <div className="mt-8 space-y-6 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">

            <p>
              My interest in cooking began in Boy Scouts in 2011, where
              I had my first opportunities to prepare food and develop
              an appreciation for working with ingredients. What started
              as an early interest gradually became a lasting passion.
              Over the years, I've continued exploring cooking and
              baking independently, developing my skills through
              practice, experimentation, and a genuine curiosity
              about the culinary process.
            </p>

            <p>
              I particularly enjoy making food from scratch, whether
              that means preparing homemade pies and cobblers, baking
              cookies and brownies, or creating savory meals. I find
              satisfaction in every stage of the process, from
              organizing ingredients and preparing a workspace to
              developing flavors and presenting the finished dish.
              Each creation gives me another opportunity to practice
              techniques, improve my attention to detail, and learn
              something new.
            </p>

            <p>
              As I pursue a career in the culinary industry, I'm ready
              to take the next step and bring my passion into a
              professional kitchen. I understand that there is much
              more to learn beyond home cooking, including the pace
              of service, teamwork, consistency, and professional
              kitchen standards. I'm eager to gain that experience,
              accept guidance from experienced culinary professionals,
              and build a strong foundation through dedication
              and hands-on work.
            </p>

          </div>

          {/* Personal highlights */}
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#393939] pt-7">
            <div>
              <p className="font-mono text-xs text-[#FF4B0B]">
                BACKGROUND
              </p>
              <p className="mt-2 text-base leading-7 text-[#F2F0ED]">
                Home Cooking & Baking
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-[#FF4B0B]">
                CERTIFICATION
              </p>
              <p className="mt-2 text-base leading-7 text-[#F2F0ED]">
                AAA California Food Handler
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex min-h-14 items-center gap-5 bg-[#FF4B0B] px-7 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#FF713F]"
          >
            Get in Touch <span>↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}
