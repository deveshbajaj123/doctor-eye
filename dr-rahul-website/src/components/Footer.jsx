const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500">

      {/* Compact main strip */}
      <div className="container mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Dr. Rahul Gupta</div>
              <div className="text-blue-500 text-xs">Ophthalmologist · FIMS Hospital, Sonipat</div>
            </div>
          </div>

          {/* Nav links — horizontal */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+911302205000"
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 130 2205000
            </a>
            <a
              href="#book"
              className="text-xs font-semibold bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="container mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Dr. Rahul Gupta · FIMS Hospital, Sonipat. All rights reserved.</p>
          <p>Best Ophthalmologist in Sonipat · Haryana Eye Specialist</p>
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