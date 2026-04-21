const publications = [
  {
    title: 'Effects of laser photocoagulation on visual functions',
    journal: 'Uttaranchal Journal of Ophthalmology, 2015',
    role: '2nd Author',
  },
  {
    title: 'IPCV – A Review',
    journal: 'Madridge Journal of Ophthalmology',
    role: '1st Author',
  },
  {
    title: 'Circumscribed Choroidal Haemangioma – A Case Report',
    journal: 'International Journal of Ocular Oncology',
    role: '2nd Author',
  },
  {
    title: 'A Rare Case of Combined CRAO and Cilioretinal Vein Occlusion',
    journal: 'British Journal of Medical and Health Research',
    role: '1st Author',
  },
  {
    title: 'Effect of Retinal Laser Photocoagulation on Contrast Sensitivity in Diabetic Retinopathy',
    journal: 'Indian Journal of Clinical and Experimental Ophthalmology',
    role: '4th Author',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ scrollMarginTop: '80px' }} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-4">
            Clinical Achievements
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            The record, <span className="text-blue-700">at a glance</span>
          </h2>
        </div>

        {/* 4 Metric Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-extrabold text-blue-700 mb-2">11+</div>
            <div className="text-sm font-semibold text-gray-700">Years Experience</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-extrabold text-blue-700 mb-2">5</div>
            <div className="text-sm font-semibold text-gray-700">Research Publications</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-extrabold text-blue-700 mb-2">6/6</div>
            <div className="text-sm font-semibold text-gray-700">Post-Op Outcomes</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-extrabold text-blue-700 mb-2">4</div>
            <div className="text-sm font-semibold text-gray-700">Professional Societies</div>
          </div>
        </div>

        {/* Research Publications */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 leading-snug mb-1">{pub.title}</p>
                    <p className="text-xs text-gray-500">{pub.journal}</p>
                  </div>
                  <span className={`flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    pub.role === '1st Author'
                      ? 'bg-blue-100 text-blue-800'
                      : pub.role === '2nd Author'
                      ? 'bg-teal-100 text-teal-800'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {pub.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
