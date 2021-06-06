
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Lanzamientos from './components/Lanzamientos'
import Populares from './components/Populares'
import Buscar from './components/Buscar'

//COMPONENTS:
  //HOME
  //NAV
  //BUSQUEDA
  //SECCION PPAL?
  //DETALLES DE PELIS
  //LANZAMIENTOS
  //POPULARES
  //MEJOR PUNTUADAS
  //FOOTER
  //404

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/lanzamientos" component={Lanzamientos}/>
        <Route exact path="/populares" component={Populares}/>
        <Route exact path="/buscar" component={Buscar}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
