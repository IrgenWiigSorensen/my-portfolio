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

          {skills.map((data, i) => {

            return(
              <>
                <div className='first-inner-container'>
                  <h3>{data.skill}</h3>
                  <p>{data.info.text}</p>
                </div>

                <div className='second-inner-container'>
                  <div className="scroll-parent">
                    <div className={`skill-icon-box primary`} key={i}>
                      {data.info.icons.map((icon, i) => {
                        return (
                              <div key={i} className='skill-icon'>
                                {icon}
                              </div>
                        )
                      })}
                    </div>

                    <div className={`skill-icon-box secondary`} key={i}>
                      {data.info.icons.map((icon, i) => {
                        return (
                              <div key={i} className='skill-icon'>
                                {icon}
                              </div>
                        )
                      })}
                    </div>

                  </div>

                </div>
              </>
            )
          })}

        
        </div>
      </div>
    </section>
  )
}

export default Skills; 










{/* <section id='skills'>
<div className="skills-section">
  <div  className='section-header'>
    <h1>Skills</h1>
  </div>
  <div className="skills-container">

    <div className='first-inner-container'>
      {skills.map((data, i) => {
        const { skill, info } = data; 

          return (
            <div className='skill-text-box' key={i}>
              <h3>{skill}</h3>
              <p>{info.text}</p>
            </div>
          );
      })}
    </div>

    <div className='second-inner-container'>
      <div className="scroll-parent">

        {/* Fist loop of icons */}
        // {skills.map((data, i) => {
        //   const { info } = data; 
          
        //   return (
        //     <div className={`skill-icon-box primary-${i}`} key={i}>

        //         {info.icons.map((data, i) => {
                  
        //           return (
        //             <div key={i} className='skill-icon'>
        //               {data}
        //             </div>
        //           )
        //         })}
        //       </div>
        //     );
        //   })}
        {/* Second loop of icons */}
//         {skills.map((data, i) => {
//           const { info } = data; 
          
//           return (
//             <div className={`skill-icon-box secondary-${i}`} key={i}>

//                 {info.icons.map((data, i) => {
                  
//                   return (
//                     <div key={i} className='skill-icon'>
//                       {data}
//                     </div>
//                   )
//                 })}
//               </div>
//             );
//           })}              
//       </div>
//     </div>
//   </div>
// </div>
// </section> 