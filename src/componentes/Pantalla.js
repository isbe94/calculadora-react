import React from "react";
import '../hojas-estilo/Pantalla.css';

// otra manera de definir un componente, usar para componenetes que son más sencillos
const Pantalla = ({input}) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;