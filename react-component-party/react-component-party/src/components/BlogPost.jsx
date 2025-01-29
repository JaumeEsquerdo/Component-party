const BlogPost = ({titulo, fecha, autor, children}) => {
    return ( 
        <div>
            <h2>{titulo}</h2>
            <p>Publicado el {fecha} por {autor}.</p>
            <div>{children}</div>
        </div>
     );
}

export default BlogPost;