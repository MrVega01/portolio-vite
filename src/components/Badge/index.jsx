import './styles.css'

export default function Badge ({
  title,
  status = 'primary' // primary, danger
}) {
  return (
    <div className={`Badge Badge--${status}`}>
      <span />
      <span>
        {title}
      </span>
    </div>
  )
}
