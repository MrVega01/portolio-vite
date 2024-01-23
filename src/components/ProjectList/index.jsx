import './styles.css'
import ProjectCard from '../ProjectCard'
// Images
import misTesorosAppImg from '../../assets/projects/mis-tesoros.webp'
import passwordGeneratorImg from '../../assets/projects/hacktoberfest.webp'
import taxCalculatorImg from '../../assets/projects/tax-calculator.webp'
import picotaImg from '../../assets/projects/picota.webp'
import presidenteImg from '../../assets/projects/presidente.webp'

export default function ProjectList () {
  return (
    <div className='projectList'>
      <ProjectCard
        title='Picota App'
        img={picotaImg}
        description='Mobile application whose premise is to search for jobs for Dominicans and post jobs for companies and employers. The application is the mobile alternative to EmpleoRD.com for web, sharing jobs and accounts for both. Among the functionalities of the app we have: log in, job navigation with swipe, applications, private chat, video presentation of applicants, and more.'
        skills={['React', 'Expo', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'Zod', 'Sentry']}
      />
      <ProjectCard
        title='Payroll Deductions Calculator'
        img={taxCalculatorImg}
        description='Calculator that allows to calculate CPP, EI, and tax deductions for Canadians. Project created for DCP Accounting based on official Canadian payrolls. The calculator displays the results with a dynamic example, graphs and data list, where you can customize the salary rate if you want to see your taxes when you work a year, or an hour.'
        skills={['React', 'Node.js', 'Express.js', 'MySQL']}
        website='https://payrolldeductionscalculator.ca/'
      />
      <ProjectCard
        title='Website for Dominican brewery "Presidente"'
        img={presidenteImg}
        description='Created for the NFT campaign of the Dominican National Brewery "Presidente". Although the website has been retired, it was approved and used, with features such as a NFT creator with templates and scroll animations, based on designs created with Figma.'
        skills={['React']}
      />
      <ProjectCard
        title='Mis Tesoros APP'
        img={misTesorosAppImg}
        description='Mobile application that allows adding and obtaining persistent products between devices. The main objective of this project is to manage the difference in rates between US dollars and Venezuelan bolivars, converting base prices in dollars to bolivars, depending on the valuation of the day.'
        skills={['React', 'Expo', 'Node.js', 'Express.js', 'MySQL']}
        repository='https://github.com/MrVega01/mis-tesoros-app'
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
