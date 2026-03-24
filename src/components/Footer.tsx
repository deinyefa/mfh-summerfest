export default function Footer() {
  return (
    <>
      {/*  ──────── FOOTER ────────  */}
      <footer className="bg-navy-dark px-6 py-12 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-sky/15 text-center md:text-left">
        <div className="font-fraunces italic text-[1.1rem] text-white/50">
          <em>{"myFather's "}<span>House</span></em>
          <div className="text-white/25 uppercase tracking-[0.12em] mt-0.5 text-[0.65rem]">{"There's Room For You Too"}</div>
        </div>
        <ul className="flex gap-6 list-none flex-wrap justify-center text-white/55 uppercase tracking-[0.05em] text-xs font-semibold">
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#concert">Concert</a></li>
          <li><a href="#vendors">Vendors</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#sponsorships">Partner with us</a></li>
        </ul>
        <div className="text-xs text-white/30 tracking-[0.05em]">{"© 2026 myFather's House · Summer Fest · Ottawa, ON"}</div>
      </footer>
    </>
  )
}
