import InfoBarButton from '../InfoBarButton'
import List from '../List'
import './styles.css'
import { useState } from 'react'

export default function InfoBar ({ data }) {
  const [info, setInfo] = useState(data[0])

  const { occupation, company, time, description, responsibilities, accomplishments } = info

  return (
    <div className='infoBar'>
      <div>
        {
          data.map((data) => <InfoBarButton key={data.company} data={data} handler={setInfo} />)
        }
      </div>
      <div>
        <h1>{`${occupation} in ${company}`}</h1>
        <sub>{time}</sub>

        <p>{description}</p>
        <h2>Responsibilities</h2>
        <List
          elements={responsibilities}
        />
        <h2>Key accomplishments</h2>
        <List
          elements={accomplishments}
        />
      </div>
    </div>
  )
}
