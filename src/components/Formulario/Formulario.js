import "./Formulario.css";
const Formulario = ({tareas, setTareas, tachado, setTachado}) => {
    const agregarTarea = (e) => {
        e.preventDefault();
        if (setTachado){
            setTareas([
                ...tareas,
                {
                  tarea: e.target.tarea.value,
                  id: Date.now(),
                  tachado: false,
                  fecha: Date.now(),
                  fechaTachado: null,
                },
            ]);
        }
        
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