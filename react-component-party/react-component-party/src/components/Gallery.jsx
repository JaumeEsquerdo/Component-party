const Gallery = ({images}) => {
    return ( 
        <div>
            <h2>Galleria de imagenes</h2>
            {images.map(({src, alt, title})=>(

                <div key={src}>
                    <img src={src} alt={alt} title={title} />
                </div>
            ))}
        </div>
     )
}
 
export default Gallery;