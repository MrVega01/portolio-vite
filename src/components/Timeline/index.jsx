import List from '../List'
import './styles.css'

export default function Timeline ({ data }) {
  return (
    <div className='Timeline'>
      {
        data.map(({ company, occupation, time, description, responsibilities, accomplishments }, index) => (
          <article className='Timeline-item' key={`${company}-${occupation}`}>
            <div className='Timeline-track' aria-hidden='true'>
              <span className='Timeline-dot' />
              {index < data.length - 1 && <span className='Timeline-line' />}
            </div>
            <div className='Timeline-content'>
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
          </article>
        ))
      }
    </div>
  )
}
