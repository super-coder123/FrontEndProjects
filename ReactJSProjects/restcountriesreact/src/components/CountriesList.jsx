import React, { useState } from 'react';
import Header from './Header';
import countriesdata from '../assets/data';
import Details from './Details';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from './Context';


function CountriesList() {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedRegion, setSelectedRegion] = useState("");
   const [data,setdata]=useState(countriesdata);

   const {darkMode,setDarkMode}=useTheme();

     useEffect(() => {
      const trimmedQuery = searchQuery.trim();
      setdata(countriesdata.filter((country) => country.name?.common?.toLowerCase().includes(trimmedQuery.toLowerCase())));
     }, [searchQuery]);

     useEffect(() => {
      setdata(selectedRegion===""?countriesdata:data.filter((country) => country?.region===selectedRegion));
     }, [selectedRegion]);
    
     


  return (
   <div className={`w-screen min-h-screen bg-repeat-y items-center top-0 left-0 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200"} `}>

          <div><Header darkMode={darkMode} setDarkMode={setDarkMode} setSearchQuery={setSearchQuery} setSelectedRegion={setSelectedRegion}/></div>
          <div className="flex justify-center items-center mx-auto flex-wrap gap-10 p-2">
            {data.map((country, index) => (
              <Link  to={`/details/${country.cca3}`} 
              key={index} className={`h-[370px] w-[250px] flex flex-col bg-gray-100  shadow-md rounded-lg ${darkMode?"bg-gray-800 text-white":"bg-gray-200 text-black"}`}>
                  <img src={country.flags.png} alt={`${country.name.common} flag`} className=" w-full border border-gray-500  h-40 object-cover rounded-md" />
                  <div className="details flex flex-col items-start mt-10 p-2">
                  <div className={`${darkMode?"text-white":"text-black"} mb-4 font-bold text-2xl`}>{country.name.common}</div>
                  <div className={`${darkMode?"text-white":"text-black"}`}>Population: {country.population.toLocaleString()}</div>
                  {country.capital && <div className={`${darkMode?"text-white":"text-black"}`}>Capital: {country.capital[0]}</div>}
                  {country.region && <div className={`${darkMode?"text-white":"text-black"}`}>Region: {country.region}</div>  }
                 </div>
              </Link>
            ))}
         </div>
    </div>
  );
}

export default CountriesList;
