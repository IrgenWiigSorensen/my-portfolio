import './nav.styles.css'

import logo from './app-logo.png'



const Nav = () => {
  return(
    <div className="nav-container">
      <div className='nav-logo-container'>
        <img src={logo} className='nav-logo'></img>
      </div>
      <div className='nav-links-container'>
        <div className='nav-link'><p>Welcome</p></div>
        <div className='nav-link'><p>Welcome</p></div>
        <div className='nav-link'><p>Welcome</p></div>
        <div className='nav-link'><p>Welcome</p></div>
      </div>
    </div>
  )
}

export default Nav; 