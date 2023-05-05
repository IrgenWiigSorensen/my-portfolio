import './skills.styles.scss'

import { skills } from '../../content.options';



const Skills = () => {



  return (
    <section id='skills'>
      <div className="skills-section">
        <div  className='section-header'>
          <h1>Skills</h1>
        </div>
        <div className="skills-container">

          <div className='left-inner-container'>
            {skills.map((data, i) => {
              const { skill, info } = data; 

                return (
                  <div className='skill-text-box' key={i}>
                    <h2>{skill}</h2>
                    <p>{info.text}</p>
                  </div>
                );
            })}
          </div>

          <div className='right-inner-container'>
            <div className="scroll-parent">

              {/* Fist loop of icons */}
              {skills.map((data, i) => {
                const { info } = data; 
                
                return (
                  <div className={`skill-icon-box primary-${i}`} key={i}>

                      {info.icons.map((data, i) => {
                        
                        return (
                          <div key={i} className='skill-icon'>
                            {data}
                          </div>
                        )
                      })}
                    </div>
                  );
                })}
              {/* Second loop of icons */}
              {skills.map((data, i) => {
                const { info } = data; 
                
                return (
                  <div className={`skill-icon-box secondary-${i}`} key={i}>

                      {info.icons.map((data, i) => {
                        
                        return (
                          <div key={i} className='skill-icon'>
                            {data}
                          </div>
                        )
                      })}
                    </div>
                  );
                })}              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills; 