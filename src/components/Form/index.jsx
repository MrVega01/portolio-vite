import './styles.css'

export default function Form ({ children, textSubmit = 'Submit', onSubmit, className, ...restOfProps }) {
  const submitHandler = (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(
      new FormData(event.target)
    )
    onSubmit && onSubmit(formData)
  }

  return (
    <form className={`Form ${className}`} onSubmit={submitHandler} {...restOfProps}>
      {children}
      <input type='submit' value={textSubmit} />
    </form>
  )
}
