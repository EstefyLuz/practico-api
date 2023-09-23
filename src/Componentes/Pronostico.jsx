// pronostico del dia
import React from 'react';
const tempPorHora = "TEMPERATURA POR HORA";
const horaDelDia = "HORARIO DEL DIA";

function Pronostico (){

    return (
        <header>
        <p>{tempPorHora}</p>
        <p>{horaDelDia}</p>
        </header>
    );
}

export default Pronostico;