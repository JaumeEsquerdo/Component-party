const GaleriaImagenes = ({ imageList }) => {

    return (
        <div>
            <h2>Galeria de Imagenes </h2>
            {imageList.map(({ src, alt }, index) => (

                <Img key={index} src={src} alt={alt}  />


            ))}


        </div>
    );
}
const Img = ({ src, alt }) => {
    return (
        <>
        <img src={src} alt={alt} title={alt}/>
            <h3>{alt}</h3>
        </>);
}


export default GaleriaImagenes;