import { useId } from 'react'
import './styles.css'

export function WavesSeparator ({ colors = ['#fff', '#f0f', '#ff0', '#1ff'] }) {
  const pathId = useId()
  return (
    <svg
      className='waveSeparator'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 24 150 28 '
      preserveAspectRatio='none'
    >
      <defs>
        <path
          id={pathId}
          d='M-160 44c30 0
    58-18 88-18s
    58 18 88 18
    58-18 88-18
    58 18 88 18
    v44h-352z'
        />
      </defs>
      <g className='wave1'>
        <use xlinkHref={`#${pathId}`} x='50' y='3' fill={colors[0]} />
      </g>
      <g className='wave2'>
        <use xlinkHref={`#${pathId}`} x='50' y='0' fill={colors[1]} />
      </g>
      <g className='wave3'>
        <use xlinkHref={`#${pathId}`} x='50' y='9' fill={colors[2]} />
      </g>
      <g className='wave4'>
        <use xlinkHref={`#${pathId}`} x='50' y='6' fill={colors[3]} />
      </g>
    </svg>
  )
}
export function CurvedSeparator ({ color, background }) {
  return (
    <div className='curvedSeparator' style={{ background }}>
      <div style={{ background: color }} />
    </div>
  )
}
