import { useEffect, useRef, useState } from 'react'
import drPhoto from '../assets/dr-rahul-gupta.png'
import useInView from '../hooks/useInView'

function CountUp({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useInView()

  useEffect(() => {
    if (!isVisible) return
    const isNumeric = !isNaN(parseInt(target))
    if (!isNumeric) { setCount(target); return }

    const end = parseInt(target)
    let start = 0
    const step = Math.ceil(end / (duration / 30))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  const isNumeric = !isNaN(parseInt(target))
  return (
    <span ref={ref}>
      {isNumeric ? count : target}{isNumeric && parseInt(target) > 0 ? suffix : ''}
    </span>
  )
}

const badges = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Internationally Certified',
    sublabel: 'FICO (UK) · MRCS Edinburgh',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: '11+ Years Experience',
    sublabel: 'Precision Eye Surgery',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'FIMS Hospital, Sonipat',
    sublabel: 'Multispeciality Advanced Care',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100 rounded-full opacity-50 translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-2 rounded-full">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              FIMS Hospital · Bahalgarh Road, Sonipat
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                Meet{' '}
                <span className="text-blue-700">Dr. Rahul Gupta</span>
              </h1>
              <p className="mt-2 text-xl lg:text-2xl font-semibold text-gray-600">
                Best Ophthalmologist at FIMS Hospital, Sonipat
              </p>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A highly acclaimed eye specialist known for his precision, compassion, and commitment to advanced eye care.
              Dr. Rahul offers comprehensive treatment for patients of all ages — from routine eye exams to complex cataract,
              retina, and refractive surgeries.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              {badges.map((b, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-1 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                  <div className="text-blue-700">{b.icon}</div>
                  <div className="text-xs font-bold text-gray-800">{b.label}</div>
                  <div className="text-xs text-gray-500">{b.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              <a
                href="tel:+911302205000"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 130 2205000
              </a>
            </div>
          </div>

          {/* Right: Doctor Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-sky-300 rotate-3 scale-105 opacity-20" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 -rotate-2 scale-102 opacity-10" />
              <img
                src={drPhoto}
                alt="Dr. Rahul Gupta – Ophthalmologist, FIMS Hospital Sonipat"
                className="relative w-72 lg:w-80 xl:w-96 rounded-3xl shadow-2xl object-cover border-4 border-white"
              />
              {/* Floating credential card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">FICO · MRCS (UK)</div>
                  <div className="text-xs text-gray-500">Internationally Certified</div>
                </div>
              </div>
              {/* Floating publication card */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">5 Publications</div>
                  <div className="text-xs text-gray-500">Indexed Journals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '11', suffix: '+', label: 'Years Experience' },
            { value: 'FICO', suffix: '', label: 'UK Certified Fellow' },
            { value: '5', suffix: '', label: 'Research Publications' },
            { value: '4', suffix: '+', label: 'Professional Societies' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-2xl lg:text-3xl font-extrabold text-blue-700">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs lg:text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
