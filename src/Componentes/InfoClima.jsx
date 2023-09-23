// datos específicos del clima
import React from 'react';

const infoTitulo = "INFO titulo";
const infoNumero = "INFO numero";
const infoOtra = "INFO otra";

function InfoClima () {
    return (
    <header>
        <p>{infoTitulo}</p>
        <p>{infoNumero}</p>
        <p>{infoOtra}</p>
    </header>
    );
}

export default InfoClima;