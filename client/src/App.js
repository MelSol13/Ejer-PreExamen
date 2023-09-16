import logo from './logo.svg';
import './App.css';
import{Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NuevaReceta from './components/NuevaReceta';
import InfoReceta from './components/InfoReceta';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/recetas/nueva' element={<NuevaReceta/>}/>
        <Route path='/receta/:id' element={<InfoReceta/>}/>
      </Routes>
    </div>
  );
}

export default App;
