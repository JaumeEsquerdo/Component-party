import { useState, useEffect } from 'react';

export const ListaDeCategorias = ({ restaurant }) => {
    const { entrantes, principales, postres } = restaurant.menu
    return (<div style={{ background: "lightgreen" }}>
        <h1 >Menu</h1>
        <ListaPlatos menu={{ entrantes, principales, postres }} />
        {/* {entrantes.map(())} */}
        {postres.map(({ id, nombre, precio, descripcion }, i) => (
            <p key={i}>
                {nombre}...{precio} €
            </p>
        ))}



    </div>);


}

const ListaPlatos = ({ menu }) => {
    const { entrantes, principales, postres } = menu;
    return (<div>
        <h2>Entrantes</h2>

        {entrantes.map((entrante) => (
            <div key={entrante.id}>
                <Plato plato={entrante} />
            </div>

        ))}
        <h2>Principales</h2>

        {principales.map((principal) => (
            <div key={principal.id}>
                <Plato plato={principal} />
            </div>
        ))}

        <h2>Postres</h2>

        {postres.map((postre) => (
            <div key={postre.id}>
                <Plato plato={postre} />
            </div>
        ))}

    </div>
    );
}


const Plato = ({ plato }) => {
    const { nombre, precio, descripcion } = plato;
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio {precio} €</p>
            <p>{descripcion}</p>
        </div>
    );
}

export default Plato;