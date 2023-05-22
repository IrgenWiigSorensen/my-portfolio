import './footer.styles.scss'

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from '../../content.options'; 

const Footer = () => {

  return (
    <footer>
      <div  className='footer-section'>
        <h1 className='footer-logo-name'>IWS Design</h1>
        <ul className='footer-follow-icons'>
          {socialprofils.github && (
            <li>
              <a href={socialprofils.github}>
                <FaGithub />
              </a>
            </li>
          )}
          {socialprofils.linkedin && (
            <li>
              <a href={socialprofils.linkedin}>
                <FaLinkedin />
              </a>
            </li>
          )}
        </ul>
      
        <p className='footer-copyright'> © Irgen Wiig Sørensen. All rights reserved.</p>
      </div>
    </footer>
  )
};

export default Footer; 