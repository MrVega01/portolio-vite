import { MainIcon } from '../Icons'
import './styles.css'
import Tabs from '../Tabs'

export default function Nav () {
  return (
    <nav>
      <a href='/'>
        <MainIcon />
      </a>
      <Tabs
        tabs={
        [
          {
            label: 'Experience',
            path: '#experience'
          },
          {
            label: 'Skills',
            path: '#skills'
          },
          {
            label: 'Projects',
            path: '#projects'
          },
          {
            label: 'Contact',
            path: '#contact'
          }
        ]
    }
      />
      <div />
    </nav>
  )
}
