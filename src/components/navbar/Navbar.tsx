
import { DarkMode } from '../darkMode/DarkMode'
import LangChoise from '../langChoise/LangChoise'
import logo from '../../../public/logo/photo_2025-02-22_20-09-27.jpg'


const Navbar = () => {

  return (
    <>
    
    <nav className="flex items-center  justify-between p-2.5 bg-gray-600 text-white dark:bg-gray-300 dark:text-black  ">

<div className="flex items-center gap-3">
<img src={logo} alt="logo" className='w-16 rounded-full' />
<p className='text-2xl'> PaletteGen  </p>
</div>
      <div className="flex items-center justify-end gap-5 max-sm:flex-col max-sm:gap-1.5">
        <DarkMode/>
        <LangChoise/>
      </div>
    </nav>
    </>
  )
}

export default Navbar