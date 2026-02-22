export default function EventsSplit() {
  return (
    <>
      {/*  ──────── EVENTS SPLIT ────────  */}
      <section id="events" className="grid grid-cols-1 md:grid-cols-2 p-0">
        <div className="relative overflow-hidden bg-navy py-20 px-6 md:py-28 md:px-16">
          <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2 text-sky">⚽ Part One</div>
          <h2 className="font-bebas-neue text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-none mb-4">Sports<br />Days</h2>
          <p className="text-[0.95rem] leading-[1.7] text-white/70 mb-8">Six churches. Five Saturdays. One trophy. Churches field their own teams and battle it out on the pitch — plus fun sports games between matches for everyone to sign up and join.</p>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "-0.25rem", }}>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🗓 May 23 – June 20</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">📍 Carleton University</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">⚽ Soccer: Ages 19–39</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🏃 Fun Games: Ages 17+</span>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap", }}>
            <a href="#schedule" className="inline-block bg-transparent text-white font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-white/30 cursor-pointer transition-all hover:border-sky hover:text-sky">View Schedule ↓</a>
            <a href="#more-games" className="inline-block bg-transparent text-sky font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-sky text-sky cursor-pointer transition-all hover:bg-sky hover:text-navy">Fun Games ↓</a>
          </div>
          <div className="font-bebas-neue text-[10rem] absolute -bottom-8 right-8 opacity-[0.08] text-white leading-none">01</div>
        </div>

        <div className="relative overflow-hidden bg-magenta py-20 px-6 md:py-28 md:px-16">
          <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2 text-sky" style={{ color: "rgba(255,255,255,0.6)", }}>🎵 Part Two</div>
          <h2 className="font-bebas-neue text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-none mb-4">Concert &<br />Festival</h2>
          <p className="text-[0.95rem] leading-[1.7] text-white/70 mb-8">A full day of praise and worship music — headliner act, DJs, musical ministers, choirs — alongside a vibrant vendor market with 30+ local businesses and creators.</p>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "-0.25rem", }}>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🎤 Headliner TBA</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🛍 30+ Vendors</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">🙌 Free Entry</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full m-1 whitespace-nowrap">📍 Venue TBA</span>
          </div>
          <div style={{ marginTop: "2rem", }}>
            <a href="#concert" className="inline-block bg-transparent text-white font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-white/30 cursor-pointer transition-all hover:border-sky hover:text-sky" style={{ borderColor: "rgba(255,255,255,0.4)", }}>Learn More ↓</a>
          </div>
          <div className="font-bebas-neue text-[10rem] absolute -bottom-8 right-8 opacity-[0.08] text-white leading-none">02</div>
        </div>
      </section>
    </>
  )
}
