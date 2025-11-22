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
        <h3>{`${occupation} in ${company}`}</h3>
        <sub>{time}</sub>

        <p>{description}</p>
        {
          responsibilities && (
            <>
              <h4>Responsibilities</h4>
              <List
                elements={responsibilities}
              />
            </>
          )
        }
        <h4>Key accomplishments</h4>
        <List
          elements={accomplishments}
        />
      </div>
    </div>
  )
}
