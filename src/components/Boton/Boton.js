import "./Boton.css";
import React from "react";
import { useState } from 'react';
function Boton({setTareas}){
    let [tareaRapida, setTareaRapida] = useState([]);
    function tareaMasRapida(){
        let rapida = 9999999999999999999999999999;
        let nom = "";
        setTareas.filter(setTareas => setTareas.tareas.tachado).forEach(n=>{
            if (n.fechaTachado - n.fecha < rapida) {
                rapida = n.fechaTachado - n.fecha;
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