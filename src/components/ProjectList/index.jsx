import './styles.css'
import ProjectCard from '../ProjectCard'
// Images
import passwordGeneratorImg from '../../assets/projects/hacktoberfest.webp'
import taxCalculatorImg from '../../assets/projects/tax-calculator.webp'
import picotaImg from '../../assets/projects/picota.webp'
import presidenteImg from '../../assets/projects/presidente.webp'
import nrbyImg from '../../assets/projects/nrby.webp'

export default function ProjectList () {
  return (
    <div className='projectList'>
      <ProjectCard
        title='Nrby+ (Nrby 2.0)'
        img={nrbyImg}
        description={[
          'A mobile application built for Android and iOS. For this project, I performed as the Tech Lead, I spearheaded the ground-up reconstruction of our enterprise platform using React and TypeScript. My role involved leading the complete UI redesign while maintaining full feature parity with the legacy version and delivering major performance gains, specifically reducing loading times and optimizing Google Maps interactions for both Android and iOS.',
          'To scale the team, I onboarded and mentored new developers, standardizing coding conventions and modularization principles to ensure high-quality development cycles. I also engineered a robust offline-first architecture using SQLite and adaptive logic to manage variable network connectivity. These technical and leadership efforts resulted in a significant 88% improvement in operational margins, reducing the cost-to-revenue ratio from $1.75 to under $0.20, and earned the Product Innovation of the Year award at the Altice USA Technology Innovation Summit.'
        ]}
        skills={['React', 'TypeScript', 'Node.js', 'SQLite', 'Ionic', 'Capacitor', 'Android', 'iOS', 'Jest']}
        website='https://play.google.com/store/apps/details?id=com.nrby.mobile&pcampaignid=web_share'
      />
      <ProjectCard
        title='Payroll Deductions Calculator'
        img={taxCalculatorImg}
        description='Calculator that allows to calculate CPP, EI, and tax deductions for Canadians. Project created for DCP Accounting based on official Canadian payrolls. The calculator displays the results with a dynamic example, graphs and data list, where you can customize the salary rate if you want to see your taxes when you work a year, or an hour.'
        skills={['React', 'Node.js', 'Express.js', 'MySQL']}
        website='https://payrolldeductionscalculator.ca/'
      />
      <ProjectCard
        title='Picota App'
        img={picotaImg}
        description='Mobile application whose premise is to search for jobs for Dominicans and post jobs for companies and employers. The application is the mobile alternative to EmpleoRD.com for web, sharing jobs and accounts for both. Among the functionalities of the app we have: log in, job navigation with swipe, applications, private chat, video presentation of applicants, and more.'
        skills={['React', 'Expo', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'Zod', 'Sentry']}
      />
      <ProjectCard
        title='Website for Dominican brewery "Presidente"'
        img={presidenteImg}
        description='Created for the NFT campaign of the Dominican National Brewery "Presidente". Although the website has been retired, it was approved and used, with features such as a NFT creator with templates and scroll animations, based on designs created with Figma.'
        skills={['React']}
      />
      <ProjectCard
        title='Password generator for Hacktoberfest 2022 event'
        img={passwordGeneratorImg}
        description='This was my participation in the midudev Hacktoberfest event. I created a password generator based on the famous game Undertale, using a similar interface and molding it to fit well with the idea. The password generator can vary in password length, characters and can play the mythical song of this game store!'
        skills={['React']}
        repository='https://github.com/MrVega01/password-generator'
        website='https://hacktoberfest-2022.vercel.app/entry/MrVega01'
      />
    </div>
  )
}
