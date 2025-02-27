import { useState } from "react"
import { useTranslation } from "react-i18next"


const ModalWindow = ({children}: { children: React.ReactNode}) => {
    const [OpenModal, setOpenModal] = useState(false)
    const {t} = useTranslation()
  return (
    <>
    
    <button className='underline cursor-pointer' onClick={()=> setOpenModal(true)}>{t('Узнать больше о генераторе')}</button>
{
    OpenModal ? <div onClick={()=> setOpenModal(false)} className="fixed top-0 left-0 w-full bg-gray-900 min-h-[100vh] flex items-center justify-center  text-[#2D2D2D]" >
        <div className="flex flex-col items-center w-1/2 gap-3 p-2 rounded bg-amber-50 max-sm:w-3/4 max-h-[90vh] overflow-auto" onClick={(event)=>event.stopPropagation()} >
            {
                children
            }
            
              <button className='underline cursor-pointer' onClick={()=> setOpenModal(false)}>{t('закрыть')}</button>
        </div>
    </div>
    :null
}
    </> 
  )
}

export default ModalWindow