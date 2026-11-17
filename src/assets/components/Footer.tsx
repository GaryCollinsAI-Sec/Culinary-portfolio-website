
export default function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#0B0B0B] px-5 py-10 text-[#F2F0ED] sm:px-6 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 sm:flex-row sm:gap-5">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <span className="font-[Impact,'Arial_Narrow',sans-serif] text-2xl font-black tracking-tight text-white transition group-hover:text-[#FF4B0B] sm:text-3xl">
            Gary Collins
          </span>

          <span className="border-l border-[#444444] pl-3 font-mono text-xs uppercase tracking-[0.2em] text-[#999999]">
            Culinary Portfolio
          </span>
        </a>

        {/* Copyright */}
        <p className="text-center font-mono text-xs leading-6 uppercase tracking-[0.12em] text-[#999999]">
          © {new Date().getFullYear()} Gary Collins.
          <span className="block sm:inline sm:ml-1">
            All rights reserved.
          </span>
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="font-mono text-xs uppercase tracking-[0.18em] text-[#B8B8B8] transition hover:text-[#FF4B0B]"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
