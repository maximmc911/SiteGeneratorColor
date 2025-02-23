
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  HandleGenerationColor: () => void;
  title: string;
}

const Button = ({ HandleGenerationColor, title }: ButtonProps) => {
      const {t} = useTranslation();

  return (
    <>
      <button className="p-4 bg-green-500 cursor-pointer rounded-4xl" onClick={()=> HandleGenerationColor()}>{t(title)}</button>
    </>
  )
}

export default Button