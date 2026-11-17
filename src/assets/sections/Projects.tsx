
const creations = [
  {
    number: "01",
    title: "Homemade Cherry Pie",
    category: "PIES & PASTRY",
    description:
      "Prepared this homemade cherry pie entirely from scratch, including the crust and fruit filling. The process involved preparing the dough, developing the filling, and bringing everything together through traditional baking techniques. I focused on achieving a balanced filling and a golden, flaky crust for a classic homemade dessert.",
    imageUrl: "/images/Cherrypie.jpg",
  },
  {
    number: "02",
    title: "Chocolate Chip Cookies",
    category: "HOMEMADE DESSERTS",
    description:
      "Baked homemade chocolate chip cookies from scratch, focusing on ingredient preparation, dough consistency, and even baking. This creation reflects my interest in traditional desserts and the small details that contribute to a satisfying finished product, from texture and flavor to the final appearance.",
    imageUrl: "/images/cookies.jpg",
  },
  {
    number: "03",
    title: "Vanilla Cake with Strawberries",
    category: "BAKING",
    description:
      "Prepared a vanilla cake from scratch and finished it with white frosting and fresh strawberries. The process involved preparing the cake, working with the frosting, and arranging the finishing touches to create a clean and inviting presentation. This project combines baking fundamentals with an appreciation for dessert decoration.",
    imageUrl: "/images/cake.jpg",
  },
  {
    number: "04",
    title: "Chicken Parmesan",
    category: "HOME COOKING",
    description:
      "Prepared chicken parmesan from scratch and served it with spaghetti, sauce, and Italian seasoning. This savory dish brought together ingredient preparation, cooking technique, and coordination of multiple components. I focused on creating a complete meal with complementary flavors and a thoughtful presentation.",
    imageUrl: "/images/chickenparm.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111111] px-5 py-24 text-[#F2F0ED] sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4B0B]">
              02 — Culinary Portfolio
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              Selected Creations<span className="text-[#FF4B0B]">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
              A collection of homemade dishes and desserts that reflect my
              continued interest in cooking, baking, and pastry. Each
              creation represents an opportunity to practice culinary
              fundamentals, explore ingredients, develop technique, and
              improve the presentation of finished dishes.
            </p>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888]">
            Cooking · Baking · Pastry
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {creations.map((creation) => (
            <article key={creation.number} className="group">
              <div className="relative aspect-16/10 overflow-hidden border border-[#333333] bg-[#191919]">
                <img
                  src={creation.imageUrl}
                  alt={creation.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-70" />

                <span className="absolute left-5 top-5 border border-white/30 bg-black/70 px-3 py-2 font-mono text-xs tracking-widest text-white">
                  {creation.number} / 04
                </span>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#FF4B0B]">
                  {creation.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F2F0ED] sm:text-3xl">
                  {creation.title}
                </h3>

                <p className="mt-4 max-w-lg text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
                  {creation.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
