import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import './styles.css'
import Tippy from '@tippyjs/react'

export default function TippyImage ({ hoverText, children }) {
  return (
    <Tippy content={hoverText} animation='scale' theme='material'>
      <div className='tippyImage'>
        {children}
      </div>
    </Tippy>
  )
}
