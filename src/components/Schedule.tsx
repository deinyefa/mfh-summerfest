export default function Schedule() {
  return (
    <>
      {/*  ──────── SCHEDULE ────────  */}
      <section id="schedule" className="bg-[#f4f5f9] px-6 py-20 md:py-28 md:px-12">
        <div style={{ maxWidth: "1124px", margin: "0 auto", }}>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4 fade-up">
            <div>
              <div className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-sky mb-3 flex items-center gap-3">Soccer Tournament</div>
              <h2 className="font-bebas-neue text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[0.02em] text-navy">Match Schedule</h2>
            </div>
            <div style={{ textAlign: "right", }}>
              <div style={{ fontSize: "0.8rem", color: "#888", fontWeight: "600", }}>All matches at</div>
              <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--navy)", }}>Carleton University, Ottawa</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 fade-up">

            {/*  GROUP STAGE ROWS  */}
            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(43,51,95,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(43,51,95,0.11)] hover:-translate-y-0.5">
              <div className="lg:min-w-[170px] p-6 lg:p-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1 shrink-0">
                <div className="text-2xl font-extrabold text-navy leading-tight group-[.sw2-dark]:text-white">May 23</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/50">Group Stage</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/75 mt-1">📍 TAAG Park</div>
              </div>
              <div className="hidden lg:block w-px bg-[#e8eaf5] shrink-0 my-5"></div>
              <div className="lg:hidden h-px bg-[#e8eaf5] shrink-0 mx-6"></div>
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center text-center">
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 1</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church A</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church B</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-[#e8eaf5] self-stretch my-4 shrink-0"></div>
                <div className="lg:hidden h-px bg-[#e8eaf5] self-stretch mx-6 shrink-0"></div>
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 2</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church C</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church D</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(43,51,95,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(43,51,95,0.11)] hover:-translate-y-0.5">
              <div className="lg:min-w-[170px] p-6 lg:p-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1 shrink-0">
                <div className="text-2xl font-extrabold text-navy leading-tight group-[.sw2-dark]:text-white">May 30</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/50">Group Stage</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/75 mt-1">📍 TAAG Park</div>
              </div>
              <div className="hidden lg:block w-px bg-[#e8eaf5] shrink-0 my-5"></div>
              <div className="lg:hidden h-px bg-[#e8eaf5] shrink-0 mx-6"></div>
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center text-center">
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 1</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church E</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church F</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-[#e8eaf5] self-stretch my-4 shrink-0"></div>
                <div className="lg:hidden h-px bg-[#e8eaf5] self-stretch mx-6 shrink-0"></div>
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 2</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church A</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(43,51,95,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(43,51,95,0.11)] hover:-translate-y-0.5">
              <div className="lg:min-w-[170px] p-6 lg:p-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1 shrink-0">
                <div className="text-2xl font-extrabold text-navy leading-tight group-[.sw2-dark]:text-white">June 6</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/50">Group Stage</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy/75 mt-1">📍 Ravens Field</div>
              </div>
              <div className="hidden lg:block w-px bg-[#e8eaf5] shrink-0 my-5"></div>
              <div className="lg:hidden h-px bg-[#e8eaf5] shrink-0 mx-6"></div>
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center text-center">
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 1</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church B</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church D</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-[#e8eaf5] self-stretch my-4 shrink-0"></div>
                <div className="lg:hidden h-px bg-[#e8eaf5] self-stretch mx-6 shrink-0"></div>
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy/50">Game 2</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-navy">Church E</span>
                    <span className="w-8 h-8 rounded-full bg-[#eaecf5] flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase text-[#6b75a8] shrink-0">vs</span>
                    <span className="text-[1.05rem] font-bold text-navy">Church A</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  SEMIFINAL  */}
            <div className="flex flex-col lg:flex-row items-stretch bg-navy-light text-white! rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(43,51,95,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(43,51,95,0.11)] hover:-translate-y-0.5">
              <div className="lg:min-w-[170px] p-6 lg:p-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1 shrink-0">
                <div className="text-2xl font-extrabold leading-tight group-[.sw2-dark]:text-white">June 13</div>
                {/* <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/50">Semifinal</div> */}
                <span className="inline-block text-[0.6rem] font-extrabold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mt-2.5 w-max bg-sky text-navy-dark">Semifinal</span>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/75 mt-1">📍 Ravens Field</div>
              </div>
              <div className="hidden lg:block w-px bg-white/12 shrink-0 my-5"></div>
              <div className="lg:hidden h-px bg-white/12 shrink-0 mx-6"></div>
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center text-center">
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/45">Game 1</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-white">Winner G1</span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase shrink-0 bg-white/10 text-white/55">vs</span>
                    <span className="text-[1.05rem] font-bold text-white">Runner-up G2</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-white/10 self-stretch my-4 shrink-0"></div>
                <div className="lg:hidden h-px bg-white/10 self-stretch mx-6 shrink-0"></div>
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/45">Game 2</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-white">Winner G2</span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase shrink-0 bg-white/10 text-white/55">vs</span>
                    <span className="text-[1.05rem] font-bold text-white">Runner-up G1</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  FINALS  */}
            <div className="flex flex-col lg:flex-row items-stretch bg-navy-dark text-white! rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(43,51,95,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(43,51,95,0.11)] hover:-translate-y-0.5">
              <div className="lg:min-w-[170px] p-6 lg:p-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1 shrink-0">
                <div className="text-2xl font-extrabold leading-tight group-[.sw2-dark]:text-white">June 20</div>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/50">Finals</div>
                <span className="inline-block text-[0.6rem] font-extrabold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mt-2.5 w-max bg-magenta text-white">Championship Day</span>
                <div className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/75 mt-1">📍 TAAG Park</div>
              </div>
              <div className="hidden lg:block w-px bg-white/12 shrink-0 my-5"></div>
              <div className="lg:hidden h-px bg-white/12 shrink-0 mx-6"></div>
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center text-center">
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/45">3rd Place</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-white">Runner-up SF1</span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[0.58rem] font-extrabold tracking-[0.05em] uppercase shrink-0 bg-white/10 text-white/55">vs</span>
                    <span className="text-[1.05rem] font-bold text-white">Runner-up SF2</span>
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-white/10 self-stretch my-4 shrink-0"></div>
                <div className="lg:hidden h-px bg-white/10 self-stretch mx-6 shrink-0"></div>
                <div className="p-6 flex flex-col gap-2 w-full">
                  <div className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/50">Final</div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-[1.05rem] font-bold text-white">Winner SF1</span>
                    <span className="w-9 h-9 rounded-full bg-[#f0c060] flex items-center justify-center text-base shrink-0">🏆</span>
                    <span className="text-[1.05rem] font-bold text-navy" style={{ color: "var(--white)", }}>Winner SF2</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*  Location bar  */}
          <div className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-[#eceef6] rounded-xl text-sm font-medium text-navy-light fade-up" style={{ maxWidth: "100%", marginTop: "1rem", }}>
            <div className="w-5 h-5 flex items-center justify-center text-[0.7rem] text-white shrink-0">📍</div>
            <span>All matches played at <strong>Carleton University</strong>, Ottawa, ON · Saturdays, 2 games per day</span>
          </div>
          <a href="#rules" className="mt-4 text-center block bg-transparent text-sky font-bold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-sky text-sky cursor-pointer transition-all hover:bg-sky hover:text-navy">Rules & Requirements ↓</a>
        </div>
      </section>
    </>
  )
}
