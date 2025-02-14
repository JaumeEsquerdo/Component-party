import {useState, useEffect} from 'react';

export const ListaDeCategorias = ({restaurant}) => {
    const {entrantes, principales, postres} = restaurant.menu
    return ( <div style={{background:"lightgreen"}}>
        <h1 >Menu</h1>
        {entrantes.map(())}
        {postres.map(({id, nombre, precio, descripcion},i)=>(
            <p key={i}>
                {nombre}...{precio} €
            </p>
        ))}
        


    </div> );
}
 
