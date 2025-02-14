import { useState, useEffect } from 'react';

export const ListaComentarios = ({ comentarios }) => {
    // const {id, autthor, image, date, content, replies} = comentarios
    return (<div>
        {
            comentarios.map((comentario, i) => (

                <Comentario key={i} comentario={comentario} />

            ))
        }

    </div>);
};



const Comentario = ({ comentario }) => {
    const { author, image, date, content, replies } = comentario;
    return (
        <div style={{ background: "lightgreen" }}>
            <h2>Comentarios</h2>

            <img src={image} alt={`Imagen del autor ${author}`} />
            <strong>{author}</strong> - <FechaParaHumanos date={date} />
            <p>{content}</p>
            <ListaRespuestas respuestas={replies} />
        </div>
    );
}


const FechaParaHumanos = ({ date }) => {
    return <small>{new Date(date).toLocaleString("es-Es")}</small>;

}


const ListaRespuestas = ({ respuestas }) => {
    return (
        <div>
            <h2>Respuesta</h2>
            {
                respuestas.map((respuesta, i) => (
                    <Respuesta key={i} respuesta={respuesta} />
                ))
            }
        </div>
    );
};

const Respuesta = ({ respuesta }) => {
    const { author, image, date, content } = respuesta;
    return (
        <div>

            <img src={image} alt={`Imagen de ${author}`} />
            <strong>{author}</strong> - <FechaParaHumanos date={date} />
            <p>{content}</p>
        </div>
    );
}



