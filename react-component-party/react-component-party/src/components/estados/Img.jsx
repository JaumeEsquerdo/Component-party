export const Img = ({ img }) => {

    const { id, src } = img

    return (

        <div className="carousel-slide" >
            <img src={src} alt={`Imagen del id ${id}`} />    
        </div>

    );
}

