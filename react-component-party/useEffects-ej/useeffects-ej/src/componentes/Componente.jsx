import { useEffect } from 'react';

const Componente = () => {

    useEffect(() => {
        console.log("Componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, [])

    return (
        <h3>Mira la consola!👀</h3>
    );
}

export default Componente;