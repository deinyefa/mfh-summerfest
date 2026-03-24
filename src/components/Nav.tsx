export default function Nav() {
  return (
    <>
      {/*  ──────── NAV ────────  */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-[#2b335f]/92 backdrop-blur-md border-b border-[#09bff6]/20">
        <div className="font-fraunces text-lg text-white tracking-[0.02em] leading-tight">
          {"myFather's "}<span>House</span><br />
          <small className="text-lavender" style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontStyle: "normal", }}>{"THERE'S ROOM FOR YOU TOO"}</small>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#about" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">About</a></li>
          <li><a href="#schedule" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">Schedule</a></li>
          <li><a href="#more-games" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">Fun Games</a></li>
          <li><a href="#concert" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">Concert</a></li>
          <li><a href="#vendors" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">Vendors</a></li>
          <li><a href="#sponsorships" className="uppercase text-white/70 text-[0.8rem] font-semibold tracking-widest hover:text-sky transition-colors">Partner with us</a></li>
          <li><a href="#volunteer" className="uppercase bg-magenta text-white px-5 py-2 rounded-full transition-colors hover:bg-[#b0154f] text-[0.8rem] font-semibold tracking-widest">Volunteer</a></li>
        </ul>
      </nav>
    </>
  )
}
