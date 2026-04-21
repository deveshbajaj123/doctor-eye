import FadeIn from './FadeIn'

const services = [
  {
    icon: '💎',
    title: 'Advanced Cataract Surgery',
    description:
      'Painless, injection-free, micro-incision, and sutureless cataract surgery using the latest PHACO and FLACS techniques. Restore HD vision with premium Toric and Multifocal IOLs.',
    tags: ['PHACO', 'FLACS', 'Toric IOL'],
    color: 'blue',
  },
  {
    icon: '👁️',
    title: 'Refractive Surgery',
    description:
      'Freedom from glasses and contacts with state-of-the-art LASIK and SMILE vision correction procedures. Quick, precise, and virtually painless.',
    tags: ['LASIK', 'SMILE', 'Blade-Free'],
    color: 'sky',
  },
  {
    icon: '🩺',
    title: 'Medical Retina',
    description:
      'Advanced management of diabetic retinopathy, macular degeneration, retinal vein occlusions, and intravitreal injections for complex retinal conditions.',
    tags: ['Diabetic Retinopathy', 'Intravitreal Injections'],
    color: 'indigo',
  },
  {
    icon: '💧',
    title: 'Dry Eye Treatment',
    description:
      'Widely regarded as the best eye doctor for dry eyes in Sonipat. Comprehensive diagnosis and personalised dry eye management plans for lasting relief.',
    tags: ['Dry Eye', 'Meibomian', 'Lubrication'],
    color: 'cyan',
  },
  {
    icon: '🔬',
    title: 'Glaucoma Management',
    description:
      'Expert diagnosis and long-term management of glaucoma with advanced tonometry, OCT nerve analysis, and medical or surgical intervention when needed.',
    tags: ['Glaucoma', 'OCT', 'Tonometry'],
    color: 'teal',
  },
  {
    icon: '🧸',
    title: 'Pediatric Ophthalmology',
    description:
      'Gentle, accurate, and effective eye care specifically designed for children — from lazy eye and squint correction to spectacle prescriptions for kids.',
    tags: ['Kids Eye Care', 'Squint', 'Amblyopia'],
    color: 'purple',
  },
]

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  sky: 'bg-sky-50 text-sky-700 border-sky-100',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  teal: 'bg-teal-50 text-teal-700 border-teal-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
}

const tagColorMap = {
  blue: 'bg-blue-100 text-blue-700',
  sky: 'bg-sky-100 text-sky-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  cyan: 'bg-cyan-100 text-cyan-700',
  teal: 'bg-teal-100 text-teal-700',
  purple: 'bg-purple-100 text-purple-700',
}

export default function Services() {
  return (
    <section id="services" style={{ scrollMarginTop: '80px' }} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-4">
            Areas of Expertise
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            World-Class Eye Care,{' '}
            <span className="text-blue-700">Tailored to You</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            From routine eye exams to complex surgical procedures, Dr. Rahul Gupta offers comprehensive
            ophthalmology services for patients of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={`delay-${i * 75}`}>
              <div className={`h-full bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-all duration-200 group cursor-default border-gray-100`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${colorMap[service.color]}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColorMap[service.color]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/aryanbhatia0111/dr-rahul-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Schedule an Eye Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
