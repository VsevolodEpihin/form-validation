import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { formStore } from '../../store/FormStore';

import {
  FormBox, 
  DateWrapper,
  InputField,
  CardWrapper,
  ButtonWrapper,
  ButtonReset,
  ButtonSave,
} from './index';

const Form = observer(() => {
  const { t } = useTranslation();

  const handleResetClick = () => {
    formStore.reset();
  };

  return (
    <FormBox>
      <p>{t('User')}:</p>
        <InputField type='firstName' placeholder={t('first name')} />
        <InputField type='lastName' placeholder={t('last name')} />
      <p>{t('Date')}:</p>
      <DateWrapper>
        <InputField type='day' placeholder={t('day')} />
        <InputField type='month' placeholder={t('month')} />
        <InputField mask='9999' type='year' placeholder={t('year')} />
      </DateWrapper>
      <CardWrapper>
        <p>{t('Number Card')}:</p>
        <InputField mask='9999-9999-9999-9999' type='numberCard' placeholder={t('Number Card')} />
        <InputField mask='999' type='cvv' placeholder={t('CVV')} />
      </CardWrapper>
      <p>{t('Phone')}:</p>
      <InputField mask='+9 (999) 999-99-99' type='phone' placeholder={t('Phone')} />
      <p>{t('Email')}:</p>
      <InputField type='email' placeholder={t('Email')} />
      <ButtonWrapper>
        <ButtonSave
          onClick={() => {}}
          disabled={!formStore.isFormValid()}
        >
          {t('Save')}
        </ButtonSave>
        <ButtonReset onClick={handleResetClick}>{t('Reset')}</ButtonReset>
      </ButtonWrapper>
    </FormBox>
  );
});

export default Form;
