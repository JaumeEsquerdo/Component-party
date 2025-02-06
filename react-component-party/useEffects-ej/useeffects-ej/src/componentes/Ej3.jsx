import { useState, useEffect } from 'react';

const Posts = () => {

    const [post, setPost] = useState(null); //null es vacio
    const [loading, setLoading] = useState(true); // si se está cargando la API
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")//inicia solicitud http, y retorna una promesa cuando la respuesta llega al servidor
        .then((response)=>{ //then se ejecuta cuando la petición se resuelve
            if(!response.ok){ //esto verifica si la respuesta es buena
                throw new Error("error al obtener los datos ")
            } 
            return response.json();
        })

        .then((data)=>{  //data representa los datos de la promesa JSON
            setPost(data);
            setLoading(false);
        })

        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        })

    }, []); //useEffect solo se realiza una vez justo después de q el componente es cargado

    if(loading) return <p>Cargando datos</p>
    if(error) return <p>Error: {error}</p>


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default Posts;

// .title y .body porque la API devuelve: {
//     "userId": 1,
//     "id": 1,
//     "title": "Título del post",
//     "body": "Contenido del post"
//   }