import { useState, useEffect } from 'react'

export const ListaProductos = ({ datosProductos }) => {

    const [esPar, setEsPar] = useState({});

    const handleColor= (id)=>{
        if(id % 2 == 0){setEsPar((prev)=>({
            ...prev, [id]: !prev[id]
        }))} else{ return}
        
    }
    useEffect(() => {
        console.log(esPar);
    }, [esPar]);


    return (<>
        <div>
            <h1>Listado de productos</h1>
            {
                datosProductos.map((datoProducto, i) => (
                    <div className='Product' key={datoProducto.id}>
                        <Producto datoProducto={datoProducto} handleColor={handleColor} esPar={esPar[datoProducto.id]} />
                    </div>
                ))
            }
        </div>
    </>
    );
}

const Producto = ({ datoProducto, handleColor, esPar }) => {
    const { id, name, price, description, image } = datoProducto;
    return (
        <div className='Product-container' onClick={()=>handleColor(id)} style={{backgroundColor:esPar?"gray":"lightgray", borderRadius:"20px"}}>
            <img className='Product-img' src={image} alt={`Imagen de ${name}`} />
            <p><strong>{name}</strong></p>
            <p>{description}</p>
            <p>{price} €</p>
        </div>
    );
}




