const ListaProductos = ({ listaproductos }) => {
    return (
        <div className="Productos">
            {listaproductos.map(({ id, name, price, description, image }) => (
                <div key={id} className="Productos-item">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p>{description}</p>
                    <img src={image} alt={name} />
                </div>
            ))}
        </div>

    );
}

export default ListaProductos;

// desestructurar asi solo sirve para objetos no para array
// const {id, name, price, description, image} = listaproductos;

// Desestructuración en un array: desestructurando cada objeto dentro del array, no el array en sí.