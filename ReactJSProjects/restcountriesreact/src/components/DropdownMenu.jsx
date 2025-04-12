import { useState } from "react";

function DropdownMenu({setSelectedRegion,darkMode}) {

  return (
    <div>
          <select className="w-full " 
                  onChange={(e) => setSelectedRegion(e.target.value)}>

                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`}value="">Filter By Region</option>
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Africa">Africa</option>
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Antarctic">Antartica</option> 
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Asia">Asia</option> 
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Europe">Europe</option> 
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Americas">Americas</option> 
                    <option className={`block px-4 py-2 hover:bg-gray-100 ${darkMode?"text-white bg-gray-700":"text-black bg-gray-200"}`} value="Oceania">Oceania</option>      
          </select>
    
    </div>
    
  );
}

export default DropdownMenu;
