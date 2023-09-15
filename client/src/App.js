import logo from './logo.svg';
import './App.css';
import{Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NuevaReceta from './components/NuevaReceta';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/recetas/nueva' element={<NuevaReceta/>}/>
      </Routes>
    </div>
  );
}

export default App;
