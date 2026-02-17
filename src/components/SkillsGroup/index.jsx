import './styles.css'
import TippyImage from '../TippyImage'
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  ReactIcon,
  BootstrapIcon,
  ExpressIcon,
  GitIcon,
  MongoDBIcon,
  MySQLIcon,
  NodeJSIcon,
  AWSIcon,
  JestIcon,
  PlaywrightIcon,
  ServerlessIcon,
  TypeScriptIcon,
  ExpoLightIcon,
  PostgreSQLIcon,
  PrismaIcon,
  DockerIcon,
  NestJSIcon,
  SQLiteIcon,
  IonicIcon,
  CapacitorIcon,
  SocketIOIcon
} from '../Icons'

export default function SkillsGroup () {
  return (
    <section className='skillsGroup'>

      <TippyImage hoverText='JavaScript'>
        <JavaScriptIcon />
      </TippyImage>

      <TippyImage hoverText='TypeScript'>
        <TypeScriptIcon />
      </TippyImage>

      <TippyImage hoverText='React / React Native'>
        <ReactIcon />
      </TippyImage>

      <TippyImage hoverText='Ionic'>
        <IonicIcon />
      </TippyImage>

      <TippyImage hoverText='Capacitor'>
        <CapacitorIcon />
      </TippyImage>

      <TippyImage hoverText='Expo'>
        <ExpoLightIcon />
      </TippyImage>

      <TippyImage hoverText='Node.js'>
        <NodeJSIcon />
      </TippyImage>

      <TippyImage hoverText='Express.js'>
        <ExpressIcon />
      </TippyImage>

      <TippyImage hoverText='NestJS'>
        <NestJSIcon />
      </TippyImage>

      <TippyImage hoverText='Socket.io'>
        <SocketIOIcon />
      </TippyImage>

      <TippyImage hoverText='PostgreSQL'>
        <PostgreSQLIcon />
      </TippyImage>

      <TippyImage hoverText='MySQL'>
        <MySQLIcon />
      </TippyImage>

      <TippyImage hoverText='SQLite'>
        <SQLiteIcon />
      </TippyImage>

      <TippyImage hoverText='MongoDB'>
        <MongoDBIcon />
      </TippyImage>

      <TippyImage hoverText='Prisma'>
        <PrismaIcon />
      </TippyImage>

      <TippyImage hoverText='Docker'>
        <DockerIcon />
      </TippyImage>

      <TippyImage hoverText='HTML5'>
        <HTMLIcon />
      </TippyImage>

      <TippyImage hoverText='CSS3'>
        <CSSIcon />
      </TippyImage>

      <TippyImage hoverText='Bootstrap'>
        <BootstrapIcon />
      </TippyImage>

      <TippyImage hoverText='Git'>
        <GitIcon />
      </TippyImage>

      <TippyImage hoverText='Amazon Web Services'>
        <AWSIcon />
      </TippyImage>

      <TippyImage hoverText='Jest'>
        <JestIcon />
      </TippyImage>

      <TippyImage hoverText='Playwright'>
        <PlaywrightIcon />
      </TippyImage>

      <TippyImage hoverText='Serverless'>
        <ServerlessIcon />
      </TippyImage>

    </section>
  )
}
