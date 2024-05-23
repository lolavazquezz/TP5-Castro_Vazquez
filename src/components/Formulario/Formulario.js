import "./Formulario.css";
const Formulario = ({tareas, setTareas}) => {
    const agregarTarea = (e) => {
        e.preventDefault();
            setTareas([
                ...tareas,
                {
                  tarea: e.target.tarea.value,
                  id: Date.now(),
                  fecha: Date.now(),
                  fechaTachado: null,
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