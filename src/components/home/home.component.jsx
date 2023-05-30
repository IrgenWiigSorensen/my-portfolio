import ParticlesBackground from '../particles/particles.component';
import Div100vh from 'react-div-100vh'

import './home.styles.scss'


const Home = () => {

  return(

  <section className='home-section' id='home'>
    {/* <Div100vh className="dark-overlay"> */}
    <div className="dark-overlay">
      <ParticlesBackground />
    </div>
    {/* </Div100vh> */}
    <div className='intro-text'>
      <div>
        <p >Hello, World!</p>
      </div>
      <div>
        <h1>I am Irgen Wiig Sørensen</h1>
      </div>
      <div>
        <p>Full-Stack Developer|</p>
      </div>
  
    </div>
  </section>
  )
}

export default Home; 