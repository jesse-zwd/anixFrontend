import { useEffect } from "react";
import Router from "./Router";
import changeTheme from "./utils/theme";
import useLocalStorage from "./hooks/useLocalStorage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [theme] = useLocalStorage("dark", "theme");

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
