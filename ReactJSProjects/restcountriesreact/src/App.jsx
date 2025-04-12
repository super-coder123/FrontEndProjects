import './App.css'
import Header from './components/Header'
import Details from './components/Details'
import CountriesList from './components/CountriesList'
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './components/Context';


function App() {
 

  return (
     <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CountriesList/>}/>
            <Route path="/details/:countryCode" element={<Details />} /> 
          </Routes>
        </BrowserRouter>
     </ThemeProvider>

  )
}

export default App
