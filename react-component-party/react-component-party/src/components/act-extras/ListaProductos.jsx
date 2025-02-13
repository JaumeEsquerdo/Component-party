import { useState, useEffect } from 'react'

export const ListaProductos = ({ datosProductos }) => {

    const [esPar, setEsPar] = useState({});

    const handleColor= (id)=>{
        if(i % 2 == 0){setEsPar((prev)=>({
            ...prev, [id]: !prev[id]
        }))} else{ return}
        
    }
    useEffect(() => {
        console.log(esPar);
    }, []);


    return (<>
        <div>
            <h1>Listado de productos</h1>
            {
                datosProductos.map((datoProducto, i) => (
                    <div key={i}>
                        <Producto datoProducto={datoProducto} handleColor={handleColor} esPar={esPar[datoProducto]} />
                    </div>
                ))
            }
        </div>
    </>
    );
}

const Producto = ({ datoProducto, handleColor }) => {
    const { id, name, price, description, image, esPar } = datoProducto;
    return (
        <div onClick={()=>handleColor(id)} style={{backgroundColor:esPar?"Blue":"Red", borderRadius:"20px"}}>
            <img src={image} alt={`Imagen de ${name}`} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}




