import { useState, useEffect } from 'react';


import { Img } from '@/components/estados/Img'

export const SliderImg = ({ listaImagenes, autoPlay=false }) => {

    // const { id, src } = listaImagenes



    const [indice, setIndice] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(()=>{
    console.log("useEffect");
    if(!autoPlay || isPaused) return //si autoPlay o si isPaused es true no se activa el autoPlay (si isPaused es true (se pone onMouseEnter) activa con setIsPaused(true))
    
    const interval = setInterval(()=>{
        handleNext();
    },1000)

    return()=>{
        clearInterval(interval);
    }

    },[indice, autoPlay, isPaused])



    const handlePrev = () => {
        const newIndex = (indice === 0) ? listaImagenes.length - 1 :indice - 1;
        setIndice(newIndex)

    }

    const handleNext = () => {
        const newIndex = (indice === listaImagenes.length - 1) ? 0 : indice + 1;
        setIndice(newIndex)
    }

    const handleGoToSlide = (i) => {
        setIndice(i);
    }

    return (
        <div>
            <h1>SLIDER DE IMAGENES</h1>

            <div className="carousel" 
            onMouseEnter={()=> setIsPaused(true)} //pausar
            onMouseLeave={()=> setIsPaused(false)} //qquitar pause

            >
                <div className="carousel-container" style={{ transform: `translateX(-${indice * 100}%)` }}>
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

