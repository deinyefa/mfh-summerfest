export default function About() {
  return (
    <>
      {/*  ──────── ABOUT ────────  */}
      <section id="about" className="grid md:grid-cols-2 gap-12 md:gap-20 items-center bg-[#f7f8fc] px-6 py-20 md:py-28 md:px-12">
        <div className="fade-up">
          <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-magenta mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-magenta">What is Summer Fest</div>
          <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">Two Parts.<br />One Community.</h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5">{"Summer Fest is myFather's House's signature summer event — a celebration of faith, community, sport, and music. Across two parts, we bring together churches from across Ottawa for a soccer tournament and fun sports games, followed by an unforgettable concert and vendor market."}</p>
          <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5" style={{ marginTop: "1rem", }}>{"All are welcome. Whether you're an athlete, a music lover, a local vendor, or just looking for something to do this summer — there's room for you here."}</p>
        </div>

        <div className="relative h-[400px] fade-up">
          <div className="absolute top-0 left-0 w-[65%] bg-navy text-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(43,51,95,0.12)]">
            <div className="font-bebas-neue text-5xl leading-none">6</div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase opacity-80 mt-1">Churches Competing</div>
          </div>
          <div className="absolute bottom-0 right-0 w-[65%] bg-sky text-navy-dark rounded-3xl p-8 shadow-[0_20px_60px_rgba(43,51,95,0.12)]">
            <div className="font-bebas-neue text-5xl leading-none">30+</div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase opacity-80 mt-1">Vendors at the Market</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] bg-magenta text-white text-center rounded-3xl p-6 shadow-[0_20px_60px_rgba(43,51,95,0.12)]">
            <div className="font-bebas-neue text-5xl leading-none">2</div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase opacity-80 mt-1">Parts to the Event</div>
          </div>
        </div>
      </section>
    </>
  )
}
