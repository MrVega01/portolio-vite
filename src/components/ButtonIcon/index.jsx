import './styles.css'

export function ButtonIcon ({ children, href, title, className, ...restOfProps }) {
  return (
    <a className={`ButtonIcon ${className}`} target='_blank' rel='noopener noreferrer' href={href} {...restOfProps}>
      {children}
      <span>{title}</span>
    </a>
  )
}
