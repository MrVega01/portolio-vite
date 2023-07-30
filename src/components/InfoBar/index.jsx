import './styles.css'
import { useState } from 'react'

export default function InfoBar ({ data }) {
  const [title, setTitle] = useState(`${data[0].occupation} in ${data[0].company}`)
  const [time, setTime] = useState(data[0].time)
  const [description, setDescription] = useState(data[0].description)

  return (
    <div className='infoBar'>
      <div>
        {
                    data.map((d, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            setTitle(`${d.occupation} in ${d.company}`)
                            setTime(d.time)
                            setDescription(d.description)
                          }}
                        >{d.company}
                        </button>
                      )
                    })
                }
      </div>
      <div>
        <h1>{title}</h1>
        <sub>{time}</sub>
        <p>{description}</p>
      </div>
    </div>
  )
}
