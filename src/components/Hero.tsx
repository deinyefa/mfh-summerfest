export default function Hero() {
  return (
    <>
      {/*  ──────── HERO ────────  */}
      <section id="hero" className="min-h-screen bg-navy-dark relative flex items-center overflow-hidden pt-28 pb-20 px-6 md:px-12 md:pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(9,191,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(9,191,246,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 animate-[float_8s_ease-in-out_infinite] w-[500px] h-[500px] bg-magenta -top-[100px] -right-[100px]"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 animate-[float_8s_ease-in-out_infinite] w-[350px] h-[350px] bg-sky -bottom-[50px] left-[20%] [animation-delay:-3s]"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 animate-[float_8s_ease-in-out_infinite] w-[200px] h-[200px] bg-lavender top-[30%] -left-[50px] [animation-delay:-5s]"></div>

        <div className="relative z-10 max-w-[900px] fade-up visible">
          <div className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-sky mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-sky">{"myFather's House presents"}</div>
          <h1 className="font-bebas-neue text-[clamp(5rem,14vw,11rem)] leading-[0.9] text-white tracking-[0.02em] mb-2">
            Summer<br /><span className="text-sky">Fest</span> <span className="text-magenta">2026</span>
          </h1>
          <p className="font-fraunces italic font-light text-[clamp(1.2rem,2.5vw,1.75rem)] text-lavender mb-10 mt-2">{"Ottawa's biggest faith-filled summer celebration"}</p>

          <div className="flex gap-10 mb-12 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-lavender">Soccer Tournament</span>
              <span className="text-[0.95rem] font-semibold text-white">May 23 – June 20, 2026</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-lavender">Concert & Festival</span>
              <span className="text-[0.95rem] font-semibold text-white">Date TBA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-lavender">Location</span>
              <span className="text-[0.95rem] font-semibold text-white">Ottawa, ON</span>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="#volunteer" className="inline-block bg-magenta text-white font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(208,25,101,0.4)]">Volunteer With Us</a>
            <a href="#schedule" className="inline-block bg-transparent text-white font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-white/30 cursor-pointer transition-all hover:border-sky hover:text-sky">See the Schedule</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 text-white/40 text-[0.7rem] tracking-[0.15em] uppercase animate-[bounce_2s_ease-in-out_infinite] after:content-[''] after:w-px after:h-10 after:bg-gradient-to-b after:from-white/40 after:to-transparent">scroll</div>
      </section>
    </>
  )
}
