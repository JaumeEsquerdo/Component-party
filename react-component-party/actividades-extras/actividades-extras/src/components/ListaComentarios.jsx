const ListaComentarios = ({listacomentarios}) => {
    return ( 
        <>
        {
            listacomentarios.map(({id, author, date, content, replies}) => (
                <div key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <p>{date}</p>

                    {
                    replies.map(({id, author, date, content}) => (
                        <div key={id}>
                            <h4 className="Replies">{author}</h4>
                            <p>{content}</p>
                            <p>{date}</p>
                        </div>
                    ))
                    }
                </div>
            ))
        }
        </>
     );
}

export default ListaComentarios;