import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Navegar from './components/Navegar';

function App() {

  const [state,setState] = useState([
    {
      id:1,
      personaje:"Mario Bros",
      edad:"123",
    },
    {
      id:2,
      personaje:"Sonic",
      edad:"456",
    },
  ])

  return (
    <div className="App">
      {/* WRAPER RUTAS */}
      <BrowserRouter>
        <Navegar/>
        <Routes>
          <Route path='/home' element={<Home state={state[0].id} />}></Route>
          <Route path='/about/:numero' element={<About state={state}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
