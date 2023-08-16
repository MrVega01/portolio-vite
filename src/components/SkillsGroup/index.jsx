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
  ExpoLightIcon
} from '../Icons'

export default function SkillsGroup () {
  return (
    <section className='skillsGroup'>
      <TippyImage hoverText='CSS3'>
        <CSSIcon />
      </TippyImage>

      <TippyImage hoverText='HTML5'>
        <HTMLIcon />
      </TippyImage>

      <TippyImage hoverText='JavaScript'>
        <JavaScriptIcon />
      </TippyImage>

      <TippyImage hoverText='Git'>
        <GitIcon />
      </TippyImage>

      <TippyImage hoverText='Bootstrap'>
        <BootstrapIcon />
      </TippyImage>

      <TippyImage hoverText='React / React Native'>
        <ReactIcon />
      </TippyImage>

      <TippyImage hoverText='Express.js'>
        <ExpressIcon />
      </TippyImage>

      <TippyImage hoverText='MongoDB'>
        <MongoDBIcon />
      </TippyImage>

      <TippyImage hoverText='MySQL'>
        <MySQLIcon />
      </TippyImage>

      <TippyImage hoverText='Node.js'>
        <NodeJSIcon />
      </TippyImage>

      <TippyImage hoverText='Expo'>
        <ExpoLightIcon />
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

      <TippyImage hoverText='TypeScript'>
        <TypeScriptIcon />
      </TippyImage>

    </section>
  )
}
