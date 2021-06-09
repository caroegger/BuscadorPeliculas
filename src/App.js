
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Lanzamientos from './components/Lanzamientos'
import Populares from './components/Populares'
import Buscar from './components/Buscar'
import MejorPuntuadas from './components/MejorPuntuadas'

//API KEY= 2d9a1d2ba98bd4f269229908068559f1

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/lanzamientos" component={Lanzamientos}/>
        <Route exact path="/populares" component={Populares}/>
        <Route exact path="/buscar" component={Buscar}/>
        <Route exact path="/mejor-puntuadas" component={MejorPuntuadas}/>
        {/* no olvidar footer y 404*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
