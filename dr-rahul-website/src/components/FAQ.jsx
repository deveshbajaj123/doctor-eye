import { useState } from 'react'

const faqs = [
  {
    q: 'When should I see an eye doctor?',
    a: 'You should visit an ophthalmologist if you experience blurry vision, eye pain, redness, persistent dryness, sudden vision loss, flashes of light, or floaters. Regular checkups are especially important if you are diabetic, above 40, or have a family history of eye disease.',
  },
  {
    q: 'What makes Dr. Rahul Gupta the best choice for cataract surgery in Sonipat?',
    a: 'Dr. Gupta performs painless, injection-free, stitch-less cataract surgeries using the latest PHACO and FLACS techniques. Patients benefit from quick recovery, high success rates, and minimal post-operative discomfort.',
  },
  {
    q: 'Is Dr. Rahul Gupta experienced in treating children\'s eye problems?',
    a: 'Yes, Dr. Rahul Gupta is widely recognised as one of the best eye doctors for kids in Sonipat. He provides gentle, accurate, and effective eye care for children including squint correction, amblyopia treatment, and pediatric spectacle prescriptions.',
  },
  {
    q: 'How do I book an appointment with Dr. Rahul Gupta?',
    a: 'You can book your consultation by calling FIMS Hospital on +91 130 2205000, +91 7082012006, +91 7082012007, or +91 7082012008. You can also visit the hospital directly at Bahalgarh Road, Sonipat, Haryana.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-800 text-sm lg:text-base leading-snug">
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-blue-700 text-white rotate-180' : 'bg-gray-100 text-gray-500'
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
          {faq.a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Frequently Asked{' '}
            <span className="text-blue-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Have questions about your eye health or treatment options? We have answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <p className="text-gray-700 font-medium mb-4">Still have questions? Our team is happy to help.</p>
          <a
            href="tel:+911302205000"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call: +91 130 2205000
          </a>
        </div>
      </div>
    </section>
  )
}
