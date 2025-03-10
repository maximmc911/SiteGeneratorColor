import { useTranslation } from "react-i18next"
import ContentSection from "./ContentSection"
import FormGradient from "./FormGradient"

const GradientPage = () => {
        const {t} = useTranslation()
  return (
    <>
       <div className="flex flex-col gap-3 m-2">
       <h1 className="text-2xl text-center">{t("Генератор линейных и радиальных градиентов")}</h1>
      <ContentSection/> 
      <div className="flex flex-wrap justify-around gap-3">
        <FormGradient title={`сгенерировать линейный градиент`} gradient={`linear`}/>
        <FormGradient title={`сгенерировать радиальный градиент`} gradient={`radial`}/>
      </div>
      </div>
    </>
  )
}

export default GradientPage