// import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/UI/Button'
import ModalWindow from '../../../components/UI/ModalWindow'
import GeneratorColorContent from './content/GeneratorColorContent'
import { cardObj } from '../../../mixin/makeCards'
import { useState } from 'react'


const GeneratorColor = ({el}:{el:cardObj}) => {
  const [BgColor, setBgColor] = useState('inherit')
  const {t} = useTranslation()
    const HandleGenerationColor = () =>{
      setBgColor(el.function())
      console.log(BgColor);
      
    }
  return (
    <>
    <div className="inline-block p-6 inset-shadow-sm rounded-3xl dark:bg-[#009688] bg-[#cda8a8]">
        <div className="flex flex-col items-center gap-3">
            <h1>{t(el.nameCard)}</h1>
            
        <Button title={el.nameBtn} HandleGenerationColor={HandleGenerationColor}/>
        <div className="rounded w-96 min-h-80 bg-[#E0E0E0] flex flex-col justify-center gap-3 items-center p-3 text-center dark:text-[#2D2D2D] max-sm:w-80" style={BgColor === 'inherit' ? {} : {background: BgColor}}>
          <h1>{t("Палитра для просмотра сгенерированного цвета")}</h1>
          { BgColor === 'inherit' ? null :
          <div className="">
            
          <h1>{t("цвет")} : {BgColor} </h1>
          </div>
            
          }
          
        </div>
        
      <ModalWindow >
    <GeneratorColorContent/>
      </ModalWindow>
        </div>
    </div>
    </>
  )
}

export default GeneratorColor