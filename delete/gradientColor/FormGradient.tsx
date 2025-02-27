import { useTranslation } from "react-i18next";
import Button from "../../components/UI/Button"
import { useState } from "react";
import { RandomGenerator } from "../../mixin/mixin";


const FormGradient = ({ title , gradient }: { title: string , gradient: string }) => {
  const [color, setColor] = useState('inherit')
         const {t} = useTranslation();
    const HandleGenerationColor = () =>{
      gradient ==="linear" ? setColor(`linear-gradient(45deg, ${RandomGenerator()}, ${RandomGenerator()} , ${RandomGenerator()})`) : setColor(`radial-gradient(${RandomGenerator()}, ${RandomGenerator()},  ${RandomGenerator()})`)
    }
  return (
    <>
      
<div className="flex flex-col items-center gap-3">
          <h1>  {t(title)} </h1>
       <Button title={title} HandleGenerationColor={HandleGenerationColor}/>
       {
        color === 'inherit' ? null :
        <> 
          <div className="w-[40vw] h-64" style={{background: color}}></div>
          
          <p>{t(title)} : {color} </p>
          </>
       }
        </div>
    </>
  )
}

export default FormGradient