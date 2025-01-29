const GaleriaImagenes = ({imageList}) => {
    return ( 
        <div>
            <h2>Galeria de Imagenes </h2>
            {imageList.map(({src , alt}, index) => (
                <img key={index} src={src} alt={alt} />
            ))}

        </div>
     );
}

export default GaleriaImagenes;