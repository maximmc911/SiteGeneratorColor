
import { useTranslation } from 'react-i18next'
import GeneratorColor from './components/GeneratorColor'
import { cardObj, randomGeneratorCards } from '../../mixin/makeCards'

const MainPage = () => {
    const {t} = useTranslation()
  return (
    <>
        <h1 className='mt-3 mb-3 text-2xl font-bold text-center'>{t("Онлайн генератор случайных цветов и градиентов")}</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {
        randomGeneratorCards.map(((el :cardObj) => <GeneratorColor el={el} key={el.id}/>))
      }
      
    </div>
    </>
  )
}

export default MainPage