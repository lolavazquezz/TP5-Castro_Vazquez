import "./Tarea.css";
const Tarea = ({tareas}) => {
    function tachar(id){
        const index = tareas.findIndex(tareas => tareas.id === id);
        let estilo = "";
        let checkeado = "";
        if (index !== -1) {
            tareas[index].tachado = !tareas[index].tachado;
            tareas[index].tachado = tareas[index].tachado ? Date.now() : undefined;
        }
        if (tareas.tachado){
            estilo = "text-decoration: line-through";
            checkeado = "checked"
            tareas.fechaTachado = Date.now()
        }
    }
    return (
        <input checkeado type="checkbox"onclick={tachar(tareas.id)}><span style={estilo}>{tareas}</span></input>
    )
}
export default Tarea;