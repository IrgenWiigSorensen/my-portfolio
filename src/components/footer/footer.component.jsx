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
      <p className='footer-copyright'> © Irgen Wiig Sørensen. All rights reserved</p>
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
      
          <h1 className='footer-logo-name'>IWS Design</h1>
      </div>
    </footer>
  )
};

export default Footer; 