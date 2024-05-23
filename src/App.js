import './App.css';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Boton from './components/Boton/Boton';
import Tarea from './components/Tarea/Tarea';
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tachado, setTachado] = useState([]);
  return (
    <>
      <Titulo></Titulo>
      <Formulario tareas={tareas} setTareas={setTareas} tachado={tachado} setTachado={setTachado}></Formulario>
      <ul>
        {setTareas.map(c => <Tarea tareas={c.tareas}></Tarea>)}
      </ul>
      <Boton setTareas={setTareas}></Boton>
    </>
  );
}

export default App;