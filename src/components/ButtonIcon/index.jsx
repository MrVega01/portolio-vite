import './styles.css'

export function ButtonIcon ({ children, href, title, className }) {
  return (
    <a className={`ButtonIcon ${className}`} target='_blank' rel='noopener noreferrer' href={href}>
      {children}
      <span>{title}</span>
    </a>
  )
}
