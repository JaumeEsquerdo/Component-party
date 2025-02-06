import { useState, useEffect } from 'react';

const Temporizar = () => {

    const [segundos, setSegundos] = useState(0);

    useEffect(() => {

        //codigo que ejecutamos luego de renderizar mi componente
        const idInterval = setInterval(() => {
            setSegundos(s => s + 1)
        }, 1000);

        //funcion de limpieza(codigo al desmontar el componente) utilizar con intervalos
        return () => {
            clearInterval(idInterval)
        }


    }, []);

    return <p>Han pasado {segundos} segundos.</p>
}

export default Temporizar;