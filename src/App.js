import React from 'react';
import Botonera from './componentes/Botonera';
import Contactos from './componentes/Contactos';
import SobreNosotros from './componentes/SobreNosotros';
import Inicio from './componentes/Inicio';
import Footer from './componentes/Footer';
import Contacto2 from './componentes/Contactos2';

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
                  <Route path='/contactos2' element={<Contacto2/>}/>
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
