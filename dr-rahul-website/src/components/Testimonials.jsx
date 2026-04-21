import { useState, useRef } from 'react'
import video1 from '../assets/video-1.mp4'
import video2 from '../assets/video-2.mp4'

const testimonials = [
  {
    src: video1,
    quote: '"I was terrified of eye surgery, but Dr. Gupta\'s no-injection, no-stitch method meant I felt absolutely nothing. I was home the same day with clear vision."',
    name: 'Patient',
    tag: 'Cataract Surgery',
  },
  {
    src: video2,
    quote: '"My surgery was done in minutes. I can finally read without my glasses again. Dr. Rahul\'s expertise and the team\'s care were truly outstanding."',
    name: 'Patient',
    tag: 'Refractive Surgery',
  },
]

function VideoCard({ testimonial }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const handlePause = () => {
    setPlaying(false)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Video container */}
      <div className="relative bg-gray-900 aspect-video group cursor-pointer" onClick={handlePlay}>
        <video
          ref={videoRef}
          src={testimonial.src}
          className="w-full h-full object-cover"
          onPause={handlePause}
          onEnded={handlePause}
          controls={playing}
          playsInline
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl play-btn group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {testimonial.tag}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="p-6 space-y-4">
        <div className="text-blue-400 text-3xl leading-none font-serif">"</div>
        <p className="text-gray-600 italic text-sm leading-relaxed -mt-4">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">{testimonial.name}</p>
            <p className="text-xs text-gray-500">FIMS Hospital, Sonipat</p>
          </div>
          {/* Stars */}
          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ scrollMarginTop: '80px' }} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-sky-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-800/50 px-4 py-2 rounded-full mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Hear From Our Happy Patients
          </h2>
          <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto">
            Real stories from real patients who experienced painless, stitch-free eye care at FIMS Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <VideoCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: '5★', label: 'Patient Rating' },
            { value: 'Painless', label: 'No Injection Surgery' },
            { value: 'Same Day', label: 'Discharge' },
            { value: '100%', label: 'Ethical & Transparent' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-extrabold text-white">{item.value}</div>
              <div className="text-blue-300 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
