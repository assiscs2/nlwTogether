import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {

  const [ theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter> 
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>  
      </BrowserRouter>
      </ThemeProvider>  
  );
}

export default App;
