import achievement1 from '../assets/achievement-1.jpg'
import preOpImg from '../assets/preop-achievement-2.jpg'
import postOpImg from '../assets/post-op-achievement-2.jpg'

export default function AchievementsCases() {
  return (
    <section id="achievements-cases" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-white shadow-sm px-4 py-2 rounded-full mb-4">
            Clinical Achievements
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Complex Cases.{' '}
            <span className="text-blue-700">Perfected Results.</span>
          </h2>
        </div>

        <div className="space-y-20">
          {/* Case 1: Toric IOL */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={achievement1}
                  alt="Toric IOL Cataract Surgery Achievement – Dr. Rahul Gupta"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-5">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                Cataract & Astigmatism
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Overcoming Severe Astigmatism with Toric IOL
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Patient presented with advanced cataracts combined with a highly complex cylindrical (astigmatism) error.
                Using a precisely customised Toric IOL, Dr. Gupta successfully neutralised the cylindrical error and
                restored crystal-clear vision — without any glasses or contact lenses post-surgery.
              </p>
              <div className="flex items-center gap-3 bg-green-50 rounded-xl px-5 py-4 border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-bold text-sm">6/6 Unaided Vision Achieved</p>
                  <p className="text-green-600 text-xs">Zero glasses required post-surgery</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <div className="text-lg font-bold text-gray-900">PHACO</div>
                  <div className="text-xs text-gray-500">Technique Used</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <div className="text-lg font-bold text-gray-900">Stitch-Free</div>
                  <div className="text-xs text-gray-500">No sutures required</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2: Pre-op / Post-op Pterygium */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2 w-full space-y-4">
              {/* Before / After side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-red-100">
                    <img
                      src={preOpImg}
                      alt="Pre-operative eye – Pterygium before surgery by Dr. Rahul Gupta"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">Before Surgery</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-green-100">
                    <img
                      src={postOpImg}
                      alt="Post-operative eye – Clear cornea after Pterygium excision by Dr. Rahul Gupta"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">After Surgery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-5">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                Corneal Surgery
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Advanced Pterygium Excision — Zero Sutures
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Patient suffered from severely impaired vision caused by a large pterygium covering almost half the
                corneal surface. Dr. Gupta performed a flawless sutureless excision with Conjunctival Autograft using
                Autologous Serum, resulting in a perfectly clear cornea and full vision restoration.
              </p>
              <div className="flex items-center gap-3 bg-green-50 rounded-xl px-5 py-4 border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-bold text-sm">Zero Sutures · Perfect Vision</p>
                  <p className="text-green-600 text-xs">Clear cornea, rapid recovery</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <div className="text-lg font-bold text-gray-900">Autograft</div>
                  <div className="text-xs text-gray-500">Conjunctival Technique</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <div className="text-lg font-bold text-gray-900">Suture-Free</div>
                  <div className="text-xs text-gray-500">Autologous Serum</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
