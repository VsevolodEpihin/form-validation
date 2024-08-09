import { useTranslation } from "react-i18next";
import { ValidateForm } from "../../StyledComponents/Validate";
import { FormField } from "../../types";

interface ValidateBoxProps {
  type: FormField;
  message: string;
}

const ValidateBox = ({ message }: ValidateBoxProps) => {
  const { t } = useTranslation()

  return(
    <ValidateForm>
      {t(message)}
    </ValidateForm>
  );
}

export default ValidateBox;
