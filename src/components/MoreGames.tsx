"use client"

import { useState, ChangeEvent } from "react"
import { useFormSubmit } from "@/hooks/useFormSubmit"

export default function MoreGames() {
  const { isSubmitted, isSubmitting, handleSubmit } = useFormSubmit('/api/submit')
  const [isHalfTimeSelected, setIsHalfTimeSelected] = useState(false)
  const [performanceDescription, setPerformanceDescription] = useState("")

  function handleHalfTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setIsHalfTimeSelected(e.target.checked)
    if (!e.target.checked) setPerformanceDescription("")
  }

  return (
    <>
      {/*  ──────── MORE GAMES ────────  */}
      <section id="more-games" className="bg-navy relative overflow-hidden px-6 py-20 md:py-28 md:px-12">
        <div className="absolute inset-0 bg-size-[50px_50px]" style={{ backgroundImage: "linear-gradient(rgba(9,191,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(9,191,246,0.05) 1px, transparent 1px)", }}></div>

        <div className="relative z-2 grid gap-10 lg:gap-20 items-start grid-cols-1 lg:grid-cols-[1fr_1.2fr]">

          {/*  LEFT: Info  */}
          <div className="fade-up">
            <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-sky mb-3 flex items-center gap-3">
              Activities · Between Matches
            </div>
            <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-white">More<br />Activities</h2>
            <p className="text-[1.05rem] leading-[1.75] text-white/70 max-w-[55ch] mt-5">{"In between soccer matches, we're running a series of fun track-and-field style games and half time performances. Open to all adults from participating churches. No upper age limit — just show up and participate!"}</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-sky/10 p-6 rounded-3xl solid border-1 border-sky/25">
                <div className="mb-2 text-[1.75rem]">👟</div>
                <div className="font-semibold text-white">Sack Race</div>
                <div className="text-xs text-white/55 mt-1">Classic hopping fun</div>
              </div>

              <div className="bg-sky/10 p-6 rounded-3xl solid border-1 border-sky/25">
                <div className="mb-2 text-[1.75rem]">🏃</div>
                <div className="font-semibold text-white">Relay Race</div>
                <div className="text-xs text-white/55 mt-1">Teamwork & speed</div>
              </div>

              <div className="bg-magenta/15 p-6 rounded-3xl solid border-1 border-magenta/30">
                <div className="mb-2 text-[1.75rem]">🥚</div>
                <div className="font-semibold text-white">Egg Race</div>
                <div className="text-xs text-white/55 mt-1">Balance & precision</div>
              </div>

              <div className="bg-magenta/15 p-6 rounded-3xl solid border-1 border-magenta/30">
                <div className="mb-2 text-[1.75rem]">⚡</div>
                <div className="font-semibold text-white">100m Race</div>
                <div className="text-xs text-white/55 mt-1">Pure speed</div>
              </div>

              <div className="md:col-span-2 bg-white/10 p-6 rounded-3xl solid border-1 border-white/20">
                <div className="mb-2 text-[1.75rem]">🎤</div>
                <div className="font-semibold text-white">Half Time Performance</div>
                <div className="text-xs text-white/55 mt-1">Showcase your talent</div>
              </div>

            </div>

            <div className="mt-10 flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl py-4 px-5">
              <span className="text-sm text-white/70">All genders welcome.</span>
            </div>
          </div>

          {/*  RIGHT: Signup Form  */}
          <div className="fade-up">
            {isSubmitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-sky/20 text-sky rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-fraunces text-[1.6rem] text-white mb-3">{"You're All Set!"}</h3>
                <p className="text-white/70 text-[0.95rem]">{"Thank you for registering for the games. We'll be in touch soon with more details."}</p>
              </div>
            ) : (
              <form name="fun-games-signup" action="/fun-games-signup.html" method="POST" className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="fun-games-signup" />
                <div className="font-fraunces text-[1.4rem] text-white mb-2">Sign Up for Activities</div>
                <p className="text-sm text-white/55 mb-6">{"Register your interest and tell us what you'd like to participate in. One entry per person."}</p>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-5">
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Age</label>
                    <input name="age" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="number" placeholder="e.g. 24" min="17" />
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Phone Number</label>
                    <input name="phone" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="tel" placeholder="(613) 555-0000" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Your Church</label>
                  <input name="church" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="e.g. Aflame Church" />
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Which activities would you like to participate in?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-3">
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
                    <label className="flex items-center gap-3 cursor-pointer text-white/55 uppercase tracking-widest font-bold sm:col-span-2">
                      <input type="checkbox" name="games" value="Half Time Performance" onChange={handleHalfTimeChange} />
                      <span>🎤 Half Time Performance</span>
                    </label>
                  </div>
                </div>

                {isHalfTimeSelected && (
                  <div className="mb-5">
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-lavender mb-2">Performance Description</label>
                    <textarea
                      name="performance_description"
                      required
                      value={performanceDescription}
                      onChange={(e) => setPerformanceDescription(e.target.value)}
                      rows={3}
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30 resize-y"
                      placeholder="Briefly describe what you want to perform. Based on the description, we will get back to you."
                    ></textarea>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="inline-block bg-sky text-navy-dark w-full mt-5 font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(208,25,101,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                  {isSubmitting ? "Submitting..." : "Register for Activities →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
