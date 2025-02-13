import { useState, useEffect } from 'react'


export const MenuDropDown = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {

        console.log(isOpen)

        setIsOpen(!isOpen)

        // if(!isOpen){
        // setIsOpen(true)
        // } else {
        //     setIsOpen(false)
        // }

    }

    return (
        <>

            <nav className='Menu'>
                {
                    isOpen && (<ul className="Menu-ul">
                        {items.map((item, i) => (
                            <ItemNav key={i} item={item} />
                        ))}
                    </ul>)
                }
            </nav>
            <button onClick={handleOpen}>{isOpen ? "Cerrar" : "Abrir"} {JSON.stringify(isOpen)}</button>
        </>

    );
}



export const ItemNav = ({ item }) => {
    const { label, url } = item;

    return (
        <li className='mi-Menu-li'>
            <a className='Menu-a' href={url}>{label}</a>
        </li>
    );
}
