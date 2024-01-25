import './styles.css'
import Form from '../Form'
import StyledInput from '../StyledInput'
import StyledTextArea from '../StyledTextArea'

export default function ContactForm () {
  const submitHandler = (formValues) => {
    const { name, email, message } = formValues
    // sendEmail({
    //   to: 'ignaciovega200301@gmail.com',
    //   subject: 'Form submitted from potfolio',
    //   html: `
    //     <p>
    //       <b>Name: </b><br />
    //       ${name}<br />
    //       <b>Email: </b><br />
    //       ${email}<br />
    //       <b>Message: </b><br />
    //       ${message}<br />
    //     </p>
    //   `
    // }).then(() => {

    // })
    console.log(formValues)
  }
  return (
    <Form textSubmit='Send' className='ContactForm' onSubmit={submitHandler}>
      <div>
        <StyledInput label='Name' name='name' type='text' placeholder='Bruce Wayne' required />
        <StyledInput label='Email' name='email' type='email' placeholder='contact@batman.com' required />
      </div>
      <StyledTextArea label='Message' name='message' placeholder='Write your thoughts here...' required />
    </Form>
  )
}
