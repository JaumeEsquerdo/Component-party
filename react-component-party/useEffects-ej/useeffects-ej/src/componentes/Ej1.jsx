import { useState, useEffect } from 'react';





const Ej1 = () => {

    const [segundos, setSegundos] = useState(0);

    //mensaje consola
    useEffect(() => {
        console.log("El componente se ha montado")


        const idInterval = setInterval(() => {
            setSegundos((s) => s + 1); //aumenta segundos cada segundo
        }, 1000); // cada segundo setSegundos actualiza segundos sumándole 1


        return () => {
            console.log("El componente se ha desmontado");
            clearInterval(idInterval); // retorna la funcion limpieza para evitar q siga ejecutándose al desmontars
        }

    }, []); //se ejecuta solo una vez al montar




    return (
        <div>
            <p>Tiempo transcurrido {segundos} segundos.</p>
        </div>
    );
}

export default Ej1;