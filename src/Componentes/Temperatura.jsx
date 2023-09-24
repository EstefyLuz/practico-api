// temperatura minima y maxima

import React from 'react';

const tempMaxima = "°C";
const tempMinima = "°C";

function Temperatura () {
    return (
        <header>
        <div className='temMaxima'>
            <p>{tempMaxima}</p>
            <p>Maxima</p>
        </div>
        < div className='temMinima'>
            <p>{tempMinima}</p>
            <p>Minima</p>
        </div>
        </header>
    );
}

export default Temperatura;