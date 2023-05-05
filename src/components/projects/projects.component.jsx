import './projects.styles.scss';

import {
  FaGithub,
} from "react-icons/fa";

import { projects } from '../../content.options';
import Modal from '../modal/modal.component';

const Projects = () => {



  return(
    <section id='projects'>
      <div className="projects-section">
        <div  className='section-header'>
          <h1>Projects</h1>
        </div>
        <div className="projects-container">

            {projects.map((data, i) => {
              const { project, info, img, alt, website, joke, github } = data; 

                return (
                  <div className='project-box' key={i}>
                    <div className="project-img-container">
                      <img src={img} alt={alt}/>
                    </div>
                  
                  <div className='project-bottom-container'>
                    <div className="project-text-container">
                      <div>
                        <h1>{project}</h1>
                      </div>
                      <div>
                        <p>{info}</p>
                      </div>
                    </div>

                    <div className="button-container">
                        {website && (
                            <button>
                              <a href={website}>
                                View
                              </a>
                            </button>
                        )}
                        {joke && (
                              <Modal></Modal>
                        )}
                        {github && (
                            <button>
                              <a href={github}>
                                <FaGithub />
                              </a>
                            </button>
                        )}
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