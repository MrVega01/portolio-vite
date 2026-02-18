import './styles.css'
import Timeline from '../../components/Timeline'
import SkillsGroup from '../../components/SkillsGroup'
import { CurvedSeparator, WavesSeparator } from '../../components/Separators/Separators'
import ProjectList from '../../components/ProjectList'
import WorldAnimation from '../../components/WorldAnimation'
import Badge from '../../components/Badge'
import { ButtonIcon } from '../../components/ButtonIcon'
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from '../../components/Icons'
import ContactForm from '../../components/ContactForm'

const CVFile = '/Full-Stack-Developer-Jose-Ignacio-Vega.pdf'

export default function Home () {
  return (
    <main className='sectionMain'>
      <div className='sectionSecondary'>
        <WorldAnimation />

        <section className='sectionPresentation'>
          <sub>Hello, I'm</sub>
          <div>
            <h1>José Ignacio Vega</h1>
            <Badge title='Open to work!' status='primary' />
          </div>
          <p>4 years of experience. Full Stack Developer with experience as <span>Tech Lead</span>. Expert on Frontend, Backend, Mobile, and Cloud development. From Venezuela, and lover of good practices.</p>
          <div>
            <ButtonIcon title='LinkedIn' href='https://www.linkedin.com/in/jos%C3%A9-vega-89135421a/'><LinkedInIcon /></ButtonIcon>
            <ButtonIcon title='GitHub' href='https://github.com/MrVega01'><GitHubIcon /></ButtonIcon>
            <ButtonIcon title='Resume' href={CVFile} download='CV Full Stack Developer - Jose Ignacio Vega'><ResumeIcon /></ButtonIcon>
            <ButtonIcon title='ignaciovega200301@gmail.com' href='mailto:ignaciovega200301@gmail.com'><MailIcon /></ButtonIcon>
          </div>
        </section>

        <section className='sectionExperience' id='experience'>
          <h2>Where I've work?</h2>
          <Timeline
            data={[
              {
                company: 'Nrby',
                occupation: 'Tech Lead | Software Engineer',
                time: 'February 2024 - Present',
                description: 'Nrby is a platform built to simplify and accelerate operations through predictive intelligence, AI, and machine learning. This proprietary model framework transforms raw network data into real-time, actionable insights across an entire operation. At the core of Nrby is the SmartPins™ technology; AI-triggered, geolocated containers and digital workflows that automate the detection, triage, and resolution of service issues in the field or in customer care. This turns complex data into immediate, trackable actions that empower teams to work faster, smarter, and more proactively.',
                responsibilities: [
                  'Contribute to the development of Nrby’s next-generation geospatial platform, primarily focusing on the mobile app engineering.',
                  'Design and implement scalable, data-driven user interface components, collaborating with backend engineers to integrate APIs and ensure seamless system functionality.',
                  'Participate in sprint planning and agile development processes, delivering assigned features and enhancements on schedule while maintaining high code quality.'
                ],
                accomplishments: [
                  'Led the development of Nrby 2.0 for Android and iOS, rebuilding the entire application from scratch, including a redesigned UI, full implementation of SmartPins™ technology, and complete feature parity with version 1.0.',
                  'Onboarded and mentored new mobile team members, guiding them through the application’s architecture, best practices and modularization principles, while standardizing coding conventions and ensuring high-quality, consistent development across the team.',
                  'Played a key role in reducing the cost-to-revenue ratio from $1.75 to under $0.20 per $1 earned, representing an 88% improvement in operational margins.',
                  'Awarded the Product Innovation of the Year at Altice USA\'s Technology Innovation Summit.',
                  'Delivered major performance improvements over Nrby 1.0 on both Android and iOS, resulting in significantly reduced loading times, smoother map interactions (Google Maps), and faster in-app navigation.',
                  'Implemented robust offline support leveraging SQLite and adaptive logic to seamlessly handle functionality based on the user’s network connectivity.'
                ]
              },
              {
                company: 'Assett+',
                occupation: 'FullStack and Mobile Developer',
                time: 'March 2022 - February 2024',
                description: 'Company dedicated to the web development using multiple technologies. The knowledge acquired was huge.',
                responsibilities: [
                  'Support in design creation, structures, and web pages optimization.',
                  'Programming web pages with MERN stack and other modern tools and frameworks.',
                  'Identify possible improvements in the processes related to clients projects.',
                  'Assist in existing client projects.'
                ],
                accomplishments: [
                  'Develop a mobile app built in React Native & Expo for EmpleoRD, a website platform to find jobs in Dominican Republic, which have functionalities such as log in, job browsing with swipe, applications and private chat powered by socket.io (websockets) & SQL database.',
                  'Create a website with ReactJS for the Dominican brewery "Presidente", based on designs created with Figma, using React with CRA/Vite and giving support to the responsive design, animations, optimization and much more.',
                  'Develop an API REST to create a connection between a MongoDB database and the Frontend of React pages, also working with webhooks, auth systems, CORS, mongoose and others functionalities.',
                  'Maintain support in Discord bots created with Node.js, fixing bugs, improving the optimization, connecting with third-services, making connections with MongoDB, and other features.',
                  'Develop a scrapper with Node.js and Playwright, deployed in a Lambda Function on Amazon Web Services (AWS) using Serverless Framework.',
                  'Work adding personalized functionalities to sites using Javascript for CMS services like Wix Velo or Webflow.'
                ]
              }
            ]}
          />
          <div className='sectionSecondaryBackground' />
        </section>

        <section className='sectionSkills' id='skills'>
          <h2>Technical skills</h2>
          <SkillsGroup />
        </section>
      </div>

      <WavesSeparator
        colors={[
          '#8a4b01',
          '#ad5f03',
          '#d17204',
          '#f8931d'
        ]}
      />
      <div className='sectionTertiary'>
        <section className='sectionProjects' id='projects'>
          <h2>My projects!</h2>
          <a className='repositoriesLink' target='_blank' rel='noopener noreferrer' href='https://github.com/MrVega01?tab=repositories'>Check all my repositories</a>
          <ProjectList />
        </section>
      </div>
      <CurvedSeparator background='#f8931d' color='#161623' />
      <div className='sectionQuaternary'>
        <section className='sectionContact' id='contact'>
          <h2>Contact me!</h2>
          <p>If you have a project in mind, have a question or simply want to say hi, please send me a message.</p>
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
