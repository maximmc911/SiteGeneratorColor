import { useState } from 'react';
import SwitchController from './Switch'
import { useTranslation } from 'react-i18next'

const LangChoise = () => {
    const { i18n } = useTranslation();
    const [checked, setChecked] = useState(()=> i18n.language === `ru` ? true : false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          event.target.checked ? ( i18n.changeLanguage('ru') , setChecked(event.target.checked)) : (i18n.changeLanguage('en'), setChecked(event.target.checked))
          };
  return (
    <>
<SwitchController handleChange={handleChange} checked={checked}/>
        
    </>
  )
}

export default LangChoise