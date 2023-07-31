import './styles.css'

export default function InfoBarButton ({ data, handler }) {
  return (
    <button className='infoBarButton' onClick={() => handler(data)}>
      {data.company}
    </button>
  )
}
