import { useState } from "react";

export const Interruptor = () => {
    const [encendido, setEncendido] = useState(false)

        console.log("Renderice este componente")
    const handleClick = () => {
        setEncendido(!encendido)
    };


    // estilos boton
    const darkStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    const lightStyle = {
         backgroundColor: 'white',
        color: 'black'
    }

    const buttonStyle = encendido? lightStyle : darkStyle;

    const isEncendida = encendido ? "Encendido" : "Apagado";
    
    // className={encendido ? "on" : "off"}
    // style={} para cambiar directamente el estilo 
    return (
        <>
        <button onClick={handleClick}  style={buttonStyle}>{isEncendida} </button>
        </>
    );
}

// para imprimir valor de un booleano
// {JSON.stringify(isOn)}
