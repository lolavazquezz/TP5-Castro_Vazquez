import "./Tarea.css";
import { useState } from "react";
const Tarea = ({ tareas, setTareas}) => {
  let [tachado, setTachado] = useState(false);
  function tachar(id) {
    const index = setTareas.findIndex((setTareas) => tareas.id === id);// NO FUCNIONA
    if (index !== -1) {
      setTachado((tachado = !tachado));
    }
    if (tachado) {
      tareas.fechaTachado = Date.now();
    }
  }
  return (
    <>
      {tachado ? (
        <div>
          <input
            checked
            type="checkbox"
            onClick={() => tachar(tareas.id)}
            className="tachado"
          />
          <span>{tareas.tarea}</span>
        </div>
      ) : (
        <div>
          <input type="checkbox" onClick={() => tachar(tareas.id)} />
          <span>{tareas.tarea}</span>
        </div>
      )}
    </>
  );
};
export default Tarea;
