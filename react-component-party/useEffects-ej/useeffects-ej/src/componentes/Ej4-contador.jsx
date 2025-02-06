import { useState, useEffect } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    // useEffect para registrar el valor del contador cada vez que cambie
    useEffect(() => {
        console.log(`El valor del contador a cambiado a: ${contador}`)


    }, [contador]); //este Effect se ejecuta cada vez q cambia el contador

    //incrementar y decrementar contador
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    return (<div>
        <h1>Contador</h1>
        <h3>{contador}</h3>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
    </div>
    );
}

export default Contador;