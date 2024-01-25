import './styles.css'

export default function StyledInput ({ label, type, name, required = false, ...restOfProps }) {
  return (
    <label className='StyledInput'>
      <span>{label} <b>{required && '*'}</b></span>
      <input type={type} name={name} required={required} {...restOfProps} />
    </label>
  )
}
