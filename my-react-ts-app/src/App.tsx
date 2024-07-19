import './App.css';
import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { FormWrapper } from './StyledComponents/Wrappers';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <GlobalStyle />
      <FormWrapper>
        <Form/>
      </FormWrapper>
    </>
  )
}

export default App
