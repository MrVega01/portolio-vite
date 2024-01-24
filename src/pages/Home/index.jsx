import './styles.css'
import InfoBar from '../../components/InfoBar'
import SkillsGroup from '../../components/SkillsGroup'
import { CurvedSeparator, WavesSeparator } from '../../components/Separators/Separators'
import ProjectList from '../../components/ProjectList'
import WorldAnimation from '../../components/WorldAnimation'
import Badge from '../../components/Badge'
import { ButtonIcon } from '../../components/ButtonIcon'
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from '../../components/Icons'
import CVFile from './../../../public/Full-Stack-Developer-Jose-Ignacio-Vega.pdf'

export default function Home () {
  return (
    <main className='sectionMain'>
      <div className='sectionSecondary'>
        <WorldAnimation />

        <section className='sectionPresentation'>
          <sub>Hello, I'm</sub>
          <div>
            <h1>José Ignacio Vega</h1>
            <Badge title='Open to work!' />
          </div>
          <p>2 years of experience. Full Stack Developer with experience in <span>Backend, Frontend, Mobile and Cloud development</span>. From Venezuela, and lover of good practices.</p>
          <div>
            <ButtonIcon title='LinkedIn' href='https://www.linkedin.com/in/jos%C3%A9-vega-89135421a/'><LinkedInIcon /></ButtonIcon>
            <ButtonIcon title='GitHub' href='https://github.com/MrVega01'><GitHubIcon /></ButtonIcon>
            <ButtonIcon title='Resume' href={CVFile} download='CV Full Stack Developer - Jose Ignacio Vega'><ResumeIcon /></ButtonIcon>
            <ButtonIcon title='ignaciovega200301@gmail.com' href='mailto:ignaciovega200301@gmail.com'><MailIcon /></ButtonIcon>
          </div>
        </section>

        <section className='sectionExperience' id='experience'>
          <h2>Where I've work?</h2>
          <InfoBar
            data={[
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
          <sub>Send me a message on LinkedIn, I'm very active there. You can also check out my GitHub profile and get to know me better 👾</sub>
          <div>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jos%C3%A9-vega-89135421a/'>
              <svg className='svgLinkedin' xmlns='http://www.w3.org/2000/svg' width='1024px' height='1024px' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/MrVega01'>
              <svg className='svgGithub' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' /></svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
