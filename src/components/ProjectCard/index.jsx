import { ButtonIcon } from '../ButtonIcon'
import { ExternalLinkIcon, GitHubIcon } from '../Icons'
import SkillHoverIconRow from '../SkillHoverIconRow'
import './styles.css'

export default function ProjectCard ({
  img,
  title,
  description,
  skills = [],
  repository,
  website
}) {
  return (
    <article className='projectCard'>
      <aside>
        <img loading='lazy' src={img} alt={`Sample of ${title} project`} />
      </aside>
      <div>
        <header>
          <SkillHoverIconRow skills={skills} />
        </header>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>
          {repository && (
            <ButtonIcon
              title='Ver repositorio'
              href={repository}
              className='ButtonIconGithub'
            >
              <GitHubIcon />
            </ButtonIcon>
          )}
          {website && (
            <ButtonIcon
              title='Ir al sitio web'
              href={website}
              className='ButtonIconWebsite'
            >
              <ExternalLinkIcon />
            </ButtonIcon>
          )}
        </footer>
      </div>
    </article>
  )
}
