import HoverIcon from './HoverIcon'
import {
  AWSIcon,
  BootstrapIcon,
  ExpoDarkIcon,
  ExpressIcon,
  JestIcon,
  MongoDBIcon,
  MySQLIcon,
  NodeJSIcon,
  PlaywrightIcon,
  ReactIcon,
  TypeScriptIcon
} from './Icons'

export default function SkillHoverIconRow ({ skills }) {
  const skillIcons = skills.map(skill => {
    switch (skill) {
      case 'React': {
        return { component: <ReactIcon />, name: skill }
      }
      case 'Node.js': {
        return { component: <NodeJSIcon />, name: skill }
      }
      case 'MySQL': {
        return { component: <MySQLIcon />, name: skill }
      }
      case 'MongoDB': {
        return { component: <MongoDBIcon />, name: skill }
      }
      case 'Express.js': {
        return { component: <ExpressIcon />, name: skill }
      }
      case 'Amazon Web Services': {
        return { component: <AWSIcon />, name: skill }
      }
      case 'TypeScript': {
        return { component: <TypeScriptIcon />, name: skill }
      }
      case 'Playwright': {
        return { component: <PlaywrightIcon />, name: skill }
      }
      case 'Jest': {
        return { component: <JestIcon />, name: skill }
      }
      case 'Bootstrap': {
        return { component: <BootstrapIcon />, name: skill }
      }
      case 'Expo': {
        return { component: <ExpoDarkIcon />, name: skill }
      }
      default: return null
    }
  }).filter(el => el)
  return (
    <>
      {
        skillIcons.map(({ component, name }) => {
          return <HoverIcon key={name} title={name}>{component}</HoverIcon>
        })
      }
    </>
  )
}
