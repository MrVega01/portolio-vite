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
  TypeScriptLettersIcon,
  SocketIOIcon,
  ZodIcon,
  SentryIcon,
  SQLiteIcon,
  IonicIcon,
  CapacitorIcon,
  AndroidIcon,
  IOSIcon,
  PostgreSQLIcon,
  NestJSIcon,
  DockerIcon,
  PrismaIcon
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
      case 'SQLite': {
        return { component: <SQLiteIcon />, name: skill }
      }
      case 'Ionic': {
        return { component: <IonicIcon />, name: skill }
      }
      case 'Capacitor': {
        return { component: <CapacitorIcon />, name: skill }
      }
      case 'PostgreSQL': {
        return { component: <PostgreSQLIcon />, name: skill }
      }
      case 'NestJS': {
        return { component: <NestJSIcon />, name: skill }
      }
      case 'Docker': {
        return { component: <DockerIcon />, name: skill }
      }
      case 'Prisma': {
        return { component: <PrismaIcon />, name: skill }
      }
      case 'Android': {
        return { component: <AndroidIcon />, name: skill }
      }
      case 'iOS': {
        return { component: <IOSIcon />, name: skill }
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
        return { component: <TypeScriptLettersIcon />, name: skill }
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
      case 'Socket.io': {
        return { component: <SocketIOIcon />, name: skill }
      }
      case 'Zod': {
        return { component: <ZodIcon />, name: skill }
      }
      case 'Sentry': {
        return { component: <SentryIcon />, name: skill }
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
