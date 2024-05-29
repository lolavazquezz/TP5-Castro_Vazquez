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
      <div class="botones">
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <Boton tareas={tareas} setTareas={setTareas}></Boton>
      </div>
      
      <ul>
        {tareas.map(c => <Tarea tarea={c} tareas={tareas} setTareas={setTareas}></Tarea>)}
      </ul>
    </>
  );
}

export default App;