import './App.css';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Boton from './components/Boton/Boton';
import Tarea from './components/Tarea/Tarea';
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <Titulo></Titulo>
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <ul>
        {tareas.map(c => <Tarea tareas={c} setTareas={setTareas}></Tarea>)}
      </ul>
      <Boton setTareas={setTareas}></Boton>
    </>
  );
}

export default App;