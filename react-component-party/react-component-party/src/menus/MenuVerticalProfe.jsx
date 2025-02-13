import { useState } from 'react';

export const MenuVerticalProfe = ({ listaItems }) => {


    const [openItems, setOpenItems] = useState({});

    /*
    openCategories

    aqui es lo que se pretende, cada categoria tiene un booleano
    {
    "Home":false,
    "Configuración":false,
    "Ayuda": true,
    }

    UTILIZANDO el índice en vez de nombre de categoria
    {
    "0":false,
    "1":false,
    "2": true,
    }
    */

    const handleOpenItem= (i)=>{
        setOpenItems(prev => ({
            ...prev, [i]: !prev[i]
        }));
    }

    return (

        <nav className='vertical menu'>
            <pre>{JSON.stringify(openItems, null, 2)}</pre>
            {/* el numero 2 es para dar espacio */}
            <ul>
                {
                    listaItems.map(({ name, icon, items }, i) => (
                        <li key={i}>

                            <button onClick={()=>handleOpenItem(i)}>
                                <i className={`fas fa-user ${icon}`}></i>
                                {name}
                                <i className={`fas ${openItems[i]? "fa-chevron-down":"fa-chevron-up"}`}></i>
                            </button>
                        {openItems[i] && <SubmenuItem submenus={items} />}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

const SubmenuItem = ({submenus}) => {
    return (
        <ul className="submenu">
            {
                submenus.map( ({label, url}, i) =>(
                    <li key={i}>
                        <a href={url}>{label}</a>
                    </li>
                ))
            }
        </ul>
    );
}

