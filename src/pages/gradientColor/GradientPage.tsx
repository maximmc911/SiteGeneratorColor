import { useTranslation } from "react-i18next"
import ContentSection from "./ContentSection"

const GradientPage = () => {
        const {t} = useTranslation()
  return (
    <>
       <div className="flex flex-col gap-3 m-2">
       <h1 className="text-2xl text-center">{t(`Генератор линейных и радиальных градиентов`)}</h1>
      <ContentSection/> 
      </div>
    </>
  )
}

export default GradientPage