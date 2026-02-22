export default function MoreGames() {
  return (
    <>
      {/*  ──────── MORE GAMES ────────  */}
      <section id="more-games" className="bg-navy relative overflow-hidden px-6 py-20 md:py-28 md:px-12">
        <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(9,191,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(9,191,246,0.05) 1px, transparent 1px)", backgroundSize: "50px 50px", }}></div>

        <div style={{ position: "relative", zIndex: "2", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "start", }}>

          {/*  LEFT: Info  */}
          <div className="fade-up">
            <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-sky mb-3 flex items-center gap-3">
              Sports Days · Between Matches
            </div>
            <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-white">More Sports<br />Games</h2>
            <p className="text-[1.05rem] leading-[1.75] text-white/70 max-w-[55ch] mt-5" style={{ marginTop: "1.25rem", }}>{"In between soccer matches, we're running a series of fun track-and-field style games open to all adults from participating churches. No upper age limit — just show up and compete!"}</p>

            <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", }}>

              <div style={{ background: "rgba(9,191,246,0.1)", border: "1px solid rgba(9,191,246,0.25)", borderRadius: "1.25rem", padding: "1.5rem", }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem", }}>👟</div>
                <div className="font-semibold text-white">Sack Race</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", }}>Classic hopping fun</div>
              </div>

              <div style={{ background: "rgba(9,191,246,0.1)", border: "1px solid rgba(9,191,246,0.25)", borderRadius: "1.25rem", padding: "1.5rem", }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem", }}>🏃</div>
                <div className="font-semibold text-white">Relay Race</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", }}>Teamwork & speed</div>
              </div>

              <div style={{ background: "rgba(208,25,101,0.15)", border: "1px solid rgba(208,25,101,0.3)", borderRadius: "1.25rem", padding: "1.5rem", }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem", }}>🥚</div>
                <div className="font-semibold text-white">Egg Race</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", }}>Balance & precision</div>
              </div>

              <div style={{ background: "rgba(208,25,101,0.15)", border: "1px solid rgba(208,25,101,0.3)", borderRadius: "1.25rem", padding: "1.5rem", }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem", }}>⚡</div>
                <div className="font-semibold text-white">100m Race</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", }}>Pure speed</div>
              </div>

            </div>

            <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "1rem 1.25rem", }}>
              <div style={{ width: "8px", height: "8px", background: "var(--sky)", borderRadius: "50%", flexShrink: "0", }}></div>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", }}>Open to all adults <strong style={{ color: "var(--white)", }}>17 and over</strong> — no upper age limit. All genders welcome.</span>
            </div>
          </div>

          {/*  RIGHT: Signup Form  */}
          <div className="fade-up">
            <form name="fun-games-signup" method="POST" data-netlify="true" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md">
              <input type="hidden" name="form-name" value="fun-games-signup" />
              <div className="font-fraunces text-[1.4rem] text-white mb-6">Sign Up for Fun Games</div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem", marginTop: "-0.5rem", }}>{"Register your interest and tell us which games you'd like to compete in. One entry per person."}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">First Name</label>
                  <input name="first_name" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="Grace" />
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Last Name</label>
                  <input name="last_name" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="Okafor" />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Email Address</label>
                <input name="email" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="email" placeholder="grace@email.com" />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Phone Number</label>
                <input name="phone" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="tel" placeholder="(613) 555-0000" />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Age</label>
                <input name="age" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="number" placeholder="e.g. 24" min="17" />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Your Church</label>
                <input name="church" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="e.g. Aflame Church" />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Which games would you like to compete in?</label>
                <div className="flex flex-col gap-2.5 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer text-white/55 uppercase tracking-widest font-bold">
                    <input type="checkbox" name="games" value="Sack Race" />
                    <span>👟 Sack Race</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-white/55 uppercase tracking-widest font-bold">
                    <input type="checkbox" name="games" value="Relay Race" />
                    <span>🏃 Relay Race</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-white/55 uppercase tracking-widest font-bold">
                    <input type="checkbox" name="games" value="Egg Race" />
                    <span>🥚 Egg Race</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-white/55 uppercase tracking-widest font-bold">
                    <input type="checkbox" name="games" value="100m Race" />
                    <span>⚡ 100m Race</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="inline-block bg-sky text-navy-dark w-full mt-5 font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(208,25,101,0.4)]">Register for Games →</button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}
