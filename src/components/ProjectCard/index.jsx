import { ExternalLinkIcon, GitHubIcon } from '../Icons'
import SkillHoverIconRow from '../SkillHoverIconRow'
import './styles.css'

export default function ProjectCard ({
  img,
  title,
  description,
  skills = [],
  repository = '#',
  website
}) {
  return (
    <article className='projectCard'>
      <aside>
        <img src={img} alt={`Sample of ${title} project`} />
      </aside>
      <div>
        <header>
          <SkillHoverIconRow skills={skills} />
        </header>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>
          <a target='_blank' rel='noopener noreferrer' href={repository} title='View code'>
            <GitHubIcon />
          </a>
          {website && (
            <a target='_blank' rel='noopener noreferrer' href={website} title='View deployment'>
              <ExternalLinkIcon />
            </a>
          )}
        </footer>
      </div>
    </article>
  )
}
