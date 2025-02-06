import {useEffect} from 'react';


const MontarHijo = () => {

    useEffect(()=>{

    
        console.log("Acabo de montar el hijo")
    
        //RETURN DENTRO DE useEffect: código q se ejecuta cuando desmonto el componente
        return()=>{
            console.log("Desmonto el hijo")
        }
    },[])

    return ( 
    <div>
        <p>HIJO</p>
    </div> 
    );
}

export default MontarHijo;