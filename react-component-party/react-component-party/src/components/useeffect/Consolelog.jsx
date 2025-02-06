import { useState, useEffect } from 'react';

const Consolelog = () => {
    const [cont, setCont] = useState(0);
    console.log("aqui, fuera del useEffect, se vuelve a poner en la consola cada vez q le das click al boton, en useEffect no cuando esta []")

    useEffect(() => {
        console.log("Se ha montado por primera vez")
    },[]); //solo se muestra una vez, cuando se carga
    //se ejecuta dos veces por el strictmode que tiene el main

    useEffect(() => {
        console.log("Me ejecuto con cada render, porq no tengo el corchete")
    },);

    useEffect(() => {
        console.log("Me ejecuto cada vez q cambia cont")
    },[cont]);

    return (
        <div>
            <h1>Ejercicio 1</h1>
            <button onClick={   ()=>setCont(cont+1)    }>Contar{cont}</button>
        </div>
    );
}

export default Consolelog;