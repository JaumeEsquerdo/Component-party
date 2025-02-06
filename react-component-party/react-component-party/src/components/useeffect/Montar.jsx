import { useState } from 'react';
import MontarHijo from './MontarHijo';

const Montar = () => {

    const [montar, setMontar] = useState(false);

    return (
        <div style={{backgroundColor:"lightblue", padding:"20px"}}>
            <button onClick={() => setMontar(!montar)}>boton de cambio
            </button>

            {montar && <MontarHijo />}
        </div>
    );
}

export default Montar;