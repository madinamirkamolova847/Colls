import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Information about drinks</h1>
       
        <Link to={"/coffee"}>
            <h3>Coffee</h3>
        </Link>
        
        <Link to={"/cold"}>
             <h3>Cold drinks</h3>
        </Link>
       
    
    </div>
  )
}

export default Navbar