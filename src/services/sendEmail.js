// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// import sgMail from '@sendgrid/mail'
// import { SENDGRID_CONFIG } from '../utils/config.js'
// const { apiKey } = SENDGRID_CONFIG

// export default async function sendEmail ({ to, subject, html }) {
//   try {
//     sgMail.setApiKey(apiKey)
//     const msg = {
//       to,
//       from: 'ignaciovega200301@gmail.com',
//       subject,
//       html
//     }
//     return sgMail.send(msg)
//       .then(() => {
//         return true
//       })
//   } catch (error) {

//   }
// }
