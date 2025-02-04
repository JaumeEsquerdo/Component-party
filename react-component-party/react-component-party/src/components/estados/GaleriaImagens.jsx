import { useState } from 'react';

const bgGaleria = { backgroundColor: "lightred" }

const GaleriaImagenes = () => {

    const [id, setId] = useState(0)

    const imagenes = [
        { id: 1, src: 'https://dummyjson.com/image/400x200/008080/ffffff?text=1', isOn: false, alt: `Imagen del id ${id}` },
        { id: 2, src: 'https://dummyjson.com/image/400x200/008080/ffffff?text=2', isOn: false, alt: `Imagen del id ${id}` },
        { id: 3, src: 'https://dummyjson.com/image/400x200/008080/ffffff?text=3', isOn: false, alt: `Imagen del id ${id}` },
        { id: 4, src: 'https://dummyjson.com/image/400x200/008080/ffffff?text=4', isOn: false, alt: `Imagen del id ${id}` },
        { id: 5, src: 'https://dummyjson.com/image/400x200/008080/ffffff?text=5', isOn: false, alt: `Imagen del id ${id}` }
    ];

    const handleBtnSiguiente = () => {
        if (id == imagenes.length - 1) {
            setId(0)

        } else {
            setId(id + 1)
        }

    }
    const handleBtnAnterior = () => {
        // if (id == 0) {
        //     setId(imagenes.length - 1)

        // } else {
        //     setId(id - 1)
        // }


        //TERNARIO
        const anteriorIndice =
                (id === 0) ?
                imagenes.length - 1
                :
                id - 1;
        setId(anteriorIndice);

    }



    return (
        <div style={bgGaleria}>
            <h1>Galería de imagenes</h1>
            <div>

                <button onClick={handleBtnAnterior}>Anterior</button>

                <img src={imagenes[id].src} alt={imagenes[1].alt} />


                <button onClick={handleBtnSiguiente}>Siguiente</button>
            </div>


        </div>
    );
}

export default GaleriaImagenes;