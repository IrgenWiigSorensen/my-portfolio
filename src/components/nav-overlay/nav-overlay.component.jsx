import { useContext } from "react"
import { OverlayContext } from "../../contexts/overlay.context";
import { Link } from 'react-scroll'

import './nav-overlay.styles.scss'


const NavOverlay = () => {
  const { isOverlayActive, triggerOverlay } = useContext(OverlayContext)

  return (
    <>
      {/* <!-- Menu Overlay --> */}
      <div className={`overlay ${isOverlayActive ? 'overlay-slide-right' : 'overlay-slide-left'}`}>
        {/* <!-- Menu Items --> */}
        <nav>
          <ul>
            <li className={`${isOverlayActive ? 'slide-in-1' : 'slide-out-1'}`}>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={triggerOverlay} >
                 Home
              </Link>
            </li>
            <li className={`${isOverlayActive ? 'slide-in-2' : 'slide-out-2'}`}>
              <Link to="about" spy={true} smooth={true} duration={500} onClick={triggerOverlay} >
                  About
              </Link>
            </li>
            <li className={`${isOverlayActive ? 'slide-in-3' : 'slide-out-3'}`}>
              <Link to="skills" spy={true} smooth={true} duration={500} onClick={triggerOverlay} >
                  Skills
              </Link>
            </li>
              <li className={`${isOverlayActive ? 'slide-in-4' : 'slide-out-4'}`}>
              <Link to="projects" spy={true} smooth={true} duration={500} onClick={triggerOverlay} >
                  Projects
              </Link>
            </li>
            <li className={`${isOverlayActive ? 'slide-in-5' : 'slide-out-5'}`}>
              <Link to="contact" spy={true} smooth={true} duration={500} onClick={triggerOverlay} >
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavOverlay
