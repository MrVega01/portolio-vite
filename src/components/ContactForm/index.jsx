import './styles.css'
import Form from '../Form'
import StyledInput from '../StyledInput'
import StyledTextArea from '../StyledTextArea'
import sendEmail from '../../services/sendEmail'
import { useState } from 'react'

export default function ContactForm () {
  const [submitMessage, setSubmitMessage] = useState(false)
  const submitHandler = (formValues) => {
    const { name, email, message } = formValues
    sendEmail({
      subject: 'Form submitted from potfolio',
      html: `
        <p>
          <b>Name: </b><br />
          ${name}<br />
          <b>Email: </b><br />
          ${email}<br />
          <b>Message: </b><br />
          ${message}<br />
        </p>
      `
    }).then(({ error }) => {
      if (!error) {
        setSubmitMessage('Submitted!')
      } else setSubmitMessage('Something went wrong 😟')
      setTimeout(() => setSubmitMessage(false), 3000)
    })
  }
  return (
    <>
      <Form textSubmit='Send' className='ContactForm' onSubmit={submitHandler}>
        <div>
          <StyledInput label='Name' name='name' type='text' placeholder='Bruce Wayne' required />
          <StyledInput label='Email' name='email' type='email' placeholder='contact@batman.com' required />
        </div>
        <StyledTextArea label='Message' name='message' placeholder='Write your thoughts here...' required />
      </Form>
      <div className={`message ${!submitMessage && 'hidden'}`}>
        <span>{submitMessage || '.'}</span>
      </div>
    </>
  )
}
