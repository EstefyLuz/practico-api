// título del dashboard y cualquier información adicional, como la ubicación actual y los botones
import React from "react";

const ubicacion = "Buenos Aires";
const fecha = "Septiembre";
const cambiarUbicacion = () => {
    // cambiar
    return "UBICACION NUEVA"
}
// definir evento cambiarUbicacion en App.js
function General (){
    return (
        <header>
            <h1>DASHBOARD DEL CLIMA</h1>
            <p>HOY ES: {fecha}</p>
            <button onClick={cambiarUbicacion}> ELEGIR UBICACION </button>
            <p>MI UBICACION: {ubicacion}</p>
            
        </header>
    );
}

export default General;