"use client"

import { useFormSubmit } from "@/hooks/useFormSubmit"

export default function Vendors() {
  const { isSubmitted, isSubmitting, handleSubmit } = useFormSubmit('/api/submit')

  return (
    <>
      {/*  ──────── VENDORS ────────  */}
      <section id="vendors" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start bg-white px-6 py-20 md:py-28 md:px-12">
        <div className="fade-up">
          <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-magenta mb-3 flex items-center gap-3">Become a Vendor</div>
          <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">Showcase Your<br />Business</h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5">{"Join our vendor market at the Summer Fest concert day. We're aiming for 30+ vendors this year — from food and fashion to arts, crafts, and services."}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="rounded-2xl p-7 relative overflow-hidden bg-navy-dark text-white">
              <div className="absolute top-0 right-0 bg-sky text-navy-dark text-[0.7rem] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-bl-[1rem]">Early Bird</div>
              <div className="font-bebas-neue text-[3.5rem] leading-none text-sky mb-1 mt-4">$60</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/70">For the first 15 vendors</div>
            </div>
            <div className="rounded-2xl p-7 relative overflow-hidden bg-[#f9fafc] border border-black/5 text-navy">
              <div className="absolute top-0 right-0 bg-lavender text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-bl-[1rem]">Regular</div>
              <div className="font-bebas-neue text-[3.5rem] leading-none text-navy-dark mb-1 mt-4">$100</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">Standard registration</div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <h3 className="text-lg font-bold text-navy-dark">{"What's Included"}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-2 bg-[#f4f5f9] text-navy/70 text-[0.85rem] font-medium px-4 py-2 rounded-full cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy/40"><path d="M4 10v9M20 10v9M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 10h16M7 19v2M17 19v2M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" /></svg>
                Seating/Chairs
              </span>
              <span className="flex items-center gap-2 bg-[#f4f5f9] text-navy/70 text-[0.85rem] font-medium px-4 py-2 rounded-full cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy/40"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
                Free Cold Water
              </span>
              <span className="flex items-center gap-2 bg-[#f4f5f9] text-navy/70 text-[0.85rem] font-medium px-4 py-2 rounded-full cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy/40"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Signage Space
              </span>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-magenta"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <h3 className="text-lg font-bold text-magenta">Not Permitted</h3>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-5">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">Alcohol/Drugs</div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">Alcoholic beverages, cannabis, CBD/THC, vapes, tobacco</div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">Explicit</div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">Sexually explicit products, imagery, suggestive materials</div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">Weapons</div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">Firearms, knives, replicas, explosives, flammables</div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">Food/Health</div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">Homemade food without permits, unverified claims</div>
            </div>
          </div>
        </div>

        <div id="vendor-apply" className="fade-up [&_.form-card]:bg-white [&_.form-card]:border-[#e8eaf5] [&_.form-title]:text-navy [&_label]:text-navy-light [&_input]:bg-[#f7f8fc] [&_input]:border-[#dde0f0] [&_input]:text-navy [&_select]:bg-[#f7f8fc] [&_select]:border-[#dde0f0] [&_select]:text-navy [&_textarea]:bg-[#f7f8fc] [&_textarea]:border-[#dde0f0] [&_textarea]:text-navy [&_input:focus]:bg-[#eef9fe] [&_textarea:focus]:bg-[#eef9fe] [&_select:focus]:bg-[#eef9fe]">
          {isSubmitted ? (
            <div className="bg-white/15 border border-[#e8eaf5] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-16 h-16 bg-magenta/10 text-magenta rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="font-fraunces text-[1.6rem] text-navy mb-3">Application Received!</h3>
              <p className="text-[#6b75a8] text-[0.95rem]">Thank you for applying to be a vendor. We will review your application and get back to you shortly.</p>
            </div>
          ) : (
            <form name="vendor-application" action="/vendor-application.html" method="POST" className="bg-white/15 border border-[#e8eaf5] rounded-3xl p-6 md:p-10 backdrop-blur-md" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="vendor-application" />
              <div className="font-fraunces text-[1.4rem] mb-6 text-navy">Vendor Application</div>

              <div className="mb-5">
                <label htmlFor="business_name" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Business / Vendor Name</label>
                <input id="business_name" name="business_name" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="e.g. Auntie Grace's Kitchen" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label htmlFor="contact_name" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Contact Name</label>
                  <input id="contact_name" name="contact_name" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="text" placeholder="Full name" />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Phone Number</label>
                  <input id="phone" name="phone" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="tel" placeholder="(613) 555-0000" />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Email Address</label>
                <input id="email" name="email" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" type="email" placeholder="you@example.com" />
              </div>

              <div className="mb-5">
                <label htmlFor="product_type" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Type of Products / Services</label>
                <select id="product_type" name="product_type" required defaultValue="" className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 [&>option]:bg-navy [&>option]:text-white">
                  <option value="" disabled>Select a category</option>
                  <option value="Food & Beverages">Food & Beverages</option>
                  <option value="Fashion & Clothing">Fashion & Clothing</option>
                  <option value="Art & Crafts">Art & Crafts</option>
                  <option value="Beauty & Wellness">Beauty & Wellness</option>
                  <option value="Books & Media">Books & Media</option>
                  <option value="Jewelry & Accessories">Jewelry & Accessories</option>
                  <option value="Children's Products">{"Children's Products"}</option>
                  <option value="Home & Decor">Home & Decor</option>
                  <option value="Other / Mixed">Other / Mixed</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="description" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Brief Description of Offerings</label>
                <textarea id="description" name="description" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 placeholder:text-white/30" rows={3} placeholder="Tell us a bit about what you'll be selling..."></textarea>
              </div>

              <div className="mb-5">
                <label htmlFor="tier" className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">Registration Tier</label>
                <select id="tier" name="tier" required className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm font-sans text-white outline-none transition-colors focus:border-sky focus:bg-sky/10 [&>option]:bg-navy [&>option]:text-white">
                  <option value="Early Bird — $60">Early Bird — $60</option>
                  <option value="Regular — $100">Regular — $100</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="text-navy-light/55 mb-2 uppercase text-sm font-semibold tracking-wider">I confirm that my products comply with Summer Fest guidelines</label>
                <div className="flex flex-col gap-2.5 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="guidelines_agreement" required className="w-[18px] h-[18px] accent-sky shrink-0" />
                    <span className="text-navy-light text-sm">I have read and agree to the vendor guidelines and prohibited items list</span>
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="inline-block bg-magenta text-white font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 w-full mt-2 rounded-full border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(208,25,101,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
