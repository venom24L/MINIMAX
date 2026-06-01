import { motion } from 'framer-motion'
import useFadeUpOnScroll from './useFadeUpOnScroll.js'

// Wraps children in a div that fades up when scrolled into view.
export default function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const [ref, inView] = useFadeUpOnScroll()
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
