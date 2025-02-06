import { useState } from 'react';
import Componente from './Componente';


const MontadorComponente = () => {

    const [show, setShow] = useState(true)



    return (<div>
        <button onClick={() => setShow(!show)}>
            {show ? "Desmontar" : "Montar"}
        </button>

        {show && <Componente />}
        {/* Cuando show es true Componente aparece y se muestra el "componente montado" */}
        {/* Cuando show es false se desmonta y aparece "componente desmontado" */}
    </div>);
}

export default MontadorComponente;