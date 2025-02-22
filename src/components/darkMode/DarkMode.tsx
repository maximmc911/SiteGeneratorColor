import { useEffect } from 'react';
import { useState } from 'react';
import { UISwitch } from './SwitchMode';

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>  localStorage.getItem('theme')  ? localStorage.getItem('theme') === 'dark' : false );
  const [checked, setChecked] = useState(() =>   localStorage.getItem('theme') === 'dark' ? true : false );

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setIsDarkMode(!isDarkMode)
  };
 // Сохраняем выбранную тему в localStorage
 useEffect(() => {
   if (isDarkMode) {
     document.documentElement.classList.add('dark');
     localStorage.setItem('theme', 'dark');
   } else {
     document.documentElement.classList.remove('dark');
     localStorage.setItem('theme', 'light');
   }
 }, [isDarkMode]);

  return (

<UISwitch checked={checked} onChange={handleChange}/>
  
  )
}
