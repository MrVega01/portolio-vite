import { NavLink } from 'react-router-dom'
import { MainIcon } from '../Icons'
import './styles.css'

export default function Nav () {
  return (
    <nav>
      <a href='/'>
        <MainIcon />
      </a>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/experience'>Experience</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
