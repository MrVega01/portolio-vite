import './styles.css'
import ProjectCard from '../ProjectCard'
// Images
import misTesorosAppImg from '../../img/mis-tesoros-app.png'
import passwordGeneratorImg from '../../img/hacktoberfest.png'
import ecommerceImg from '../../img/react-ecommerce.png'
import movieSearcherImg from '../../img/react-movie-searcher.png'

export default function ProjectList () {
  return (
    <div className='projectList'>
      <ProjectCard
        title='Mis Tesoros APP'
        img={misTesorosAppImg}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacinia felis, sit amet dignissim augue gravida non. Duis nec lacinia enim. Nulla facilisi. Aliquam a massa fringilla, accumsan ligula lacinia, blandit augue. Integer efficitur tincidunt luctus. Nam imperdiet et libero eu tempor. Phasellus varius id massa at hendrerit. Nullam hendrerit tellus nec ex condimentum, a volutpat nisl facilisis. Duis aliquet lorem eu turpis viverra, sit amet rutrum enim varius. Duis mattis sit amet eros id pellentesque. Aliquam eget dolor tortor. Pellentesque eget orci eget orci placerat faucibus. Vivamus facilisis efficitur tortor, gravida convallis velit mattis vel. Nullam interdum dolor at tellus tristique mollis. Cras varius maximus erat nec rutrum. Donec ultrices, lacus quis lacinia tempus, nisi urna gravida justo, at feugiat metus purus at tellus.'
        skills={['React', 'Node.js', 'Express.js', 'MySQL']}
        repository='https://github.com/MrVega01/mis-tesoros-app'
      />
      <ProjectCard
        title='Password generator for Hacktoberfest 2022 event'
        img={passwordGeneratorImg}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacinia felis, sit amet dignissim augue gravida non. Duis nec lacinia enim. Nulla facilisi. Aliquam a massa fringilla, accumsan ligula lacinia, blandit augue. Integer efficitur tincidunt luctus. Nam imperdiet et libero eu tempor. Phasellus varius id massa at hendrerit. Nullam hendrerit tellus nec ex condimentum, a volutpat nisl facilisis. Duis aliquet lorem eu turpis viverra, sit amet rutrum enim varius. Duis mattis sit amet eros id pellentesque. Aliquam eget dolor tortor. Pellentesque eget orci eget orci placerat faucibus. Vivamus facilisis efficitur tortor, gravida convallis velit mattis vel. Nullam interdum dolor at tellus tristique mollis. Cras varius maximus erat nec rutrum. Donec ultrices, lacus quis lacinia tempus, nisi urna gravida justo, at feugiat metus purus at tellus.'
        skills={['React']}
        repository='https://github.com/MrVega01/password-generator'
        website='https://hacktoberfest-2022.vercel.app/entry/MrVega01'
      />
      <ProjectCard
        title='React Ecommerce'
        img={ecommerceImg}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacinia felis, sit amet dignissim augue gravida non. Duis nec lacinia enim. Nulla facilisi. Aliquam a massa fringilla, accumsan ligula lacinia, blandit augue. Integer efficitur tincidunt luctus. Nam imperdiet et libero eu tempor. Phasellus varius id massa at hendrerit. Nullam hendrerit tellus nec ex condimentum, a volutpat nisl facilisis. Duis aliquet lorem eu turpis viverra, sit amet rutrum enim varius. Duis mattis sit amet eros id pellentesque. Aliquam eget dolor tortor. Pellentesque eget orci eget orci placerat faucibus. Vivamus facilisis efficitur tortor, gravida convallis velit mattis vel. Nullam interdum dolor at tellus tristique mollis. Cras varius maximus erat nec rutrum. Donec ultrices, lacus quis lacinia tempus, nisi urna gravida justo, at feugiat metus purus at tellus.'
        skills={['React']}
        repository='https://github.com/MrVega01/react-ecommerce'
      />
      <ProjectCard
        title='React Movie Searcher'
        img={movieSearcherImg}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacinia felis, sit amet dignissim augue gravida non. Duis nec lacinia enim. Nulla facilisi. Aliquam a massa fringilla, accumsan ligula lacinia, blandit augue. Integer efficitur tincidunt luctus. Nam imperdiet et libero eu tempor. Phasellus varius id massa at hendrerit. Nullam hendrerit tellus nec ex condimentum, a volutpat nisl facilisis. Duis aliquet lorem eu turpis viverra, sit amet rutrum enim varius. Duis mattis sit amet eros id pellentesque. Aliquam eget dolor tortor. Pellentesque eget orci eget orci placerat faucibus. Vivamus facilisis efficitur tortor, gravida convallis velit mattis vel. Nullam interdum dolor at tellus tristique mollis. Cras varius maximus erat nec rutrum. Donec ultrices, lacus quis lacinia tempus, nisi urna gravida justo, at feugiat metus purus at tellus.'
        skills={['React']}
        repository='https://github.com/MrVega01/react-movie-searcher'
      />
    </div>
  )
}
