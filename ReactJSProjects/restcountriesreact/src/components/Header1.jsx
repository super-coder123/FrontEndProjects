import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'
import { useTheme } from './Context'

function Header1({ darkMode, setDarkMode}) {
  return (
    <div className={`items-center m-0 p-0 box-border ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <div className={`top-0 left-0 w-full  ${darkMode ? "bg-gray-900" : "bg-gray-100"} flex p-3 justify-between items-start border-b-amber-50 `}>
        <Link to="/" className={`flex text ms-16 text-black text-2xl font-bold `}>
          <span className={`${darkMode?"text-white":"text-black"}`}>Where in the World?</span>
        </Link>

        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
     </div>
    
     
</div>

  )
}

export default Header1
