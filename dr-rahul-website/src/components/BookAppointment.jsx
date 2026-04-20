const contactNumbers = [
  '+91 130 2205000',
  '+91 7082012006',
  '+91 7082012007',
  '+91 7082012008',
]

export default function BookAppointment() {
  return (
    <section id="book" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">

            {/* Left: CTA content */}
            <div className="flex-1 p-10 lg:p-14 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-800/40 px-4 py-2 rounded-full">
                Book Your Appointment
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                Your Best Vision is{' '}
                <span className="text-sky-300">One Decision Away.</span>
              </h2>

              <p className="text-blue-200 text-lg leading-relaxed">
                Don't delay your eye care. Consult with Dr. Rahul Gupta at FIMS Hospital, Sonipat —
                for expert eye care, advanced surgical techniques, and compassionate service.
              </p>

              {/* Phone numbers */}
              <div className="space-y-3 pt-2">
                <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide">Call Now</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactNumbers.map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\s|-/g, '')}`}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl transition-colors"
                    >
                      <svg className="w-4 h-4 text-sky-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">{num}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="tel:+911302205000"
                className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment Now
              </a>
              <p className="text-blue-300 text-sm">No prior referral needed · All ages welcome</p>
            </div>

            {/* Right: Address card */}
            <div className="lg:w-80 xl:w-96 bg-white/10 backdrop-blur-sm p-10 lg:p-14 flex flex-col justify-center space-y-8">

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-400/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wide mb-1">Address</p>
                    <p className="text-white font-semibold text-sm leading-relaxed">
                      FIMS Hospital,<br />
                      Bahalgarh Road, Sonipat,<br />
                      Haryana, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder or Google Maps embed hint */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/20">
                <p className="text-sky-200 text-xs font-bold uppercase tracking-wide mb-3">Why Choose FIMS?</p>
                <ul className="space-y-2">
                  {[
                    'Advanced diagnostic equipment',
                    'Multispeciality support',
                    'Hygienic, modern OT',
                    'Experienced nursing staff',
                    'Same-day procedures available',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100 text-xs">
                      <svg className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
