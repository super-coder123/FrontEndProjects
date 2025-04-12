import { useCallback, useState ,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password,setpassword]=useState("");
  const [number, numberallowed]=useState(false);
  const [chari,chariallowed]=useState(false);
  const [length,setLength]=useState(8);
 
  const passwordref=useRef(null);

  const Passwordgenerator= useCallback(()=> {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(chari)
       str+="!@#$%^&*()-_{}[]><~`.";
    if(number)
       str+="1234567890";

    for(let i=1;i<=length;i++)
       {
         let char=Math.floor(Math.random()*str.length+1); 
         pass+=str.charAt(char);
       }
   setpassword(pass);
  },[length,setpassword,chari,number]);
  
  const copypassword=useCallback(()=> {
       passwordref.current?.select();
       passwordref.current?.setSelectionRange(0,999);
       window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=> {
     Passwordgenerator();
  },[number,chari,length,Passwordgenerator])
  return (
     
     <div className="w-screen h-screen bg-black flex  items-center">
          <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-800 text-orange-500">
       <h1 className='text-white text-center my-3'>Password generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copypassword}
        >copy</button>
        
    </div>
    
    <div className="flex text-sm gap-x-2">
       <div className="flex items-center gap-x-1">
          <input type="range" 
           min={6} 
           max={100} 
           value={length}
           className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
         />
       </div>
       <label>Label: {length} </label>
       <div className='flex items-center gap-x-1'>
         <input type="checkbox" 
           id="numberinput" 
           defaultChecked={number}
           onChange={()=> {
            numberallowed((prev)=>!prev)
           }}
         />
         <label htmlFor="numberinput">Numbers</label>
       </div>
       <div className='flex items-center gap-x-1'>
         <input type="checkbox"
          id="charinput" 
          defaultChecked={chari}
          onChange={()=> chariallowed((prev)=>!prev)}
        />
         <label htmlFor="numberinput">Characters</label>
       </div>
    </div>
   </div>
        
     </div>

     
  )
}

export default App
