"use client"

import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { BellDot, Settings } from 'lucide-react';
import ThemeToggler from './ThemeToggler';
import MobileMenu from './MobileMenu';
import moment from 'moment';



function Header() {
  return ( 
      <header className='flex flex-row py-8  items-center  '>
      
         
          <div className='flex xl:flex-row flex-col xl:items-center items-start w-full space-y-3 xl:space-y-0 justify-between  '>
              
            <div className='flex items-center justify-between w-full text-right '>
                  <div className='flex items-center   flex-col xl:hidden'>
                  <Image width={150} height={20} src={'/logo.png'} className=' mb-2 dark:invert' alt='SpArts Logo'></Image>
                      {moment().format("ddd, MMM D")}
                      </div>
            <div className='flex flex-col '>    
            <h1 className='xl:text-5xl text-xl md:text-2xl font-semibold'>Welcome John</h1>
            <h1 className='xl:text-xl text-xs md:text-xl'>Here is a summary of your business. </h1>
                  </div>
                  </div>
              <div className='flex xl:flex-row sm:flex-row flex-col space-y-4 xl:space-y-0 justify-between w-full '>
                  <div className='flex items-center justify-between space-x-3'>
                      <div className='flex xl:hidden '>
                          <MobileMenu/>
                      </div>
                      <ThemeToggler />
                      <Button className='rounded-full h-[3rem] w-[3rem] '>
                      < Settings />
                      </Button> 
                      <Button className='rounded-full h-[3rem] w-[3rem]'>
                          <BellDot/>
                      </Button> 
                  </div>
                  <div className='flex space-x-3'>
                      <img className='rounded-full object-cover h-12 w-12 ' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                      <div className='flex flex-col'>
                      <h4 className='font-medium'> john Doe</h4>
                      <h5>johndoe@gmail.com</h5></div>
                  </div>
              </div>  
         </div>
    </header>
  )
}

export default Header