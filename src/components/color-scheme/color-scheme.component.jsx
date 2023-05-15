import { useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from   "@fortawesome/free-solid-svg-icons";
import { useContext } from "react"
import { ColorSchemeContext } from "../../contexts/color-scheme.context";

import './color-scheme.styles.scss'

const ColorScheme = () => {

  const { isDark, toggleColorScheme } = useContext(ColorSchemeContext) 

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);


  // const toggleColor = () => {
  //   setIsDark(!isDark);
  // }


  return (
    <>
      {isDark ? 
      <div onClick={toggleColorScheme} className='color-scheme-box'><FontAwesomeIcon icon={faMoon} style={{color: "#000",}}/></div> : 
      <div onClick={toggleColorScheme} className='color-scheme-box'><FontAwesomeIcon icon={faSun}/></div>}
    </>
  )
}

export default ColorScheme;