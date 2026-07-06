"use client"

import { useFormSubmit } from "@/hooks/useFormSubmit"

export default function Vendors() {
  const { isSubmitted, isSubmitting, handleSubmit } =
    useFormSubmit("/api/submit")

  return (
    <>
      {/*  ──────── VENDORS ────────  */}
      <section
        id="vendors"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center bg-white px-6 py-20 md:py-28 md:px-12"
      >
        <div className="fade-up">
          <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-magenta mb-3 flex items-center gap-3">
            Become a Vendor
          </div>
          <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">
            Showcase Your
            <br />
            Business
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#555e8a] max-w-[55ch] mt-5">
            {
              "Join our vendor market at the Summer Fest concert day. We're aiming for 30+ vendors this year — from food and fashion to arts, crafts, and services."
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="rounded-2xl p-7 relative overflow-hidden bg-[#f9fafc] border border-black/5 text-navy">
              <div className="absolute top-0 right-0 bg-lavender text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-bl-2xl">
                Early Bird - sold out
              </div>
              <div className="font-bebas-neue text-[3.5rem] leading-none text-navy/50 mb-1 mt-4">
                $60
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                For the first 15 vendors
              </div>
            </div>
            <div className="rounded-2xl p-7 relative overflow-hidden  bg-navy-dark text-white">
              <div className="absolute top-0 right-0  bg-sky text-navy-dark text-[0.7rem] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-bl-2xl">
                Regular
              </div>
              <div className="font-bebas-neue text-[3.5rem] leading-none text-sky mb-1 mt-4">
                $100
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Standard registration
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sky"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 className="text-lg font-bold text-navy-dark">
                {"What's Included"}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-2 bg-[#f4f5f9] text-navy/70 text-[0.85rem] font-medium px-4 py-2 rounded-full cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-navy/40"
                >
                  <path d="M4 10v9M20 10v9M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 10h16M7 19v2M17 19v2M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                </svg>
                Seating/Chairs
              </span>
              <span className="flex items-center gap-2 bg-[#f4f5f9] text-navy/70 text-[0.85rem] font-medium px-4 py-2 rounded-full cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-navy/40"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Signage Space
              </span>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-magenta"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <h3 className="text-lg font-bold text-magenta">Not Permitted</h3>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-5">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">
                Alcohol/Drugs
              </div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">
                Alcoholic beverages, cannabis, CBD/THC, vapes, tobacco
              </div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">
                Explicit
              </div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">
                Sexually explicit products, imagery, suggestive materials
              </div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">
                Weapons
              </div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">
                Firearms, knives, replicas, explosives, flammables
              </div>

              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-magenta mt-[3px]">
                Food/Health
              </div>
              <div className="text-[0.95rem] text-[#6b75a8] leading-snug">
                Homemade food with unverified claims
              </div>
            </div>
          </div>
        </div>

        <div
          id="vendor-apply"
          className="fade-up [&_.form-card]:bg-white [&_.form-card]:border-[#e8eaf5] [&_.form-title]:text-navy [&_label]:text-navy-light [&_input]:bg-[#f7f8fc] [&_input]:border-[#dde0f0] [&_input]:text-navy [&_select]:bg-[#f7f8fc] [&_select]:border-[#dde0f0] [&_select]:text-navy [&_textarea]:bg-[#f7f8fc] [&_textarea]:border-[#dde0f0] [&_textarea]:text-navy [&_input:focus]:bg-[#eef9fe] [&_textarea:focus]:bg-[#eef9fe] [&_select:focus]:bg-[#eef9fe]"
        >
          <div
            className="bg-[#f9fafc] border border-[#e8eaf5] rounded-3xl p-6 md:p-10 backdrop-blur-md"
          >
            <p className="text-center">Vendor registration is now closed</p>
          </div>
        </div>
      </section>
    </>
  )
}
