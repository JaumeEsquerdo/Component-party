import { useState } from 'react';

const Temporizador = () => {

    const [tiempo, setTiempo] = useState(0);
    const [activo, setActivo] = useState(false);

    const iniciarPausar = () => {
        setActivo(prevActivo => !prevActivo)
    }
    
    const reiniciar = () => {
        setTiempo(0);
        setActivo(false);
    }

    if (activo) {
        setTimeout(()=>{
            setTiempo(prevTiempo=> prevTiempo + 1)
        }, 500) //ejecuta el codigo una vez despues de 500milisegundos
    };


    return (
        <div style={{ backgroundColor: "lightpink", padding: "10px" }}>
            <h2>Tiempo: {tiempo} segundos</h2>
            <button onClick={iniciarPausar}>
                {activo ? "Pausar" : "Iniciar"}
            </button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}

export default Temporizador;