
const kitchenSkills = [
  {
    number: "01",
    title: "Food Preparation",
    description:
      "I value careful preparation and organization as the foundation of a successful cooking process. I focus on preparing ingredients, keeping my workspace organized, and developing consistent habits that help make cooking more efficient.",
    skills: [
      "Ingredient preparation",
      "Basic knife skills",
      "Workspace organization",
      "Mise en place fundamentals",
    ],
  },
  {
    number: "02",
    title: "Cooking",
    description:
      "Through years of preparing homemade meals, I've developed an interest in understanding how different ingredients, seasonings, and cooking methods work together. I enjoy learning new techniques and building confidence through hands-on practice.",
    skills: [
      "From-scratch cooking",
      "Recipe preparation",
      "Seasoning and flavor",
      "Cooking fundamentals",
    ],
  },
  {
    number: "03",
    title: "Baking & Pastry",
    description:
      "Baking and pastry are areas I particularly enjoy because they combine creativity with patience and attention to detail. I enjoy preparing desserts from scratch and continuing to develop my understanding of baking techniques, textures, and presentation.",
    skills: [
      "Pies and cobblers",
      "Cookies and brownies",
      "Cakes and muffins",
      "Baking fundamentals",
    ],
  },
  {
    number: "04",
    title: "Food Safety",
    description:
      "I understand the importance of cleanliness, responsible food handling, and maintaining a safe preparation environment. My approach emphasizes good sanitation habits, an organized workspace, and awareness of proper food-handling practices.",
    skills: [
      "California Food Handler Certificate",
      "Food-handling awareness",
      "Sanitation fundamentals",
      "Clean work habits",
    ],
  },
  {
    number: "05",
    title: "Presentation",
    description:
      "I believe presentation is an important part of the overall dining experience. I enjoy considering how color, arrangement, and attention to detail can improve the appearance of a finished dish while keeping the food itself at the center.",
    skills: [
      "Attention to detail",
      "Plating fundamentals",
      "Finishing techniques",
      "Visual presentation",
    ],
  },
  {
    number: "06",
    title: "Kitchen Mindset",
    description:
      "I approach professional development with a willingness to learn, accept constructive feedback, and build good working habits. I understand that a kitchen depends on communication, teamwork, consistency, and the ability to contribute wherever needed.",
    skills: [
      "Willingness to learn",
      "Attention to detail",
      "Dependability",
      "Teamwork and communication",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111111] px-5 py-24 text-[#F2F0ED] sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4B0B]">
            03 — Kitchen Skills
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            What I Bring to the Kitchen.
          </h2>

          <p className="mt-6 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
            My culinary interests and developing skills reflect years of
            hands-on cooking and baking at home. From ingredient preparation
            and cooking fundamentals to baking, food safety, and presentation,
            I value building a strong foundation through practice. I'm eager
            to bring that foundation into a professional kitchen, learn from
            experienced cooks, and continue improving through teamwork and
            hands-on experience.
          </p>
        </div>

        <div className="grid gap-px border border-[#333333] bg-[#333333] sm:grid-cols-2 lg:grid-cols-3">
          {kitchenSkills.map((item) => (
            <article
              key={item.number}
              className="bg-[#191919] p-7 transition-colors duration-300 hover:bg-[#202020] sm:p-8"
            >
              <p className="font-mono text-xs text-[#FF4B0B]">
                {item.number} / 06
              </p>

              <h3 className="mt-7 text-2xl font-serif text-[#F2F0ED]">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-[#B8B8B8] sm:text-base">
                {item.description}
              </p>

              <div className="mt-6 border-t border-[#383838] pt-5">
                <ul className="space-y-3">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 text-base leading-7 text-[#C5C1BD]"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#FF4B0B]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Food Safety Certificate */}
        <div className="mt-8 flex flex-col gap-3 border border-[#393939] bg-[#191919] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]">
              Food Safety Qualification
            </p>

            <h3 className="mt-2 text-lg font-medium">
              California Food Handler Certificate
            </h3>

            <p className="mt-2 text-base leading-7 text-[#B8B8B8]">
              Completed · Certificate available for verification
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 border border-[#FF4B0B]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#FF4B0B]">
            <span className="h-2 w-2 rounded-full bg-[#FF4B0B]" />
            Certified
          </span>
        </div>
      </div>
    </section>
  );
}
