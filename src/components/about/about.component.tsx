
import './about.styles.css'

import Typewriter from 'typewriter-effect';

import { introdata } from '../../content.options';

const About = () => {

  const { title, animated } = introdata; 

  return (
    <section>
      <div className="about-section">
        <h1 className='section-header'>About Me</h1>
        <h2>{title}</h2>
        <Typewriter
            options={{
              strings: [
                animated.first,
                animated.second,
                animated.third,
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
      </div>
    </section>
  )
}
export default About; 