import { useState } from 'react';

const JuegoAdivinanza = () => {

    const randomNum = Math.floor(Math.random() * 100) + 1; //nunero aleatorio
    const [secreto] = useState(randomNum); //numero secreto
    const [intento, setIntento] = useState("");  //intento usuario
    const [pistas, setPistas] = useState("") //pista caliente / frio
    const [intentos, setIntentos] = useState(0); //contador de intentos



    const verificarIntento = () => {
        const numeroIntento = parseInt(intento);

        //verificar si el número está dentro del rango y es válido
        if (numeroIntento < 1 || numeroIntento > 100 || isNaN(numeroIntento)) {
            setPistas("Por favor ingresa un número válido... empiezas mal")
            return;
        }

        setIntentos(prevIntentos => prevIntentos + 1)

        if (numeroIntento == secreto) {
            setPistas("Enhorabuena! Acertaste!")
        } else if (intento < secreto) {
            setPistas("Sube un poco más")
        } else {
            setPistas("Baja baja")
        }


    }






    return (
        <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
            <h1>Juego adivinanza</h1>
            <p>Adivina el número del 1 al 100</p>

            <input type="number" value={intento} onChange={(e)=>setIntento(e.target.value)} />

        <button onClick={verificarIntento}>Verificar</button>
        <button onClick={()=>{
            setIntentos(0);
            setPistas("");
            setIntento("");
        }}>Reiniciar Juego</button>
            <p>{pistas}</p>

            <p>{intentos}</p>
        </div>
    );
}

export default JuegoAdivinanza;
// Número entero => parseInt. Con decimales => parseFloat.




//     setIntentos((prevIntento) => prevIntento + 1) // incrementar intentos

//     if (parseInt(intento) === secreto) {
//         setPistas(`Enhorabuena has acertado!!!! Solo has necesitado ${intentos + 1}intentos`) // se pone intentos + 1 para ir sumando en uno en cada intento
//     } else if (parseInt(intento) < secreto) {
//         setPistas("Más alto crack")
//     } else {
//         setPistas("Más bajo :(")
//     }

//     setIntento(""); //limpia el campo
// };


//   <form onSubmit={handleIntento}>
//                 <input type="number"
//                     value={intento}
//                     onChange={(e) => setIntento(e.target.value)}
//                     placeholder='Intenta con un número'
//                 />
//                 <button type='submit'>Intenta!</button>
//             </form> 