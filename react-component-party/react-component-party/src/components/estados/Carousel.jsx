import { useState, useEffect } from 'react';

import { Img } from '@/components/estados/Img'

export const SliderImg = ({ listaImagenes, autoPlay=false }) => {

    // const { id, src } = listaImagenes



    const [indice, setIndice] = useState(0)

    useEffect(()=>{
    console.log("useEffect");
    if(!autoPlay) return
    
    const interval = setInterval(()=>{
        handleNext();
    },1000)

    return()=>{
        clearInterval(interval);
    }

    },[indice, autoPlay])



    const handlePrev = () => {
        const newIndex = (indice === 0) ? listaImagenes.length - 1 :indice - 1;
        setIndice(newIndex)

    }

    const handleNext = () => {
        const nextIndex = (indice === listaImagenes.lenght - 1) ? 0 : indice + 1;
        setIndice(nextIndex)
    }

    const handleGoToSlide = (i) => {
        setIndice(i);
    }

    return (
        <div>
            <h1>SLIDER DE IMAGENES</h1>

            <div className="carousel" >
                <div className="carousel-container" style={{ transform: `translateX${indice * 100}` }}>
                    {/* {listaImagenes.map(img => <Img key={img.id} img={img} />)

                    } */}

                    {
                        listaImagenes.map((img, i) => (
                            <Img key={i} img={img} />
                        ))
                    }
                </div>

                <div className="carousel-controls" >
                    <button onClick={handlePrev}>Anterior</button>
                    <button onClick={handleNext}>Siguiente</button>
                </div>
                <div className="carousel-indicators" >

                    {
                        listaImagenes.map((_, i) => (
                            <button key={i} onClick={() => handleGoToSlide(i)}>{i + 1}</button>
                        ))
                    }

                </div>
            </div>
        </div>);
}

