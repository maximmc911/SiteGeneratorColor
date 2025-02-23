import React from 'react'
import { DarkMode } from '../darkMode/DarkMode'
import LangChoise from '../langChoise/LangChoise'
interface Props {
    children: React.ReactNode
}

const Navbar = ({children} : Props) => {
  return (
    <>
    
    <nav className="flex items-center  justify-between p-2.5 bg-gray-600 text-white dark:bg-gray-300 dark:text-black max-sm:block  ">
        <div className="" >
        <div className="hidden max-sm:flex max-sm:justify-between">
        <DarkMode/>
        <LangChoise/>
      </div>
        </div>
<div className="flex items-center gap-3 max-sm:justify-between">
    
      {children}
</div>
      <div className="flex items-center gap-5 max-sm:hidden">
        <DarkMode/>
        <LangChoise/>
      </div>
    </nav>
    </>
  )
}

export default Navbar