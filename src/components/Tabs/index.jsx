import './styles.css'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.08
}

export default function Tabs ({ tabs }) {
  const [buttonRefs] = useState([])

  const ulRef = useRef(null)
  const ulRect = ulRef.current?.getBoundingClientRect()

  const [hoveredTabIndex, setHoveredTabIndex] = useState(null)
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect()

  return (
    <ul
      ref={ulRef}
      className='tabs'
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {
      tabs.map(({ label, path }, i) => {
        return (
          <motion.li
            key={i}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => {
              setHoveredTabIndex(i)
            }}
            onFocus={() => {
              setHoveredTabIndex(i)
            }}
          >
            <NavLink to={path}>{label}</NavLink>
          </motion.li>
        )
      })
      }

      <AnimatePresence>
        {hoveredRect && ulRect && (
          <motion.div
            key='hover'
            className='motionDiv'
            initial={{
              x: `calc(${hoveredRect.left - ulRect.left}px - 8%)`,
              y: `calc(${hoveredRect.top - ulRect.top}px + 27%)`,
              width: hoveredRect.width * 1.2,
              height: hoveredRect.height * 0.6,
              opacity: 0
            }}
            animate={{
              x: `calc(${hoveredRect.left - ulRect.left}px - 8%)`,
              y: `calc(${hoveredRect.top - ulRect.top}px + 27%)`,
              width: hoveredRect.width * 1.2,
              height: hoveredRect.height * 0.6,
              opacity: 1
            }}
            exit={{
              x: hoveredRect.left - ulRect.left,
              y: hoveredRect.top - ulRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>

    </ul>
  )
}
