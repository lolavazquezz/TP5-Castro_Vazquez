import "./Boton.css";
import React from "react";
import { useState } from 'react';
function Boton({tareas}){
    const [tareaRapida, setTareaRapida] = useState([]);
    function tareaMasRapida(){
        let rapida = 9999999999999999999999999999;
        let nom = "";
        tareas.filter(tareas => tareas.estaTachado).forEach(n=>{
            if (n.fechaTachado - n.fechaCreacion < rapida) {
                rapida = n.fechaTachado - n.fechaCreacion;
                nom = n.nombre;
            }
        })
        setTareaRapida(
            tareaRapida= nom
        );
       
    }
    return (
        <>
            <button onClick={tareaMasRapida} >Calcular tarea más rápida</button>
            {tareaRapida ? <h3>La tarea más rápida en realizarse fue: {tareaRapida}</h3> : <></>}
        </>
    );

}
export default Boton;