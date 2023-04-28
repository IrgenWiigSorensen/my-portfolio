import './projects.styles.scss';

import { introdata } from '../../content.options';

const Projects = () => {

  const { title, } = introdata; 

  return(
    <section>
      <div className="projects-section">
        <div  className='section-header'>
          <h1>Projects</h1>
        </div>
        <div className="projects-container">
          <div className='left-inner-container'>
            <h2>{title}</h2>
          </div>
          <div className='right-inner-container'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects; 