import { useTranslation } from "react-i18next"
import ContentSection from "./ContentSection"
import { RandomGenerator } from "../../mixin/mixin";
import { useState } from "react";
import { GetColor } from "../../data/api";


const ColorRandomPage = () => {
  const {t} = useTranslation();
  const [makeColor, setMakeColor] = useState<string>(`inherit`)
  const [getColor, setGetColor] = useState<string>(``)
  const HandleGenerationColor = () : void =>{

    const color = RandomGenerator()

    function GetData (status: number , data : any) {
      if (status == 200) {
      
        
      setMakeColor(color)
      setGetColor(data.name.value  )
      
      
    }else{
      setGetColor(`не имеет точного названия` )
        setMakeColor(color)
        
  
      }
      
    }
    GetColor(color , GetData)
    
  }
  return (
    <>
       <div className="flex flex-col gap-3 m-2">
       <h1 className="text-2xl text-center">{t(`Генератор случайных цветов`)}</h1>
      <ContentSection/>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <button className="p-4 bg-green-500 cursor-pointer rounded-4xl" onClick={()=> HandleGenerationColor()}>{t('сгенерировать цвет')}</button>
    {
      makeColor=== "inherit" ? null :
        <div className="w-72 ">
          <div className="w-full h-28" style={{background: makeColor}} ></div>
          <p className="text-2xl">{t('цвет')} : {getColor} </p>
          <p className="text-2xl">{t('цвет')} :  {makeColor}</p>
        </div>
    }  
      </div>
       </div>
    </>
  )
}

export default ColorRandomPage