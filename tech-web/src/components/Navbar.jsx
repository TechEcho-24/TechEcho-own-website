import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    let [activePage , setActivePage] = useState('home')
  return (
    <div className='flex justify-between items-center py-6'>
        <div>
        <img src={logo} alt="" className='w-16'/>
        
        </div>
        <ul className='flex navbar'>
            <li onClick={()=>setActivePage('home')} className={activePage === 'home'?'active' : ''}>Home</li>
            <li onClick={()=>setActivePage('service')} className={activePage === 'service'?'active' : ''}>Services</li>
            <li onClick={()=>setActivePage('support')} className={activePage === 'support'?'active' : ''}>Support</li>
            <li onClick={()=>setActivePage('about')} className={activePage === 'about'?'active' : ''}>About us</li>
            <li onClick={()=>setActivePage('contact')} className={activePage === 'contact'?'active' : ''}>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar
