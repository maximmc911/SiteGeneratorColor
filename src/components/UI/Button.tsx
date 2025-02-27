
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  HandleGenerationColor: () => void;
  title: string;
}

const Button = ({ HandleGenerationColor, title }: ButtonProps) => {
      const {t} = useTranslation();

  return (
    <>
      <button className="p-4 bg-[#8BC34A] duration-100 cursor-pointer rounded-4xl hover:bg-[#7CB342] hover:duration-100" onClick={()=> HandleGenerationColor()}>{t(title)}</button>
    </>
  )
}

export default Button