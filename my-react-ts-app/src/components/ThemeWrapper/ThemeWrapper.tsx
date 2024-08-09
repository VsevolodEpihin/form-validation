import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Button } from "./index";

const ThemeWrapper = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return(
      <Button onClick = {toggleTheme}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </Button>
  )
}

export default ThemeWrapper;
