import './sidebar-icons.styles.scss'

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from '../../content.options'; 

const SidebarIcons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
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
      <p>Follow Me</p>
    </div>
  );
};

export default SidebarIcons;