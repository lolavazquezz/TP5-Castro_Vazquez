import "./Boton.css";
import React from "react";
import { useState } from 'react';
function Boton({tareas, setTareas}){
    let [tareaRapida, setTareaRapida] = useState();
    function tareaMasRapida(){
        let rapida = 9999999999999999999999999999;
        let nom = "";
        tareas.filter(tareas => tareas.fechaTachado !== undefined).forEach(n=>{
            if (n.fechaTachado - n.fecha < rapida) {
                rapida = n.fechaTachado - n.fecha;
                nom = n.tarea;
            }
        })
        setTareaRapida(nom);
       
    }
    return (
        <>
            <button onClick={tareaMasRapida} >Calcular tarea más rápida</button>
            {tareaRapida ? <h3>La tarea más rápida en realizarse fue: {tareaRapida}</h3> : <></>}
        </>
    );

}
export default Boton;