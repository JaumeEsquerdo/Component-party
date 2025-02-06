import { useState, useEffect } from 'react';

const ConsultaAPI = () => {

    const [data, setData] = useState(null);

    const obtenerInfo = async ()=>{ //funcion asincrona para q funcione los await

        const response = await fetch('./backend/libros.jsoon'); //guardar en response la carga de la API
        const jsData = await response.json(); //convertir a js la respuesta obtenida de antes
        setData(jsData[1]); //lo guardas en setData(es decir en data)


    }


    // TRAER ALGO CUANDO CARGUE EL COMPONENTE
    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then(response => response.json()) //json es un string, el string de json lo pasas a un objeto de js
        //     .then(jsonData => setData(jsonData)) //lo guardas después en setData


        //usando async / await
        obtenerInfo();

    },[])

    return (<div>
        {/* Para ver el contenido del json: {JSON.stringify(data)} */}
       
        {data ? <><p>mis datos son{data.body}</p>
        <img src={data.img} alt=""/> <p>{data.title}</p></> : <p>cargando datos</p>}
        
        
    </div>);
}

export default ConsultaAPI;