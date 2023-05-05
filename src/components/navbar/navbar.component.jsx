import { useContext } from 'react'

import './navbar.styles.scss'
// import logo from './app-logo.png'
import { OverlayContext } from '../../contexts/overlay.context'
import SidebarIcons from '../sidebar-icons/sidebar-icons.component';
import ColorScheme from '../color-scheme/color-scheme.component';

const Navbar = () => {

  const { triggerOverlay, isOverlayActive } = useContext(OverlayContext);

  return(

    <>
      <div className="navbar-container">
        <a className='navbar-logo-name'>IWS Design</a>
        {/* <div className='navbar-logo-container'>
          <img src={logo} className='navbar-logo' alt='logo'></img>
        </div> */}

        <ColorScheme className='color-scheme' />


        {/* <!-- Nav-Menu Bars --> */}
        <div onClick={triggerOverlay} className="nav-menu-bars">
          <div className={`nav-menu-bar1 ${isOverlayActive && "change-bar1"}`}></div>
          <div className={`nav-menu-bar2 ${isOverlayActive && "change-bar2"}`}></div>
          <div className={`nav-menu-bar3 ${isOverlayActive && "change-bar3"}`}></div>
        </div>
      </div>
      <SidebarIcons/>
    </>
  )
}

export default Navbar

 

 