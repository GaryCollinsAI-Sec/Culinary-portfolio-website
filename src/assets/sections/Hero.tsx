
export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100svh-64px)] w-full grid-cols-1 bg-[#111111] text-[#F2F0ED] lg:grid-cols-2"
    >
      {/* Left: Culinary Photography */}
      <div className="relative min-h-[45vh] overflow-hidden border-b border-[#333333] lg:min-h-0 lg:border-b-0 lg:border-r">
        <img
          src="/images/dicing.jpeg"
          alt="Knife work in a kitchen"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/10" />

        <div className="absolute bottom-8 left-8 z-10 sm:bottom-12 sm:left-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
            Craft · Preparation · Precision
          </p>
        </div>
      </div>

      {/* Right: Introduction */}
      <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-10 lg:py-12 xl:px-16 2xl:px-20">
        <div className="mb-8 flex justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#999999] sm:text-xs">
          <span>Cottonwood, CA</span>
          <span>Gary Collins / 001</span>
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
          Open to full-time, any shift
        </p>

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FF4B0B]">
          Home Cook · Prep · Line · Pastry
        </p>

        <h1 className="mt-6 font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(4.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.045em] text-[#F2F0ED]">
          Station
          <br />
          Ready
        </h1>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-12 shrink-0 bg-[#FF4B0B]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#999999]">
            Applying for entry-level kitchen roles
          </p>
        </div>

        {/* Expanded Introduction */}
        <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
          <p>
            My interest in cooking began in Boy Scouts in 2011, where I first
            developed an appreciation for preparing food and working with
            ingredients. Since then, cooking has become a long-term passion
            that I've continued to develop through years of self-taught
            practice at home. I enjoy the entire process, from organizing
            ingredients and preparing a workspace to experimenting with
            cooking methods, refining knife skills, and bringing a dish
            together through thoughtful presentation.
          </p>

          <p>
            My interests extend across home cooking, baking, and pastry,
            each offering different opportunities to develop creativity,
            patience, and technical ability. I believe that becoming a good
            cook takes consistency, curiosity, and a willingness to keep
            learning. I'm now looking to take the next step into a
            professional kitchen, where I can gain hands-on experience,
            learn from experienced culinary professionals, contribute to
            a team, and continue building the skills needed to grow in the
            industry.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-14 items-center justify-center gap-5 bg-[#FF4B0B] px-6 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#FF713F]"
          >
            View the Work <span>↗</span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center border border-[#393939] px-7 font-mono text-xs uppercase tracking-[0.15em] transition hover:border-[#FF4B0B] hover:text-[#FF4B0B]"
          >
            Hire Me
          </a>
        </div>

        {/* Culinary Categories */}
        <div className="mt-12 grid grid-cols-3 border-t border-[#333333] pt-7">
          <div>
            <p className="text-2xl font-bold text-[#FF4B0B] sm:text-3xl">
              01
            </p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#999999] sm:text-[10px] sm:tracking-[0.2em]">
              Home Cooking
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#FF4B0B] sm:text-3xl">
              02
            </p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#999999] sm:text-[10px] sm:tracking-[0.2em]">
              Baking
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#FF4B0B] sm:text-3xl">
              03
            </p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#999999] sm:text-[10px] sm:tracking-[0.2em]">
              Pastry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
