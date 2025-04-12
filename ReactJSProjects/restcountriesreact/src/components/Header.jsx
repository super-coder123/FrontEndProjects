import React from 'react'
import DropdownMenu from './DropdownMenu'
import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'

function Header({ darkMode, setDarkMode,setSearchQuery, setSelectedRegion }) {
  console.log(darkMode);
  return (
    <div className={`items-center m-0 p-0 box-border ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <div className={`top-0 left-0 w-full  ${darkMode ? "bg-gray-900" : "bg-gray-100"} flex p-3 justify-between items-start border-b-amber-50 `}>
        <Link to="/" className={`flex text ms-16 text-black text-2xl font-bold `}>
          <span className={`${darkMode?"text-white":"text-black"}`}>Where in the World?</span>
        </Link>

        {/* <div className="flex text space-x-2 me-16 text-black font-bold dark:white "> 
          <i className="fa-solid fa-moon text-0.5xl text-gray-800 pt-0.5 mt-1"></i>
            <span>Light</span> 
        </div> */}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
     </div>
    
     <div className={`top-16 left-0 w-full flex justify-between px-16 py-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200"}z-0`}>
      
      <div className={`relative w-72 ${darkMode?"text-white":"text-black"}`}>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`w-full  pl-10 pr-3 py-2 border  ${darkMode?"border-gray-300":"border-gray- 600"} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-5 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
      </div>

       <div className={`${darkMode?"text-white":"text-black"}`}><DropdownMenu darkMode={darkMode} setSelectedRegion={setSelectedRegion}/></div>
     </div>
</div>

  )
}

export default Header
