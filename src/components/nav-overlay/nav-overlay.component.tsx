import { useContext } from "react"
import { OverlayContext } from "../../contexts/overlay.context"

import './nav-overlay.styles.css'


const NavOverlay = () => {
  const { isOverlayActive } = useContext(OverlayContext)

  return (
    <>
      {/* <!-- Menu Overlay --> */}
      <div className={`overlay ${isOverlayActive ? 'overlay-slide-right' : 'overlay-slide-left'}`}>
        {/* <!-- Menu Items --> */}
        <nav>
          <ul>
            <li className={`${isOverlayActive ? 'slide-in-1' : 'slide-out-1'}`}><a href="#home">Home</a></li>
            <li className={`${isOverlayActive ? 'slide-in-2' : 'slide-out-2'}`}><a href="#about">About</a></li>
            <li className={`${isOverlayActive ? 'slide-in-3' : 'slide-out-3'}`}><a href="#skills">Skills</a></li>
            <li className={`${isOverlayActive ? 'slide-in-4' : 'slide-out-4'}`}><a href="#projects">Projects</a></li>
            <li className={`${isOverlayActive ? 'slide-in-5' : 'slide-out-5'}`}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavOverlay
