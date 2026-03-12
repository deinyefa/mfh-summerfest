export default function Rules() {
  return (
    <>
      <section id="rules" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start px-6 py-20 md:py-28 md:px-20 md:mx-20">
        <div className="fade-up">
          <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-sky mb-3 flex items-center gap-3">Tournament</div>
          <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">Rules &<br />Requirements</h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5">The tournament is open to anyone who wants to compete, as long as your team meets these requirements.</p>

          <ul className="list-none flex flex-col gap-4 mt-8">
            <li className="flex">
              <span className="w-6 h-6 min-w-6 bg-sky/30 text-sky rounded-full flex items-center justify-center text-xs font-bold mt-px mr-2">✓</span>
              <span>Each church decides who plays on their soccer team</span>
            </li>
            <li className="flex">
              <span className="w-6 h-6 min-w-6 bg-sky/30 text-sky rounded-full flex items-center justify-center text-xs font-bold mt-px mr-2">✓</span>
              <span>Soccer player age range: <strong>19 – 39 years old</strong></span>
            </li>
            <li className="flex">
              <span className="w-6 h-6 min-w-6 bg-sky/30 text-sky rounded-full flex items-center justify-center text-xs font-bold mt-px mr-2">✓</span>
              <span>Each team is responsible for their own <strong>kits and refreshments</strong></span>
            </li>
            <li className="flex">
              <span className="w-6 h-6 min-w-6 bg-sky/30 text-sky rounded-full flex items-center justify-center text-xs font-bold mt-px mr-2">✓</span>
              <span>Fun sports games between matches are open to <strong>all adults 17+</strong> — no upper age limit</span>
            </li>
            <li className="flex">
              <span className="w-6 h-6 min-w-6 bg-sky/30 text-sky rounded-full flex items-center justify-center text-xs font-bold mt-px mr-2">✓</span>
              <span>Format: <strong>Two groups of three → Knockout rounds</strong></span>
            </li>
          </ul>
        </div>

        <div className="fade-up">
          <div className="bg-navy-dark border border-white/10 p-6 md:p-10 rounded-3xl text-white">
            <div className="text-sky uppercase text-[0.7rem] font-bold tracking-[0.2em] mb-4">Tournament Format</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/8 rounded-xl p-8 text-center">
                <div className="text-sky font-bebas-neue text-5xl pb-1">2</div>
                <div className="text-xs font-bold tracking-[0.1em] uppercase opacity-60">Groups</div>
              </div>
              <div className="bg-white/8 rounded-xl p-8 text-center">
                <div className="text-sky font-bebas-neue text-5xl pb-1">6</div>
                <div className="text-xs font-bold tracking-[0.1em] uppercase opacity-60">Teams</div>
              </div>
              <div className="bg-white/8 rounded-xl p-8 text-center">
                <div className="text-magenta font-bebas-neue text-5xl pb-1">5</div>
                <div className="text-xs font-bold tracking-[0.1em] uppercase opacity-60">Match Days</div>
              </div>
              <div className="bg-white/8 rounded-xl p-8 text-center">
                <div className="text-sky font-bebas-neue text-5xl pb-1">🏆</div>
                <div className="text-xs font-bold tracking-[0.1em] uppercase opacity-60">Grand Final</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
