// import React from 'react'
// import { useEffect } from "react"

// background: 
// background: ;

import {useNavigate} from "react-router-dom"
import Search from "./search"

function Nav() {
  const navigate = useNavigate();
  
  return (
    <div className=" h-[8.5rem] flex items-center justify-center  flex-col gap-0 bg-[rgb(118,149,229)]
    
    ">
         <div className="text-[2.4rem] tracking-widest">
            <p  onClick={()=>navigate("/")} className=" font-black cursor-pointer">POKEDEX</p> </div>
         <Search/>

    </div>
   
  )
}

export default Nav