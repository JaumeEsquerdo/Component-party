import { useState } from 'react';

export const Contador = () => {
    //[variable, setter de Variable] = useState(valorInicial)
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Tomi");

    const handleClick = () => {
        setContador(contador + 1);

        // {nombre==="Tomi" ? setNombre("Mariano") : setNombre("Tomi")}
        const newNombre = (nombre === "Tomi") ? "Mariano" : "Tomi";
        setNombre(newNombre);
        
    }
    


    return (<div>
        <p>Contador: {contador}</p>
        <button onClick={handleClick}>Incrementar{nombre}</button>
    </div>);
}

