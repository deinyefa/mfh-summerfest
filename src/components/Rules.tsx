"use client"

import { useFormSubmit } from "@/hooks/useFormSubmit"

export default function Rules() {
  const { isSubmitted, isSubmitting, handleSubmit } = useFormSubmit('/api/submit')

  return (
    <>
      <section id="rules" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start px-6 py-20 md:py-28 md:px-20 md:mx-20">
        <div className="bg-navy-dark border border-white/10 p-6 md:p-10 rounded-3xl text-white col-span-2">
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
              <span>All team members are required to be members of the same church</span>
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

        <div className="fade-up flex flex-col gap-8 md:gap-10">
          <div className="bg-white border border-[#555e8a]/20 p-6 md:p-10 rounded-3xl text-navy shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-sky/20 text-sky rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-fraunces text-[1.6rem] text-navy mb-3">Team Registered!</h3>
                <p className="text-[#555e8a] text-[0.95rem]">{"Thank you for signing up your team. We'll be in touch soon with more details."}</p>
              </div>
            ) : (
              <form name="team-signup" action="/team-signup.html" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="team-signup" />
                <div className="font-fraunces text-[1.4rem] text-navy mb-6">Team Registration</div>

                <div className="mb-5">
                  <label htmlFor="church_name" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Church / Organization</label>
                  <input id="church_name" name="church_name" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 placeholder:text-[#555e8a]/40" type="text" placeholder="e.g. Grace Church" />
                </div>

                <div className="mb-5">
                  <label htmlFor="team_color" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Chosen Team Color</label>
                  <input id="team_color" name="team_color" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 placeholder:text-[#555e8a]/40" type="text" placeholder="e.g. Royal Blue" />
                </div>

                <div className="mb-5">
                  <label htmlFor="contact_email" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Contact Email</label>
                  <input id="contact_email" name="contact_email" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 placeholder:text-[#555e8a]/40" type="email" placeholder="contact@church.com" />
                </div>

                <div className="mb-6">
                  <label htmlFor="agree_rules" className="flex items-start gap-3 cursor-pointer">
                    <input id="agree_rules" type="checkbox" name="agree_rules" required className="mt-1" />
                    <span className="text-sm text-[#555e8a]">{"We agree to the tournament rules and understand we are responsible for our own kits and refreshments."}</span>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="inline-block bg-sky font-bold text-sm tracking-[0.08em] text-navy-dark uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(9,191,246,0.3)] w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                  {isSubmitting ? "Submitting..." : "Sign Up Team →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
