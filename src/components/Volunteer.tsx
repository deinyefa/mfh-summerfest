export default function Volunteer() {
  return (
    <>
      {/*  ──────── VOLUNTEER ────────  */}
      <section id="volunteer" className="bg-navy relative overflow-hidden px-6 py-20 md:py-28 md:px-12 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(9,191,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,191,246,0.05)_1px,transparent_1px)] before:bg-[size:50px_50px]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          <div className="fade-up [&_.section-eyebrow]:text-sky [&_.section-eyebrow::before]:bg-sky">
            <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-magenta mb-3 flex items-center gap-3">Get Involved</div>
            <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-white">Volunteer<br />With Us</h2>
            <p className="text-[1.05rem] leading-[1.75] text-white/70 max-w-[55ch] mt-5" style={{ marginTop: "1.25rem", }}>{"Summer Fest runs on the energy and dedication of amazing volunteers. Whether it's game day at the soccer tournament or the full concert day, we need passionate people to make it happen."}</p>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4 text-[0.9rem] text-white/75">
                <div className="w-9 h-9 bg-sky/15 border border-sky/30 rounded-lg flex items-center justify-center text-base shrink-0">👕</div>
                <span>Volunteer t-shirt included</span>
              </div>
              <div className="flex items-center gap-4 text-[0.9rem] text-white/75">
                <div className="w-9 h-9 bg-sky/15 border border-sky/30 rounded-lg flex items-center justify-center text-base shrink-0">🙏</div>
                <span>Be part of something meaningful for Ottawa</span>
              </div>
              <div className="flex items-center gap-4 text-[0.9rem] text-white/75">
                <div className="w-9 h-9 bg-sky/15 border border-sky/30 rounded-lg flex items-center justify-center text-base shrink-0">🏅</div>
                <span>Serve across soccer matchdays and the concert festival</span>
              </div>
              <div className="flex items-center gap-4 text-[0.9rem] text-white/75">
                <div className="w-9 h-9 bg-sky/15 border border-sky/30 rounded-lg flex items-center justify-center text-base shrink-0">🤝</div>
                <span>Connect with other churches and community members</span>
              </div>
            </div>
          </div>

          <div className="fade-up">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md">
              <div className="font-fraunces text-[1.4rem] text-white mb-6">Sign Up to Volunteer</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">First Name</label>
                  <input className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="Grace" />
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Last Name</label>
                  <input className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="Okafor" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Email Address</label>
                  <input className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="email" placeholder="grace@email.com" />
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Phone Number</label>
                  <input className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="tel" placeholder="(613) 555-0000" />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Which event(s) can you volunteer for?</label>
                <div className="flex flex-col gap-2.5 mt-2 text-white/70">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" />
                    <span>Soccer Tournament (Saturdays, May 23 – June 20)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" />
                    <span>Concert & Festival Day</span>
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Preferred Role</label>
                <select className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 [&>option]:bg-navy [&>option]:text-white">
                  <option value="" disabled selected>Select a role</option>
                  <option>Event Setup & Teardown</option>
                  <option>Guest Welcome & Registration</option>
                  <option>Crowd Management & Ushering</option>
                  <option>Medic / First Aid (if qualified)</option>
                  <option>Photography / Social Media</option>
                  <option>Vendor Market Support</option>
                  <option>General Assistance</option>
                  <option>Open to Anything</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Any skills or notes for us?</label>
                <textarea className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" rows={3} placeholder="e.g. I'm a trained first-aider, I speak French, I have my own camera..."></textarea>
              </div>

              <button className="inline-block bg-sky font-bold text-sm tracking-[0.08em] text-navy-dark uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(208,25,101,0.4)] w-full" style={{ border: "none", }}>Sign Me Up →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
