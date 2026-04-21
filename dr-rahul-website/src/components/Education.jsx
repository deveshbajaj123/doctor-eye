const education = [
  {
    degree: 'MBBS',
    institution: 'Maulana Azad Medical College (MAMC), Delhi',
    type: 'Undergraduate',
    icon: '🎓',
  },
  {
    degree: 'MS (Ophthalmology)',
    institution: 'Institute of Ophthalmology, JLN Medical College, Aligarh Muslim University',
    type: 'Postgraduate',
    icon: '🔬',
  },
  {
    degree: 'FICO',
    institution: 'Fellow, International Council of Ophthalmology, UK',
    type: 'International Fellowship',
    icon: '🌍',
  },
  {
    degree: 'MRCS (Ophthalmology)',
    institution: 'Royal College of Surgeons of Edinburgh, UK',
    type: 'International Certification',
    icon: '🏅',
  },
]

const memberships = [
  { short: 'AIOS', full: 'All India Ophthalmology Society' },
  { short: 'DOS', full: 'Delhi Ophthalmology Society' },
  { short: 'ESCRS', full: 'European Society of Cataract and Refractive Surgeons' },
  { short: 'HOS', full: 'Haryana Ophthalmology Society' },
]

export default function Education() {
  return (
    <section id="education" style={{ scrollMarginTop: '80px' }} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-4">
            Credentials & Background
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Education, Research &{' '}
            <span className="text-blue-700">Memberships</span>
          </h2>
        </div>

        {/* 4 Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm">
                {edu.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-lg">{edu.degree}</h3>
                  <span className="text-[10px] uppercase tracking-wide bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                    {edu.type}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Society Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {memberships.map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-extrabold text-blue-700 mb-1">{m.short}</div>
              <div className="text-xs text-gray-500 leading-snug">{m.full}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
