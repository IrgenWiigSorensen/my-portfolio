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


// const menuBars = document.getElementById('menu-bars');
// const overlay = document.getElementById('overlay');
// const nav1 = document.getElementById('nav-1');
// const nav2 = document.getElementById('nav-2');
// const nav3 = document.getElementById('nav-3');
// const nav4 = document.getElementById('nav-4');
// const nav5 = document.getElementById('nav-5');
// const navItems = [nav1, nav2, nav3, nav4, nav5]; 

// //Control Navigation Animation
// function navAnimation(direction1, direction2) {
//     navItems.forEach((nav, i) => {
//         nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
//     })
// }

// function toggleNav() {
//     //Toggle: Meny Bars open/closed
//     menuBars.classList.toggle('change'); 
//     //Toggle: Menu Active
//     overlay.classList.toggle('overlay-active'); 
//     if(overlay.classList.contains('overlay-active')) {
//         //Animate in - Overlay
//         overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
//         //Animate in - nav Items
//         navAnimation('out', 'in'); 
//     } else {
//         //Animate Out - Overlay
//         overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
//        //Animate out - nav Items
//         navAnimation('in', 'out'); 
//     }
// }

// //Event Listeners
// menuBars.addEventListener('click', toggleNav); 
// navItems.forEach((nav) => {
//     nav.addEventListener('click', toggleNav);
// });