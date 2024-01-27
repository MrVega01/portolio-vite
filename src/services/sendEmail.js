import { SENDGRID_CONFIG } from '../utils/config'

export default async function sendEmail ({ subject, html }) {
  try {
    const { apiUrl, apiKey } = SENDGRID_CONFIG
    return fetch(`${apiUrl}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey
      },
      body: JSON.stringify({
        subject,
        content: html
      })
    }).then(() => {
      return { error: null }
    })
  } catch (error) {
    return { error }
  }
}
