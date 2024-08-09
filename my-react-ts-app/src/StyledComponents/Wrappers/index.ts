import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const DateWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`

export const CardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
` 

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
` 

export const InputWrapper = styled.div`
height: 50px;
  position: relative;
  margin-bottom: 20px; /* Добавьте отступ между полями */
`
