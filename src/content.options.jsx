import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJsSquare, faBootstrap, faStripe, faSass, faHtml5, faCss3, faNpm } from '@fortawesome/free-brands-svg-icons';
import typeScriptLogo from './assets/Typescript_logo_2020.svg'
import typeScriptWhiteLogo from './assets/Typescript_logo_2020_white.svg'
import postgreSQLLogo from './assets/PostgreSQL_logo.svg'
import firebaseLogo from './assets/firebase-logo.svg'
import remembrallIMG from './assets/Remembrall3.png'
import jokeTellerIMG from './assets/JokeTeller.png'
import eCommerceIMG from './assets/E-commerce.png'
import reduxIMG from './assets/redux.svg'
import styledComponentsIMG from './assets/styled-components.svg'
import expressIMG from './assets/icons8-express-js.svg'

import { useContext } from 'react'
import { ColorSchemeContext } from './contexts/color-scheme.context'; 

const TypescriptColor = () => {
  const { isDark } = useContext(ColorSchemeContext)

  if (isDark) {
    return (<img src={typeScriptWhiteLogo} alt='typescript logo' />);
  } else {
    return (<img src={typeScriptLogo} alt='typescript logo' />);
  }
}

const introdata = {
  title: "I’m Irgen Wiig Sørensen",
  animated: {
      first: "I love coding",
      second: "I code cool websites",
      third: "I develop mobile apps",
      fourth: "I love to learn"
  },
  aboutMe: `I'm a fullstack developer working with languages like TypeScript and JavaScript, and frameworks like React and Node.js. After graduating from NMBU with a masters degree in global development studies i spent a couple of years working for Red Cross and Blue Cross with different humantitarian activites for children and low income families.

            In the summer of 2022, I decided that it's time for me to go fulltime into IT and in February 2023 I graduated from Brights's accelerated learning program. The program contained over 500 hours with active learning around the languages JavasCript, CSS and HTML - creating front-end design in React, and back end with Node.JS and postgreSQL. 

            I love learning and jumping into new and exciting projects, as well as that my background from a multitude of different sectors, allows me to quickly join any team in their ongoing processes. Take a look around and contact me if I seem like a good fit for your team.`
};

const socialprofils = {
  github: "https://github.com/IrgenWiigSorensen",
  linkedin: "http://www.linkedin.com/in/irgen-wiig-s%C3%B8rensen",
};

const workExperience = [{
  title: "2023 - JavaScript Consultant at Academic Work",
  description: "Creating fullstack applications to further developing my skills.",
},
{
  title: "2022 - Coordinator at Blue Cross",
  description: "Responsible for recruiting, organizing and following up a few hundred volunteers in multiple different activities for low income families and people struggling with an addiction.",
},
{
  title: "2021 - Advisor at Red Cross",
  description: "Responsible for organizing free vacations for over hundred low-income families, which also involved recruiting and organizing volunteers for 10 vacations during a year.",
},
{
  title: "Prior of 2021 - Different jobs in different sectors",
  description: "Controller for Oslo Municipality, innovation consultant in Norwegian Church Aid, assistent in a psychiatry, assistent in a kindergarden++ ",
},
];

const education = [{
  title: "2022 - 2023: Brights",
  description: "Accelerated learning course in JavaScript containing over 500 hours of active learning and coding.",
},
{
  title: "2018 - 2020: Global Development Studies at NMBU",
  description: "Masters Degree in Global Development Studies.",
},
{
  title: "2015 - 2018: Development Studies at OsloMet",
  description: "Bachelor Degree in International Development Studies.",
},
];

