import './styles.css'
import ProjectCard from '../ProjectCard'
// Images
import misTesorosAppImg from '../../assets/projects/mis-tesoros-app.png'
import passwordGeneratorImg from '../../assets/projects/hacktoberfest.png'
import ecommerceImg from '../../assets/projects/react-ecommerce.png'
import movieSearcherImg from '../../assets/projects/react-movie-searcher.png'

export default function ProjectList () {
  return (
    <div className='projectList'>
      <ProjectCard
        title='Mis Tesoros APP'
        img={misTesorosAppImg}
        description='Mobile application that allows adding and obtaining persistent products between devices. The main objective of this project is to manage the difference in rates between US dollars and Venezuelan bolivars, converting base prices in dollars to bolivars, depending on the valuation of the day.'
        skills={['React', 'Node.js', 'Express.js', 'MySQL']}
        repository='https://github.com/MrVega01/mis-tesoros-app'
      />
      <ProjectCard
        title='Password generator for Hacktoberfest 2022 event'
        img={passwordGeneratorImg}
        description='This was my participation in the Hacktoberfest event. I created a password generator based on the famous game Undertale, using a similar interface and molding it to fit well with the idea. The password generator can vary in password length, characters and can play the mythical song of this game store!'
        skills={['React']}
        repository='https://github.com/MrVega01/password-generator'
        website='https://hacktoberfest-2022.vercel.app/entry/MrVega01'
      />
      <ProjectCard
        title='React Ecommerce'
        img={ecommerceImg}
        description='Ecommerce simulation where you can add products to a cart, filter by category and price. This is a real technical test, I take it to practice the Context and Reducer Hook, so the design was an aditional and quick implementation.'
        skills={['React']}
        repository='https://github.com/MrVega01/react-ecommerce'
      />
      <ProjectCard
        title='React Movie Searcher'
        img={movieSearcherImg}
        description='Movie searcher powered by OMDb, allows you to search for your favorite movies and sort them by title. This project was created to practice optimizing API calls with useCallback and useMemo. This searcher can also make calls every time the input text changes, but applying the debounce technique, waiting 300 milliseconds before make a API call to avoid unnecessary resource consumption.'
        skills={['React']}
        repository='https://github.com/MrVega01/react-movie-searcher'
      />
    </div>
  )
}
