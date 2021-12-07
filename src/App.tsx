import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from "./pages/NewRoom";
import { Home } from './pages/Home'

function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" children={NewRoom} />
      </BrowserRouter>
  );
}

export default App;
