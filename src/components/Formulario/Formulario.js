import "./Formulario.css";
const Formulario = ({tareas, setTareas}) => {
    const agregarTarea = (e) => {
        setTareas([
            ...tareas,
            {
              tareas: e.target.tarea.value,
            },
          ]);
    }
    return (
        <>
            <form onSubmit={agregarTarea}>
                <input type="text" name="tarea" class="u-full-width"></input>
                <button class="u-full-width button-primary">Agregar tarea</button>
            </form>
        </>
    )
}
export default Formulario;