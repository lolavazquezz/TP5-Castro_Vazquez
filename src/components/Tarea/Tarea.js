import "./Tarea.css";
import { useState } from "react";
const Tarea = ({ tarea, tareas, setTareas}) => {
  let [tachado, setTachado] = useState(false);
  function tachar(id) {
    setTachado(!tachado);

    let tareasActualizado = tareas.map(t => t.id === id ? 
      {
        ...t,
        fechaTachado: !tachado ? Date.now() : undefined,
      } : t);
    
    setTareas(tareasActualizado)
  }
  return (
    <>
      {tachado ? (
        <div>
          <input
            checked
            type="checkbox"
            onClick={() => tachar(tarea.id)}
          />
          <span class="tachado">{tarea.tarea}</span>
        </div>
      ) : (
        <div>
          <input type="checkbox" onClick={() => tachar(tarea.id)} />
          <span>{tarea.tarea}</span>
        </div>
      )}
    </>
  );
};
export default Tarea;
