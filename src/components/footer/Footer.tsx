import IconFavorite from "../UI/IconFavorite"


const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 p-2 mt-2 text-white bg-gray-600 dark:bg-gray-300 dark:text-black">
        <p className="text-xl">&#169; 2025 by Maxim Sokolov </p>
        <a href="#Telegram" onClick={() => window.open("https://t.me/Maxmax_frontDev")}>
          <IconFavorite size={35} color="#1E90FF" nameIcon="tg" />
        </a>
        <a href="#GitHub" onClick={() => window.open("https://github.com/maximmc911")}> 
          
        <IconFavorite size={35} color="Black" nameIcon="GitHub" />
        </a>
        <a href="whatsapp://send?phone=+79175221282" className="cursor-pointer">
          <IconFavorite size={35} color="ForestGreen" nameIcon="WhatsApp" />
        </a>
      </div>
    </>
  )
}

export default Footer
