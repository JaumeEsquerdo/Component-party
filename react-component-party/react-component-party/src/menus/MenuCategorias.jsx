import { useState, useEffect } from 'react';

export const MenuCategorias = ({ listaItems }) => {
    // const { name, icon, items } = listaItems;

    return (

        <nav className='MenuDinamico'>
            {
                <ul className=''>
                    {listaItems.map((categoria, i) => (
                        <Item key={i} {...categoria}/>
                    ))}
                </ul>
            }
        </nav>
    );
}

const Item = ({ name, icon, items }) => {
    console.log(name, icon, items)
    return (
        <li>
            {name}

            {items.map(({label,url},i)=>(
                <A key={i} label={label} url={url}/>
            ))}
        </li>
    );
}

const A = ({label, url})=>{
    console.log(label, url)
    return(
        <a href={url}>{label}</a>
    )
}

