import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Boton from './components/Boton/Boton';
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
    <Titulo></Titulo>
    <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
    <Boton tareas={tareas}></Boton>
    </>
  );
}

export default App;
