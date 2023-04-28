import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJsSquare, faBootstrap, faStripe, faSass, faHtml5, faCss3, faNpm } from '@fortawesome/free-brands-svg-icons';
import typeScriptLogo from './assets/Typescript_logo_2020.svg'

const introdata = {
  title: "I’m Irgen Wiig Sørensen",
  animated: {
      first: "I love coding",
      second: "I code cool websites",
      third: "I develop mobile apps",
      fourth: "I love to learn"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
  aboutMe: "A masters degree in international development and started a new career for the love of programming. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum"
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
    text: "Here is my language text option",
    icons: [
            <FontAwesomeIcon icon={faHtml5}  style={{color: "#f06529",}}/>,
            <FontAwesomeIcon icon={faCss3} style={{color: "#264de4",}}/>,
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <img src={typeScriptLogo} alt='typescript logo' />
          ]
  }},
  {skill: 'Frameworks',
  info: {
    text: 'Here is my frameworks text option',
    icons: [
            <FontAwesomeIcon icon={faJsSquare}  style={{color: "#F0DB4F",}} />,
            <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB",}} />,
            <FontAwesomeIcon icon={faNode} style={{color: "#68a063",}} />
          ],
  }},
  {skill: 'Libraries etc.',
  info: {
    text: 'Here is my libraries text option',
    icons: [
            <FontAwesomeIcon icon={faNpm} />,
            <FontAwesomeIcon icon={faSass} />,
            <FontAwesomeIcon icon={faBootstrap} />,
            <FontAwesomeIcon icon={faStripe} />
          ],
  }},
]


export {
  introdata,
  socialprofils,
  workExperience,
  education,
  skills
};