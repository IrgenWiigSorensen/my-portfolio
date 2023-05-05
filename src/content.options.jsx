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
  aboutMe: `I'm a fullstack developer working with languages like TypeScript and JavaScript, and frameworks like React and Node.js.
            After graduating from NMBU with a masters degree in global development studies i spent a couple of years working for Red Cross and Blue Cross with different 
            humantitarian activites for children and low income families. 
            In the summer of 2022, I decided that it's time for me to go fulltime into IT and in February 2023 I graduated from Brights's accelerated learning program. 
            The program contained over 500 hours with active learning around the languages JavasCript, CSS and HTML - creating front-end design in React, and back end with Node.JS and postgreSQL. 
            I love learning and jumping into new and exciting projects, as well as that my background from a multitude of different sectors, allows me to quickly join any team in their ongoing processes.
            Take a look around and contact me if I seem like a good fit for your team.`
};

const socialprofils = {
  github: "https://github.com/IrgenWiigSorensen",
  linkedin: "http://www.linkedin.com/in/irgen-wiig-s%C3%B8rensen",
};

const workExperience = [{
  title: "2023 - JavaScript Consultant at Academic Work",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
  title: "2022 - Coordinator at Blue Cross",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
  title: "2021 - Advisor at Red Cross",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
  description: "Masters Degree in Global Development Studies",
},
{
  title: "2015 - 2018: Development Studies at OsloMet",
  description: "Bachelor Degree in International Development Studies",
},
];

const skills = [{
  skill: 'Languages',
  info: {
    text: `I have experience working with languages like HTML5, CSS3, JavaScript, TypeScript and PostgreSQl`,
    icons: [
            <FontAwesomeIcon icon={faHtml5}  style={{color: "#f06529",}}/>,
            <FontAwesomeIcon icon={faCss3} style={{color: "#264de4",}}/>,
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <TypescriptColor />,
            <img src={postgreSQLLogo} alt='PostgreSQL logo' />,
          ]
  }},
  {skill: 'Frameworks',
  info: {
    text: `My building responsive websites front-end using React-Redux.... 
            Creating application backend in Node, Express & PostgreSQL as well as FireBase`,
    icons: [
            <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB",}} />,
            <FontAwesomeIcon icon={faNode} style={{color: "#68a063"}} />,
            <img src={reduxIMG} alt='Redux logo' />,
            <img src={expressIMG} alt='Express logo' />,
            <img src={firebaseLogo} alt='Firebase logo' />, 
          ],
  }},
  {skill: 'Libraries, clouds++',
  info: {
    text: `Experience with designing attractive and minimalistic user interface for mobile and web applications.  `,
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
  project: `Remebr'All`,
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