import { useState, useEffect } from 'react';

const Timer = () => {

const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning] = useState(false);

    useEffect(()=> {
        let interval;

        if (isRunning){
            interval = setInterval(()=>{
                setSeconds((prev)=>prev + 1)
            }, 1000)
        }

        return ()=> clearInterval(interval);

        
    },[isRunning])


    return (<div>
        <h2>Temporizador: {seconds} segundos.</h2>
        <button onClick={()=>setIsRunning(true)}>Iniciar</button>
        <button onClick={()=>setIsRunning(false)}>Pausar</button>
        <button onClick={()=>{setIsRunning(false);setSeconds(0)}}>Reiniciar</button>

    </div>
    );
}

export default Timer;