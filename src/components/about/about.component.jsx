import "./about.styles.scss";

import profileimg from "../../assets/Profilbilde.jpg";

import Typewriter from "typewriter-effect";

import { introdata, workExperience, education } from "../../content.options";

const About = () => {
  const { title, title2, animated, aboutMe } = introdata;

  return (
    <section id="about">
      <div className="about-section">
        <div className="section-header">
          <h1>About Me</h1>
        </div>
        {/* First about me container with typewriter and img */}
        <div className="about-container-1">
          <div className="left-inner-container">
            <h2>{title}</h2>
            <h2>{title2}</h2>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    animated.first,
                    animated.second,
                    animated.third,
                    animated.fourth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h2>
          </div>
          <div className="right-inner-container">
            <img src={profileimg} alt="Profile picture" />
          </div>
        </div>

        {/* Second about me container with a shot info */}
        <div className="about-container-2">
          <div className="left-inner-container">
            <h3>A bit about myself</h3>
          </div>
          <div className="right-inner-container">
            <p>{aboutMe}</p>
          </div>
        </div>

        {/* Second about me container with portfolio - work experience*/}
        <div className="about-container-2">
          <div className="left-inner-container">
            <h3>Work Timeline</h3>
          </div>
          <div className="right-inner-container">
            {workExperience.map((data, i) => {
              return (
                <div className="work-experience" key={i}>
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Third about me container with portfolio - education*/}
        <div className="about-container-2">
          <div className="left-inner-container">
            <h3>Education</h3>
          </div>
          <div className="right-inner-container">
            {education.map((data, i) => {
              return (
                <div className="work-experience" key={i}>
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Second about me container with fun facts */}
        {/* <div className="about-container-2">
          <div className='left-inner-container'>
            <h2>Extra info</h2>
          </div>
          <div className='right-inner-container'>
            <h2>A masters degree in international development</h2>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default About;
