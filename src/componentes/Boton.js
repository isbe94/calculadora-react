import React from "react";
import '../hojas-estilo/Boton.css';

function Boton(props){

    const esOperador = valor =>{
        // si no es número, si es != de . y != de = es operador
        return isNaN(valor) && (valor!== '.') && (valor !== '=');
    
    }

    return (
        // todos los botones que se creen tendrán esta clase
        // trimEnd() remueve espacios final de cadena de caracteres
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
            // se llama a una función anónima, se ejecuta una sola vez
            onClick={() => props.manejarClic(props.children)}
        >
            
            {/* propiedad de props afecta todo lo que esté dentro de la etiqueta en este caso todos los Boton*/}
            {props.children}

        </div>
    );
}

export default Boton;
