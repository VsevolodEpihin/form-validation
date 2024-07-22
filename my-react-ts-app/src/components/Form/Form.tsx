import { InputCVV, InputCard, InputDay, InputEmail, InputMonth, InputPhone, InputYear } from '../../StyledComponents/Input';
import { ButtonWrapper, CardWrapper } from '../../StyledComponents/Wrappers';

import { ButtonReset, ButtonSave } from './Buttons';
import { FormBox, DateWrapper, InputFirstName, InputLastName } from './index';

const Form = () => {
  return(
    <FormBox>
      <p>User:</p>
      <InputFirstName placeholder="first name" />
      <InputLastName placeholder="last name" />
      <p>Date:</p>
      <DateWrapper>
        <InputDay placeholder="day" />
        <InputMonth placeholder="month" />
        <InputYear placeholder="year" />
      </DateWrapper>
      <CardWrapper>
      <p>Number Card:</p>
        <InputCard placeholder="number card" />
        <InputCVV placeholder="CVV" />
      </CardWrapper>
      <p>Phone:</p>
      <InputPhone placeholder="phone" />
      <p>Email:</p>
      <InputEmail placeholder="email" />
      <ButtonWrapper>
        <ButtonSave>Сохранить</ButtonSave>
        <ButtonReset>Сбросить</ButtonReset>
      </ButtonWrapper>
    </FormBox>
  )
}

export default Form;
