import './styles.css'

export default function HoverIcon ({ children, ...restOfProps }) {
  return (
    <i className='hoverIcon' {...restOfProps}>
      {children}
    </i>
  )
}
