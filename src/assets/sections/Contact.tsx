
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] px-5 py-24 text-[#F2F0ED] sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4B0B]">
            05 — Contact / Employment
          </p>

          <h2 className="mt-6 font-[Impact,'Arial_Narrow',sans-serif] text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-8xl lg:text-9xl">
            Let's Get
            <br />
            <span className="text-[#FF4B0B]">To Work.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
            I'm looking for an opportunity to bring my enthusiasm
            for cooking, willingness to learn, and dependable
            approach to a professional kitchen. I'm interested
            in entry-level positions where I can continue
            developing my skills, contribute to a team, and
            learn from experienced kitchen professionals.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
            Whether the opportunity involves food preparation,
            line cooking, baking, or pastry, I would appreciate
            the chance to introduce myself and learn more about
            what your kitchen is looking for.
          </p>
        </div>

        {/* Contact form */}
        <div className="grid gap-12 border-t border-[#393939] pt-10 lg:grid-cols-[1fr_2fr]">
          {/* Contact information */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]">
              Start a Conversation
            </p>

            <h3 className="mt-4 text-2xl font-serif sm:text-3xl">
              Have an opportunity?
            </h3>

            <p className="mt-4 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
              I'd be glad to hear from restaurants, bakeries,
              and kitchen teams looking for someone starting
              their culinary career. I'm open to learning
              different stations, following kitchen standards,
              and supporting the team wherever I'm needed.
            </p>

            <div className="mt-10 border-l-2 border-[#FF4B0B] pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                Availability
              </p>
              <p className="mt-3 text-base leading-7 text-[#F2F0ED] sm:text-lg">
                Open to full-time, entry-level kitchen
                opportunities and any shift.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            action="https://formsubmit.co/garycollins0449@gmail.com"
            method="POST"
            className="space-y-7"
          >
            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Culinary Portfolio Inquiry"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]"
              >
                01 / Your Name
              </label>

              <input
                type="text"
                id="name"
                name="Name"
                autoComplete="name"
                placeholder="Your name"
                required
                className="min-h-14 w-full border border-[#393939] bg-[#191919] px-5 text-base text-white placeholder:text-[#777777] outline-none transition focus:border-[#FF4B0B]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]"
              >
                02 / Email Address
              </label>

              <input
                type="email"
                id="email"
                name="Email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="min-h-14 w-full border border-[#393939] bg-[#191919] px-5 text-base text-white placeholder:text-[#777777] outline-none transition focus:border-[#FF4B0B]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]"
              >
                03 / Message
              </label>

              <textarea
                id="message"
                name="Message"
                rows={6}
                placeholder="Tell me about the opportunity..."
                required
                className="w-full resize-y border border-[#393939] bg-[#191919] px-5 py-4 text-base leading-8 text-white placeholder:text-[#777777] outline-none transition focus:border-[#FF4B0B]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-14 w-full items-center justify-center gap-5 bg-[#FF4B0B] px-7 font-mono text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#FF713F] sm:w-auto"
            >
              Send Inquiry <span>↗</span>
            </button>
          </form>
        </div>

        {/* Footer statement */}
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[#393939] pt-7 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
            Station Ready · Culinary Portfolio
          </p>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]">
            Driven to Learn. Ready to Work.
          </p>
        </div>
      </div>
    </section>
  );
}
