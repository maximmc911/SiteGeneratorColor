import { useTranslation } from "react-i18next"


const MainPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <div className="flex flex-col gap-3 m-2">
      <h1 className="text-2xl text-center">{t('Генератор случайных цветов и линейных градиентов')}</h1>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('История появления шестнадцатиричного представления цветов (HEX)')}</h2>
        <p>{t('текст')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Происхождение и развитие цветовых систем')}</h2>
        <p>{t('текст1')}</p>
      </section>
      
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Цвета в ранних вычислительных системах:')}</h2>
        <p>{t('текст2')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('RGB-система (Красный, Зеленый, Синий):')}</h2>
        <p>{t('текст3')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Шестнадцатеричное представление цветов (HEX)')}</h2>
        <p>{t('текст4')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Формат HEX')} </h2>
        <p>{t('текст5')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Почему HEX')} ?</h2>
        <p>{t('Шестнадцатеричное представление цвета стало популярным по ряду причин:')}</p>
        <ul className="ml-4 list-decimal">
          <li>{t('Компактность')}</li>
          <li>{t('HEX-код гораздо короче, чем его десятичное представление, особенно когда речь идет о графических редакторах или веб-разработке.')}</li>
          <li>{t('Совместимость')}</li>
          <li>{t('HEX-коды легко интерпретируются большинством программных средств, веб-браузеров и редакторов.')}</li>
          <li>{t('Гибкость')}</li>
          <li>{t('Шестнадцатеричная система позволяет легко работать с цветами, когда необходимо точно настроить их значения.')}</li>
          <li>{t('HEX-коды используются не только в веб-разработке, но и в графических редакторах, а также в приложениях для редактирования изображений.')}</li>
        </ul>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Цвета и их значение в дизайне')}</h2>
        <p>{t('текст6')}</p>
      </section>
      <section className='flex flex-col gap-2.5'>
        <h2 className="text-xl">{t('Заключение')}</h2>
        <p>{t('текст7')}</p>
      </section>
    </div>
    </>
  )
}

export default MainPage