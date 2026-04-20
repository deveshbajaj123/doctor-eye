const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#book' },
]

const services = [
  'Cataract Surgery (PHACO / FLACS)',
  'LASIK & SMILE Vision Correction',
  'Medical Retina & Diabetic Retinopathy',
  'Glaucoma Diagnosis & Treatment',
  'Dry Eye Management',
  'Pediatric Ophthalmology',
  'Corneal Surgery & Pterygium',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main footer content */}
      <div className="container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base">Dr. Rahul Gupta</div>
                <div className="text-blue-400 text-xs">Ophthalmologist · FIMS Hospital</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Best Ophthalmologist in Sonipat, Haryana. Internationally certified with FICO & MRCS
              (UK), offering advanced, compassionate eye care for all ages.
            </p>
            {/* Credentials */}
            <div className="flex flex-wrap gap-2">
              {['FICO (UK)', 'MRCS Edinburgh', 'MS Ophthalmology', 'AIOS Member'].map((c, i) => (
                <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm leading-relaxed">
                  FIMS Hospital, Bahalgarh Road,<br />
                  Sonipat, Haryana, India
                </p>
              </div>
              <div className="space-y-2">
                {[
                  '+91 130 2205000',
                  '+91 7082012006',
                  '+91 7082012007',
                  '+91 7082012008',
                ].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Dr. Rahul Gupta · FIMS Hospital, Sonipat. All rights reserved.</p>
          <p className="text-gray-600">Best Ophthalmologist in Sonipat · Haryana Eye Specialist</p>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 shadow-lg">
        <a
          href="#book"
          className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-bold py-3.5 rounded-xl text-base"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Appointment
        </a>
      </div>
    </footer>
  )
}
