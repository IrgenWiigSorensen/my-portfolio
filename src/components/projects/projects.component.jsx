import './projects.styles.scss';

import { projects } from '../../content.options';

const Projects = () => {



  return(
    <section id='projects'>
      <div className="projects-section">
        <div  className='section-header'>
          <h1>Projects</h1>
        </div>
        <div className="projects-container">

            {projects.map((data, i) => {
              const { project, info, img, alt } = data; 

                return (
                  <div className='project-box' key={i}>
                    <div className="project-img-container">
                      <img src={img} alt={alt}/>
                    </div>
                    <div className="project-text-container">
                      <div>
                        <h1>{project}</h1>
                      </div>
                      <div>
                        <p>{info}</p>
                      </div>
                    </div>
                  </div>
                );
            })}

        </div>
      </div>
    </section>
  )
}

export default Projects; 