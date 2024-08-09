import { useTranslation } from "react-i18next";
import { Button } from "../StyledComponents/Buttons";
import { ButtonWrapper } from "../StyledComponents/Wrappers";


const SwitchLanguage = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return(
    <ButtonWrapper>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('fr')}>France</Button>
      <Button onClick={() => changeLanguage('ru')}>Russian</Button>
    </ButtonWrapper>
  )
}

export default SwitchLanguage;
