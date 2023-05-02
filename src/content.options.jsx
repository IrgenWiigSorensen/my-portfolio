import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJsSquare, faBootstrap, faStripe, faSass, faHtml5, faCss3, faNpm } from '@fortawesome/free-brands-svg-icons';
import typeScriptLogo from './assets/Typescript_logo_2020.svg'
import postgreSQLLogo from './assets/PostgreSQL_logo.svg'
import remembrallIMG from './assets/Remembrall3.png'


const introdata = {
  title: "I’m Irgen Wiig Sørensen",
  animated: {
      first: "I love coding",
      second: "I code cool websites",
      third: "I develop mobile apps",
      fourth: "I love to learn"
  },
  aboutMe: `I'm a fullstack software developer with experience in TypeScript and JavaScript, and frameworks like React and Node.js.
            After graduating from NMBU with a masters degree in global development studies i spent a couple of years working for Red Cross and Blue Cross with different 
            humantitarian activites for children and low income families. 
            In the summer of 2022, I decided that it's time for me to go fulltime into IT and in February 2023 I graduated from Brights's accelerated learning JavaScript program. 
            The program contained over 500 hours with active learning around the languages JavasCript, CSS and HTML - as well as frameworks like React and NodeJS.
            My background from a multitude of different sectors, allows me to quickly join any team in their ongoing processes.`
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
  title: "2020 - Advisor at Red Cross",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
  title: "2015 - 2018: International Development Studies at OsloMet",
  description: "Bachelor Degree in International Development Studies",
},
];

const skills = [{
  skill: 'Languages',
  info: {
    text: `Building responsive website front end using React-Redux. 
            Creating application backend in Node, Express & PostgreSQL `,
    icons: [
            <FontAwesomeIcon icon={faHtml5}  style={{color: "#f06529",}}/>,
            <FontAwesomeIcon icon={faCss3} style={{color: "#264de4",}}/>,
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <img src={typeScriptLogo} alt='typescript logo' />,
            <img src={postgreSQLLogo} alt='PostgreSQL logo' />
          ]
  }},
  {skill: 'Frameworks',
  info: {
    text: 'Here is my frameworks text option',
    icons: [
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB",}} />,
            <FontAwesomeIcon icon={faNode} style={{color: "#68a063"}} />
          ],
  }},
  {skill: 'Libraries etc.',
  info: {
    text: `- Designing highly attractive and minimalistic user interface for mobile and web applications. `,
    icons: [
            <FontAwesomeIcon icon={faNpm} style={{color: "#CC3534"}} />,
            <FontAwesomeIcon icon={faSass} style={{color: "#CD6799"}} />,
            <FontAwesomeIcon icon={faBootstrap} style={{color: "#563d7c",}} />,
            <FontAwesomeIcon icon={faStripe} style={{color: "#A976A3",}} />
          ],
  }},
]

const projects = [{
  project: `Remebr'all`,
  info: `A 10-day exam project: A web-based platform that allows users to set reminders that notify based on desired time and location.`, 
  img: `${remembrallIMG}`,
  alt: `Remembrall`  
}, {
  project: `Remebr'all`,
  info: "text", 
  img: `${remembrallIMG}`,
  alt: `Remembrall`  
}]


export {
  introdata,
  socialprofils,
  workExperience,
  education,
  skills,
  projects
};