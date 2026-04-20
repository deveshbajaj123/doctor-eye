import useInView from '../hooks/useInView'

/**
 * Wraps children with a fade-up reveal triggered on scroll.
 * delay: Tailwind delay class e.g. 'delay-100', 'delay-200'
 */
export default function FadeIn({ children, className = '', delay = '' }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
