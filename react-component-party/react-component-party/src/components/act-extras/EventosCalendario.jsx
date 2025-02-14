import{useState, useEffect} from 'react';

export const EventosCalendario = ({eventos}) => {



    return ( <>

        <h1>Eventos en el calendario</h1>
    <div>
        {
            eventos.map(({title, location, ...rest}, i)=>(
                <div key={i}>
                    <h2>
                        {title}

                    </h2>
                    <p>Localización: {location}</p>
                    <Fecha evento={rest}/>

                </div>
            ))
        }
    </div>

    </>
    
);
}

const Fecha  = ({evento}) => {
    const {date, time} = evento;
    return ( 
        <>
        <p>El día {date} a las {time}.</p>
        </>
     );
}

