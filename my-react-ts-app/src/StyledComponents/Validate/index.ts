import styled from 'styled-components';

export const ValidateForm =styled.div`
  position: absolute;
  top: 100%; /* Размещаем под полем ввода */
  left: 0; /* Выравниваем по левому краю */
  width: 100%; /* Растягиваем на ширину поля ввода */
  border-radius: 5px;
  background-color: #ff6550;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  z-index: 10; /* Повышаем уровень, чтобы не перекрывалось другими элементами */
  box-sizing: border-box;
  animation: myAnim 2s ease 0s 1 normal forwards;
`
