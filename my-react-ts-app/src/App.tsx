import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { FormWrapper } from './StyledComponents/Wrappers';
import Form from './components/Form/Form';
import SwitchLanguage from './components/SwitchLanguage';
import './translate'
import ThemeProvider from './components/ThemeWrapper/ThemeProvider';
import ThemeWrapper from './components/ThemeWrapper/ThemeWrapper';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
        <ThemeWrapper></ThemeWrapper>
      <FormWrapper>
        <SwitchLanguage />
        <Form />
      </FormWrapper>
    </ThemeProvider>
  )
}

export default App;
