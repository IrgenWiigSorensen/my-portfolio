import ParticlesBackground from '../particles/particles.component';
import './home.styles.scss'


const Home = () => {

  return(

  <section className='home-section' id='home'>
    <div className="dark-overlay">
     <ParticlesBackground />
    </div>
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