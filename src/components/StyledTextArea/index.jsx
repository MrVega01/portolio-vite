import './styles.css'

export default function StyledTextArea ({ label, rows = 3, required = false, ...restOfProps }) {
  return (
    <label className='StyledTextArea'>
      <span>{label} <b>{required && '*'}</b></span>
      <textarea rows={rows} cols={20} required={required} {...restOfProps} />
    </label>
  )
}
