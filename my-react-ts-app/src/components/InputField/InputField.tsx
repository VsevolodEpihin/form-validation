import { observer } from "mobx-react-lite";
import InputMask from "react-input-mask";

import { formStore } from "../../store/FormStore";
import { EventInput, FormField } from "../../types";

import { Input, InputWrapper, ValidateBox } from "./index";

interface propsInputField {
  type: FormField;
  placeholder: string;
  mask?: string;
}

const InputField = observer(({ mask, type, placeholder }: propsInputField) => {

  const handleFormChange = (e: EventInput) => {
    const { dataset, value } = e.target;

    const fieldType = dataset.type as FormField;

    if (dataset.type) {
      formStore.setInputValue(fieldType, value);
      formStore.validateInputValue(type)
    }
  };
  console.log(mask)
  return(
    <InputWrapper>
      { mask === undefined ?
      <Input
        data-type={type}
        placeholder={placeholder}
        value={formStore[type]}
        onChange={handleFormChange}
      /> :
      <InputMask
        data-type={type}
        mask={mask}
        value={formStore[type]}
        placeholder={placeholder}
        onChange={handleFormChange}
        style={{
          "width": "80%",
          "position": "relative",
          "padding": "5px",
          "border-radius": "5px",
          "margin": "10px 5px",
        }}
      />
      }
      {formStore.errors[type] && 
      <ValidateBox
        type={type} 
        message={formStore.errors[type]} 
      />}
    </InputWrapper>
  )
})

export default InputField;
