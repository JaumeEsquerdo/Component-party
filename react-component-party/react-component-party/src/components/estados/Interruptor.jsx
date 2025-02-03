import { useState } from "react";

export const Interruptor = () => {
    const [encendido, setEncendido] = useState(false)

        console.log("Renderice este componente")
    const handleClick = () => {
        setEncendido(!encendido)
    };

    const isEncendida = encendido ? "Encendido" : "Apagado";
    

    return (
        <>
        <button onClick={handleClick} className={encendido ? "on" : "off"}>{isEncendida} </button>
        </>
    );
}

// para imprimir valor de un booleano
// {JSON.stringify(isOn)}
