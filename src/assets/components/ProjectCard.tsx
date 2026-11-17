
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <article className="group border border-[#333333] bg-[#151515] transition duration-300 hover:border-[#FF4B0B]/60">
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#202020]">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-70" />

        <span className="absolute left-5 top-5 border border-white/30 bg-black/60 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white">
          Culinary Portfolio
        </span>

        <span className="absolute bottom-5 right-5 font-mono text-sm tracking-widest text-white/80">
          VIEW / 001
        </span>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#FF4B0B]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF4B0B]">
            Featured Creation
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-tight text-[#F2F0ED] transition group-hover:text-[#FF4B0B] sm:text-3xl">
          {title}
        </h3>

        <p className="mt-5 text-base leading-8 text-[#B8B8B8] sm:text-lg sm:leading-9">
          {description}
        </p>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 border-t border-[#333333] pt-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#F2F0ED] transition hover:text-[#FF4B0B] sm:text-sm"
        >
          View Creation
          <span className="text-[#FF4B0B]">↗</span>
        </a>
      </div>
    </article>
  );
}
