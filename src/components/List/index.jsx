import './styles.css'

export default function List ({ elements }) {
  return (
    <ul className='list'>
      {
        elements.map(element => <li key={element}>{element}</li>)
      }
    </ul>
  )
}
