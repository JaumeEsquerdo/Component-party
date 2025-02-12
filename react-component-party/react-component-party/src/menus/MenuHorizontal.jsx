import { useState, useEffect } from 'react'

export const MenuHorizontal = ({ items }) => {




    return (
        <nav className='Menu'>
            <ul className='Menu-ul'>
                {items.map((item, i) => (
                    <ItemNav key={i} item={item} />
                ))}
            </ul>
        </nav>

    );
}

export const ItemNav = ({ item }) => {
    const { label, url } = item;
    
    return (
    <li className='Menu-li'>
        <a className='Menu-a' href={url}>{label}</a>
    </li>
    );
}


