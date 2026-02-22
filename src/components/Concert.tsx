export default function Concert() {
  return (
    <>
      {/*  ──────── CONCERT ────────  */}
      <section id="concert" className="bg-navy-dark relative overflow-hidden px-6 py-20 md:py-28 md:px-12">
        <div style={{ position: "relative", zIndex: "2", }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-16 items-start">
            <div className="fade-up">
              <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-magenta mb-3 flex items-center gap-3">Part Two · Concert & Festival</div>
              <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-white fade-up">A Full Day of<br />Music & Praise</h2>
              <p className="text-[1.05rem] leading-[1.75] text-white/70 max-w-[55ch] mt-5" style={{ marginTop: "0", }}>{"The second part of Summer Fest is a musical concert and vendor festival hosted by myFather's House. Expect a full day of praise and worship with a headlining act, DJs, musical ministers, and choirs from the participating churches."}</p>

              <ul className="list-none flex flex-col gap-5 mt-4" style={{ marginTop: "2rem", }}>
                <li className="flex">
                  <div className="w-2 h-2 bg-sky rounded-full mt-[7px] shrink-0 mr-2"></div>
                  <div className="text-[0.95rem] leading-[1.6] text-white/75 [&>strong]:text-white [&>strong]:font-semibold"><strong>Headliner Act</strong> — A special performance from a to-be-announced headline artist</div>
                </li>
                <li className="flex">
                  <div className="w-2 h-2 bg-sky rounded-full mt-[7px] shrink-0 mr-2"></div>
                  <div className="text-[0.95rem] leading-[1.6] text-white/75 [&>strong]:text-white [&>strong]:font-semibold"><strong>DJs & Musical Ministers</strong> — Sets throughout the day</div>
                </li>
                <li className="flex">
                  <div className="w-2 h-2 bg-sky rounded-full mt-[7px] shrink-0 mr-2"></div>
                  <div className="text-[0.95rem] leading-[1.6] text-white/75 [&>strong]:text-white [&>strong]:font-semibold"><strong>Church Choirs</strong> — Choirs from the participating soccer tournament churches will perform</div>
                </li>
                <li className="flex">
                  <div className="w-2 h-2 bg-sky rounded-full mt-[7px] shrink-0 mr-2"></div>
                  <div className="text-[0.95rem] leading-[1.6] text-white/75 [&>strong]:text-white [&>strong]:font-semibold"><strong>Vendor Market</strong> — 30+ vendors throughout the venue with food, goods, and services. Free cold water provided on-site</div>
                </li>
              </ul>
            </div>

            <div className="fade-up">
              <div className="bg-gradient-to-br from-magenta to-[#a0144f] rounded-3xl p-12 text-white relative overflow-hidden before:content-['♪'] before:absolute before:text-[10rem] before:-bottom-8 before:right-4 before:opacity-10">
                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-white mb-2 bg-white/10 px-3 py-1 rounded-full">Headliner</span>
                <div className="font-bebas-neue uppercase tracking-tightest text-[2.5rem] font-bold mb-2">To Be Announced</div>
                <div className="text-[0.8rem] opacity-70 mt-6">{"Stay tuned — we're working on something special. Follow us on Instagram for the big reveal."}</div>
              </div>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-[0.7rem] font-bold uppercase tracking-wider text-lavender mb-4">What to Expect</div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🎤 Live Performances</span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🎧 DJ Sets</span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🎵 Choir Ministrations</span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🛍 Vendor Market</span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">💧 Free Water</span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🙏 Praise & Worship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