const skills = [{
  skill: 'Languages',
  info: {
    text: `
    With my experience in HTML5, CSS3, JavaScript, TypeScript, and PostgreSQL, I offer a solid foundation to bring your web projects to life. 
    By harnessing the power of these technologies, I can create visually appealing and interactive websites that captivate your audience. 
    Whether you're seeking stunning designs, seamless user interactions, or robust data management, I have the skills necessary to deliver exceptional results. 
    `,
    icons: [
            <FontAwesomeIcon icon={faHtml5}  style={{color: "#f06529",}}/>,
            <FontAwesomeIcon icon={faCss3} style={{color: "#264de4",}}/>,
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <TypescriptColor />,
            <img src={postgreSQLLogo} alt='PostgreSQL logo' />,
          ]
  }},
  {skill: 'Frameworks and clouds',
  info: {
    text: `
    I have honed my skills in building responsive websites that effectively scale across devices using popular frameworks such as React, Angular, or Vue.js. 
    In addition, I have experience working with backend technologies like Node.js, Express.js, and databases such as PostgreSQL and Firebase. 
    I am passionate about creating exceptional digital experiences and always strive to stay updated with the latest industry trends and best practices.
    `,
    icons: [
            <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB",}} />,
            <FontAwesomeIcon icon={faNode} style={{color: "#68a063"}} />,
            <img src={reduxIMG} alt='Redux logo' />,
            <img src={expressIMG} alt='Express logo' />,
            <img src={firebaseLogo} alt='Firebase logo' />, 
          ],
  }},
  {skill: 'Libraries and tools',
  info: {
    text: `I have gained expertise in leveraging Bootstrap, NPM, Sass, Stripe, and Styled Components to enhance web development projects. 
    Utilizing Bootstrap, I create designs that are not only responsive but also visually appealing. 
    NPM helps me efficiently manage dependencies and integrate valuable packages. With Sass or styled components, I streamline the CSS workflow by taking advantage of its advanced features. 
    Integrating Stripe ensures secure and seamless online payments.
    `,
    icons: [
            <FontAwesomeIcon icon={faBootstrap} style={{color: "#563d7c",}} />,
            <FontAwesomeIcon icon={faNpm} style={{color: "#CC3534"}} />,
            <FontAwesomeIcon icon={faSass} style={{color: "#CD6799"}} />,
            <FontAwesomeIcon icon={faStripe} style={{color: "#A976A3",}} />,
            <img src={styledComponentsIMG} alt='Styled Components logo' />,
          ],
  }},
]


const projects = [{
  project: `E-commerce App`,
  info: `The application is built on React-Redux and uses FireBase and FireStore for the database and authenication of users. 
        Stripe allows for payment of products.`, 
  img: `${eCommerceIMG}`,
  alt: `E-commerce App`,
  website: `https://papaya-yeot-fb6b77.netlify.app/`,
  joke: false, 
  github: `https://github.com/IrgenWiigSorensen/My-E-Commerce-App`  
}, {
  project: `Remembr'All`,
  info: `A 10-day exam project: A web-based platform that allows users to set reminders that notify based on desired time and location.
          React, NodeJS, Express, Nodemailer, Google maps API ++`, 
  img: `${remembrallIMG}`,
  alt: `Remembrall`, 
  website: `https://remembrallfrontend.onrender.com/`,
  joke: false, 
  github: `https://github.com/IrgenWiigSorensen/Remembrall-FrontEnd`   
}, {
  project: `Small projects`,
  info: `Small projects for updating my skills with JavaScript. Press if you wanna hear a joke =)`, 
  img: `${jokeTellerIMG}`,
  alt: `Remembrall`,
  website: "",
  joke: true, 
  github: `https://github.com/IrgenWiigSorensen/Small-Projects`  
}]


export {
  introdata,
  socialprofils,
  workExperience,
  education,
  skills,
  projects
};

// Let's collaborate to turn your web ideas into reality and make a lasting impact online.

// I specialize in building responsive websites that are designed to scale effectively across various devices and screen sizes. My development process incorporates modern frameworks and technologies to ensure optimal performance and user experience.

// On the front-end, I utilize industry-standard frameworks and libraries, such as React, Angular, or Vue.js, to create dynamic and interactive user interfaces. These frameworks enable me to build responsive designs that adapt seamlessly to different devices, including desktops, tablets, and smartphones.

// For the back-end, I have extensive experience in developing robust application backends using Node.js and Express.js. These technologies allow me to build scalable and efficient server-side solutions, ensuring high-performance and smooth data handling.

// In terms of databases, I have proficiency in working with both relational databases, such as PostgreSQL, as well as NoSQL databases like Firebase. I can design and implement database structures that align with your application's requirements, providing efficient data storage and retrieval.

// By leveraging these technologies and frameworks, I can deliver modern and feature-rich web applications that cater to your specific needs. Whether you require a custom e-commerce platform, a content management system, or any other type of web application, I have the skills and expertise to bring your vision to life.

// I am passionate about creating exceptional digital experiences and always strive to stay updated with the latest industry trends and best practices. Let's collaborate to build a powerful and visually appealing website that stands out and achieves your business goals.