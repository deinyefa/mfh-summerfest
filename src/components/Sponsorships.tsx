"use client"

import { useFormSubmit } from "@/hooks/useFormSubmit"

export default function Sponsorships() {
    const { isSubmitted, isSubmitting, handleSubmit } = useFormSubmit('/api/submit')

    return (
        <section id="sponsorships" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start px-6 py-20 md:py-28 md:px-12">
            <div className="fade-up flex flex-col gap-10 self-start">
                <div>
                    <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-sky mb-3 flex items-center gap-3">Sponsorships</div>
                    <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">Partner with us</h2>
                    <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5">Help us make {`Ottawa's`} biggest faith-filled summer celebration unforgettable — and get your brand in front of <strong>200+ attendees</strong> across multiple days of music, games, and community.</p>
                </div>

                <div className="bg-white border border-[#555e8a]/20 p-6 md:p-10 rounded-3xl text-navy shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center text-center py-8">
                            <div className="w-16 h-16 bg-sky/20 text-sky rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h3 className="font-fraunces text-[1.6rem] text-navy mb-3">Request Sent!</h3>
                            <p className="text-[#555e8a] text-[0.95rem]">{"Thank you for your interest in partnering with us. We'll be in touch soon."}</p>
                        </div>
                    ) : (
                        <form name="sponsorship-signup" action="/sponsorship-signup.html" method="POST" onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="sponsorship-signup" />
                            <div className="font-fraunces text-[1.4rem] text-navy mb-6">Become a Sponsor</div>

                            <div className="mb-5">
                                <label htmlFor="company_name" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Company / Organization</label>
                                <input id="company_name" name="company_name" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 placeholder:text-[#555e8a]/40" type="text" placeholder="e.g. Acme Corp" />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="contact_email" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Contact Email</label>
                                <input id="contact_email" name="contact_email" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 placeholder:text-[#555e8a]/40" type="email" placeholder="contact@company.com" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="tier" className="block text-xs font-bold tracking-[0.1em] uppercase text-[#555e8a] mb-2">Sponsorship Tier</label>
                                <select id="tier" name="tier" required className="w-full bg-white border border-[#555e8a]/20 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-sky focus:bg-sky/5 appearance-none cursor-pointer">
                                    <option value="">Select a tier...</option>
                                    <option value="Gold ($500)">Gold ($500)</option>
                                    <option value="Platinum ($1,000+)">Platinum ($1,000+)</option>
                                    <option value="In-Kind">In-Kind Donation</option>
                                    <option value="Other">Custom / Other</option>
                                </select>
                            </div>

                            <button type="submit" disabled={isSubmitting} className="inline-block bg-sky font-bold text-sm tracking-[0.08em] text-navy-dark uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(9,191,246,0.3)] w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                                {isSubmitting ? "Submitting..." : "Partner With Us →"}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="fade-up w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GOLD */}
                    <div className="rounded-2xl p-8 relative bg-[#f9fafc] border-[2px] border-black/5 text-navy mt-4 md:mt-0">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-navy/50">Gold</div>
                        </div>
                        <div className="font-bold text-6xl tracking-tighter text-navy-dark mb-1 mt-4">$500</div>
                        <div className="text-sm font-medium text-navy/50 mb-8">one-time contribution</div>

                        <ul className="flex flex-col gap-5 text-[0.95rem]">
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>Logo on all event fliers</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>2 social media shoutouts</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>Mention from the stage</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/30">
                                <svg className="w-5 h-5 text-navy/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                                <span>Speaking spot</span>
                            </li>
                        </ul>
                    </div>

                    {/* PLATINUM */}
                    <div className="rounded-2xl p-8 relative bg-[#f9fafc] border-[2px] border-black/5 text-navy">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                            <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-navy/50">Platinum</div>
                        </div>
                        <div className="font-bold text-6xl tracking-tighter text-navy-dark mb-1 mt-4 flex items-start">$1,000<span className="text-3xl text-navy/80 mt-1 ml-1">+</span></div>
                        <div className="text-sm font-medium text-navy/50 mb-8">one-time contribution</div>

                        <ul className="flex flex-col gap-5 text-[0.95rem]">
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>Logo on all event fliers</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>3 social media features (incl. Reel)</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>Mention from the stage</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy/90">
                                <svg className="w-5 h-5 text-sky shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>Speaking spot at the event</span>
                            </li>
                        </ul>
                    </div>

                    {/* IN-KIND */}
                    <div className="col-span-2 rounded-2xl p-8 relative bg-navy border-[2px] border-navy text-white mt-4 md:mt-0 flex gap-3">
                        <div className="">
                            <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-magenta">In-Kind Donations</div>
                            <div className="font-bold text-3xl tracking-tighter text-white mb-5 mt-4">{`Can't`} give cash?
                                <br />Give goods.</div>

                            <p className="text-[0.95rem] leading-[1.75] text-white/50 max-w-[55ch] mt-5">We gratefully accept donations of refreshments, swag, prizes, and supplies. Every contribution helps create an amazing experience for our community — and {`we'll`} shout you out for it.</p>
                        </div>
                        <div>
                            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-white/50 mb-3">What we accept</div>
                            <ul className="text-[0.85rem] leading-[1.75] flex flex-wrap text-white/50 mt-2 mb-6 gap-2">
                                <li className="py-1 px-3 bg-white/5 text-white border border-white/10 rounded-3xl">Refreshments</li>
                                <li className="py-1 px-3 bg-white/5 text-white border border-white/10 rounded-3xl">Branded Swag</li>
                                <li className="py-1 px-3 bg-white/5 text-white border border-white/10 rounded-3xl">Prizes & Giveaways</li>
                                <li className="py-1 px-3 bg-white/5 text-white border border-white/10 rounded-3xl">Supplies</li>
                                <li className="py-1 px-3 bg-white/5 text-white border border-white/10 rounded-3xl">Services</li>
                            </ul>
                            <div className="text-[0.85rem] leading-[1.75] flex border border-white/10 bg-white/5 text-white/50 rounded-xl p-2">
                                <svg className="w-5 h-5 text-sky shrink-0 pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <span>All in-kind donors receive a social media shoutout and recognition at summerfest.</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}