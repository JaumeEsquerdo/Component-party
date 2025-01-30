const MenuSection = ({ title, items }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {items.map((item) => (

                    <li key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>{item.descripcion}</p>
                        <p>{item.precio}€</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuSection;