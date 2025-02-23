import { FaGithub, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
interface IconFavorite{
    color : string,
    size: number,
    nameIcon: string
}

const IconFavorite : React.FC<IconFavorite> = ({nameIcon , color , size} ) => {
  return (
    <>
  {nameIcon.toLocaleLowerCase() === 'tg'.toLocaleLowerCase() ?   <FaTelegram color={color} size={size}/> : null}
  {nameIcon.toLocaleLowerCase() === 'GitHub'.toLocaleLowerCase() ?   <FaGithub color={color} size={size}/> : null}
  {nameIcon.toLocaleLowerCase() === 'WhatsApp'.toLocaleLowerCase() ?   <IoLogoWhatsapp color={color} size={size}/> : null}
  
  
 
    </>
  )
}

export default IconFavorite