import { useState, useCallback } from 'react'
import './styles.css'

export default function Form ({ children, textSubmit = 'Submit', onSubmit, className, ...restOfProps }) {
  const [loading, setLoading] = useState(false)

  const submitHandler = useCallback(async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      const formData = Object.fromEntries(
        new FormData(event.target)
      )
      onSubmit && await onSubmit(formData)
    } catch (e) {
    } finally {
      event.target.reset()
      setLoading(false)
    }
  }, [])

  return (
    <form className={`Form ${className}`} onSubmit={submitHandler} {...restOfProps}>
      {children}
      <button type='submit'>
        {loading ? <span className='loading'>⏳</span> : textSubmit}
      </button>
    </form>
  )
}
