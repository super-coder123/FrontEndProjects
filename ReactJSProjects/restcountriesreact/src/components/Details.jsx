import { useEffect, useState } from "react";
import Header1 from "./Header1";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { useLocation,useNavigate} from "react-router-dom";
import "./Styles.css"
import { useTheme } from "./Context";


function Details() {
  const {darkMode,setDarkMode} = useTheme();
  const location = useLocation();
  const [country, setCountry] = useState(null); 
  const {countryCode}=useParams();
  const navigate=useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0])) 
      .catch((err) => console.error(err));
  }, [countryCode]);

  if (!country) return <p>Loading...</p>;
  // console.log(darkMode);
  return (
          <div className={`top-0 left-0 min-h-screen flex  flex-col w-screen mx-0 ${darkMode?"bg-gray-900 text-white" :"bg-gray-200 text-black"}`}>
              
              <div className=" w-full mb-3">
                <Header1 darkMode={darkMode} setDarkMode={setDarkMode}/>
              </div>
               
              <button onClick={() => navigate(-1)} className={`${darkMode?"but2":"but1"} p-2 rounded-md border`}>
                Back
              </button>

              <div className={`w-full mt-10 gap-6 ${darkMode?"bg-gray-900":"bg-gray-200"} flex flex-wrap px-2`}>
                 <img className="h-[350px] ml-10 shadow-md border-b-black w-[400px]" src={country.flags.svg} alt="image" />
                 <div className={`flex flex-col ml-10 items-start gap-2 ${darkMode?"text-white":"text-black"}`}>
                  <div className=" font-bold text-xl mb-10">{country?.name?.common || "Loading..."}</div>
                     
                     
                      <div className="flex justify-start gap-10 flex-wrap">
                         <div className="flex flex-col gap-5 items-start ">
                            <div className="text-center"><span className="font-bold">Native Name</span>:{country?.name?.nativeName && Object.values(country.name.nativeName)[0]?.common}</div>
                            <div className="text-center"><span className="font-bold">Population</span>: {country?.population.toLocaleString()}</div>
                            <div className="text-center"><span className="font-bold">Region</span>: {country?.region}</div>
                            <div className="text-center"><span className="font-bold">Sub Region</span>: {country?.subregion}</div>
                            <div className="text-center"><span className="font-bold">Capital</span>: {country?.capital[0]}</div>                 
                         </div>
                         <div className="flex flex-col gap-5 items-start ">
                            <div className="text-center"><span className="font-bold">Top Level Domain</span>: {country?.tld.join(', ')}</div>
                            <div className="text-center"><span className="font-bold">Currencies</span>: {country?.currencies && Object.values(country.currencies)[0]?.name}</div>
                            <div className="text-center"><span className="font-bold">Languages</span>: {country?.languages && Object.values(country.languages).join(", ")}</div>
                         </div>
                      </div>

                       <div className="flex items-start  flex-wrap mt-10 gap-1 text-center"><span className="font-bold">Border Countries</span>: 
                        {country?.borders?.length > 0 ? (country.borders.map((neighbour, index) => (

                            <Link to={`/details/${neighbour}`} key={index} className="border-none  font-bold mb-5 px-5 w-[100px] h-[30px] shadow-md cursor-pointer">
                                 {neighbour}
                            </Link>
                          ))
                         ) : (
                        <p>No neighboring countries</p>
                        )}
                      </div>
                   </div>
                 </div>
                  

          </div>

  );
}

export default Details;
