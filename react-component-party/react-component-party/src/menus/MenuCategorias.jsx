import { useState, useEffect } from 'react';


export const MenuCategorias = ({ listaItems }) => {
    // const { name, icon, items } = listaItems;

    const [menuOpen, setMenuOpen] = useState({}); //empieza vacio (todos false entonces)


    const handleOpen = (index) => {
        setMenuOpen((prev) => ({
            ...prev, [index]: !prev[index],

            // [index] → Define la clave del objeto que queremos cambiar.
            // !prev[index] → Obtiene el valor actual en esa clave y lo invierte.


            //alterna el estado del menuOpen : const menuOpen = {0: false, 1: true, 2: false};
            //recordatorio: para entrar a false de 0 seria [0]: menuOpen[0] se puede llegar al false tanto con . como con[] la ser un objeto
            //para el arreglo se usa el indice directamente


            // setMenuOpen((prev) => ({
            //     ...{ 0: true, 1: false, 2: true }, // Copia todo el estado
            //     [1]: !prev[1]  // Cambia la clave "1" → false se convierte en true
            // }));
        }))
    };

    return (
        <nav className='MenuDinamico'>
            {
                <ul className='Menu-ul'>
                    {listaItems.map((categoria, i) => (
                        <Item key={i} {...categoria} menuOpen={menuOpen} index={i} handleOpen={handleOpen} />
                    ))}
                </ul>
            }
        </nav>
    );
}

const Item = ({ name, icon, items, index, handleOpen, menuOpen }) => {
    console.log(name, icon, items);
    return (
        <li className='Menu-li'>
            <div onClick={() => handleOpen(index)} className='Menu-title'>
                <i className={`fa-solid ${icon}`}></i>{name}
                <i
                    className={`fa-solid fa-house ${menuOpen[index] ? "open" : "closed"}`}>

                </i>
                {/* {menuOpen[index]?"x":"S"} */}
            </div>

            {menuOpen[index] && items.map(({ label, url }, i) => (
                <A key={i} label={label} url={url} />
            ))}
        </li>
    );
}

const A = ({ label, url }) => {
    console.log(label, url)
    return (
        <a className='Menu-a' href={url}>{label}</a>
    )
}


