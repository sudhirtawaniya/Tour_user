
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';


function App() {
  return (
    <BrowserRouter basename="/React">
   <Routing/>
   </BrowserRouter>
  );
}

export default App;
