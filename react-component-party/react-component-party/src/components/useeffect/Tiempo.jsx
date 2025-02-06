import { useState, useEffect } from 'react';

const TiempoVida = () => {

    const [segundo, setSegundo] = useState(0);

    useEffect(()=>{
        const idInterval= setInterval(()=>{
            setSegundo((s)=>s+1)
        },1000) //cada segundo que se ejecute la suma de un segundo
        
        return()=>{
            clearInterval(idInterval) //parar el interval
        }

        // 2º OPCIÓN
        // setTimeout(()=>{
        //     setSegundo((s)=>s+1)
        // },1000)
        // y poner al useEffect },[])

    },[])

    const handleReiniciar= ()=>{
        setSegundo(0);
    }

    return (
    <div style={{backgroundColor:"lightcoral", padding:"20px", borderRadius:"10px"}}>
        <h1>Tiempo de vida</h1>
        <p>{segundo}</p>
        <button onClick={handleReiniciar}>Reiniciar</button>
    </div>
    );
}

export default TiempoVida;