import './styles.css'

export default function SkillsProfile ({ text, photo, percent }) {
  return (
    <div className='skillsProfile'>
      <div className='skillsPhoto'>
        <img src={photo} alt={text} />
        <span>{text}</span>
      </div>
      <div className='skillsBar'>
        <div>
          <div style={{ width: percent }} />
        </div>
      </div>
    </div>
  )
}
