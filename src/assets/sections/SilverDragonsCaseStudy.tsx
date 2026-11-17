
const details = [
  {
    number: "01",
    title: "Preparation",
    description:
      "I believe good cooking begins with proper preparation. Taking time to organize ingredients, prepare the workspace, and understand each step helps create a more focused and consistent cooking process. Developing these habits also builds a stronger foundation for working efficiently in a kitchen.",
  },
  {
    number: "02",
    title: "Ingredients",
    description:
      "Understanding ingredients is an important part of creating a successful dish. I appreciate how ingredient quality, accurate measurements, freshness, and proper handling can influence flavor, texture, and the overall result. I enjoy learning how different components work together.",
  },
  {
    number: "03",
    title: "Technique",
    description:
      "Cooking is a skill that develops through repetition, patience, and hands-on experience. From basic knife work to understanding different cooking methods, I value building strong fundamentals and learning how to apply techniques with greater confidence and consistency.",
  },
  {
    number: "04",
    title: "Presentation",
    description:
      "The finished dish is an opportunity to bring all the individual elements together. I enjoy paying attention to color, texture, arrangement, and the overall appearance of food. Thoughtful presentation adds to the experience and reflects the care put into preparing a meal.",
  },
];

export default function CulinaryApproach() {
  return (
    <section
      id="featured-creation"
      className="bg-[#151515] px-5 py-24 text-[#F2F0ED] sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-5 border-b border-[#393939] pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4B0B]">
              03 — My Approach
            </p>

            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
              Behind the Preparation
              <span className="text-[#FF4B0B]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
            Good food starts long before it reaches the plate. Thoughtful
            preparation, an understanding of ingredients, patience, and
            attention to detail all contribute to creating a finished dish
            worth sharing.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-4/3 overflow-hidden border border-[#333333] bg-[#202020] lg:aspect-auto lg:min-h-120">
            <img
              src="/images/active-cooking.jpeg"
              alt="Active cooking and food preparation"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

            <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.2em] text-white">
              FIG. 03 — THE PROCESS
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs tracking-[0.2em] text-[#FF4B0B]">
              COOKING WITH PURPOSE
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
              Take pride in the process.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
              <p>
                One of the things I appreciate most about cooking and baking
                is the process of transforming individual ingredients into
                something worth sharing. I enjoy working from scratch,
                exploring different methods, and taking the time to
                understand how each step contributes to the finished dish.
                Whether I'm preparing a homemade meal or baking a dessert,
                I find satisfaction in the work that happens along the way.
              </p>

              <p>
                My approach continues to develop through practice,
                experimentation, and a willingness to learn. I recognize
                that strong culinary skills require patience, consistency,
                and attention to detail. Each dish presents another
                opportunity to improve my preparation, strengthen my
                technique, and become more confident in the kitchen.
              </p>

              <p>
                As I pursue my first professional kitchen opportunity,
                I look forward to learning established kitchen practices,
                understanding the rhythm of professional service, and
                developing alongside experienced culinary professionals.
                My goal is to bring a positive attitude, a willingness
                to contribute, and a commitment to improving every day.
              </p>
            </div>

            <div className="mt-10 border-t border-[#393939]">
              {details.map((detail) => (
                <div
                  key={detail.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#393939] py-6"
                >
                  <span className="font-mono text-sm text-[#FF4B0B]">
                    {detail.number}
                  </span>

                  <div>
                    <h4 className="text-base font-semibold uppercase tracking-wider text-[#F2F0ED]">
                      {detail.title}
                    </h4>

                    <p className="mt-3 text-base leading-8 text-[#B8B8B8]">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
