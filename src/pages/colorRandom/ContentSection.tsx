import { useTranslation } from 'react-i18next'

const ContentSection = () => {
      const {t} = useTranslation()
  return (
    <>
     <div className="flex flex-col gap-3 m-2">
       <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Генератор случайных цветов')}</h2>
        <p>{t('текст8')}</p>
      </section>
      
      
      
       <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Как работает генератор случайных цветов?')}</h2>
        <p>{t('Генератор случайных цветов основывается на принципах случайного выбора значений для цветов.')}</p>
      </section>
       <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Где используется генератор случайных цветов?')}</h2>
        <p>{t('Генераторы случайных цветов находят применение в различных областях:')}</p>
        
        <ul className="ml-4 list-decimal">
        <li>{t('Веб-разработка — для создания уникальных фонов, кнопок или графических элементов на страницах.')}</li>
        <li>{t('Графический дизайн — для генерации палитры цветов для проектов, например, при создании логотипов или иллюстраций.')}</li>
        <li>{t('Тестирование интерфейсов — случайные цвета могут использоваться для проверки отображения элементов на экране.')}</li>
        <li>{t('Игровая индустрия — случайные цвета могут использоваться для создания случайных эффектов в играх, например, при генерации игровых объектов.')}</li>
        <li>{t('Творчество и генеративное искусство — генерация случайных цветов может использоваться для создания уникальных художественных произведений.')}</li>
        </ul>
        
        
      </section>
       <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Заключение')}</h2>
        <p>{t('текст9')}</p>
      </section>
      
       </div>
    
    
    
    
    
    
    
    </>
  )
}

export default ContentSection