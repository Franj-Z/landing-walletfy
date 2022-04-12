import React from 'react';
import Botonera from './componentes/Botonera';
import Contactos from './componentes/Contactos';
import SobreNosotros from './componentes/SobreNosotros';
import Inicio from './componentes/Inicio';
import Footer from './componentes/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Botonera/>
            <Routes>
                  <Route path='/contactos' element={<Contactos/>}/>
                  <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
                  <Route path='/' element={<Inicio/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
