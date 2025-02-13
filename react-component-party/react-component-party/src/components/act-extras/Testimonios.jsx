import { useState, useEffect } from 'react';

export const Testimonios = ({ testimonios }) => {




    return (
        <>
            <h1>Testimonios de clientes</h1>

            <div>
                <ul style={{listStyle:"none", }}>
                    {
                        testimonios.map((testimonio, i) => (
                            <Li key={i} testimonio={testimonio} />
                        ))
                    }
                </ul>
            </div>

        </>
    );
}

const Li = ({ testimonio }) => {
    const { id, name, position, company, testimonial, image, rating } = testimonio;

    const [esPar, setEsPar] = useState(false);

    useEffect(() => {
        if (id % 2 === 0) {
            setEsPar(true)
            // setEsPar(!esPar)
        }

    }, [testimonio])

    return (
        <>
            {/* <li style={{ background: esPar ? "blue" : "red" }}>{testimonio.name}</li> */}

            <li style={{ background: esPar ? "lightblue" : "lightcoral" , borderRadius:"50px", minWidth:"600px", maxWidth:"700px"}}>
                <div>
                    <h2>{name}</h2>
                    <p>{position} en {company}</p>
                    <p>Testimonio: {testimonial}</p>
                    <img src={image} alt={`Imagen de ${name}`} />



                </div>

            </li>
        </>
    );
}


