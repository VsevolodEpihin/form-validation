import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*
{
  margin: 0;
  padding: 0;
}

:root {
  --background-color: #ffffff; /* Цвет фона для светлой темы */
  --text-color: #493636; /* Цвет текста для светлой темы */
}

body {
  background-color: var(--background-color);
  color: var(--text-color)
}

p {
  margin-top: 10px;
}

button {


  &:hover{
  background: linear-gradient(90deg, #bb8 c8c, #cf9f9f, #cf9f9f, #585b5a););
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	transform: translate3d(0, 0, 0);
  }
}

form{
  background-color: var(--background-color);
  color: var(--text-color)
}

[data-theme="dark"] {
  --background-color: #000000;
  --text-сolor: #493636;
}

[data-theme="light"] {
  --background-color: #dbcaca;
  --text-сolor: #fffff;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateY(45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}


}

`
