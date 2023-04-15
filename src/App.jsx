import './App.css'
import { Route,  Routes , useLocation} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Mas from './components/Mas/Mas';
import Nav from './components/Nav/Nav';
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Nav/>
      <AnimatePresence>

        <Routes location={location} key={location.pathname}>  
        <Route path='/portafolio/' element={<Inicio/>}/>   
        <Route path='/portafolio/proyectos' element={<Proyectos/>}/>
        <Route path='/portafolio/sobremi' element={<SobreMi/>}/>
        <Route path='/portafolio/mas' element={<Mas/>}/> 
        </Routes>
      </AnimatePresence>
      
    </div>
  )
}

export default App
