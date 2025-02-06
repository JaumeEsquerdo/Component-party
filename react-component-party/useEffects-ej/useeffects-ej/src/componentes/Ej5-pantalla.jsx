import {useState, useEffect} from 'react';

const Pantalla = () => {

    const [size, setSize] = useState ({width: window.innerWidth, height: window.innterHeight});

    useEffect(()=>{
        const handleResize = () =>{
            setSize({width: window.innerWidth, height: window.innerHeight})
            console.log(`Width: ${window.innerWidth}, Height:${window.innerHeight}`)
        }

        window.addEventListener("resize", handleResize); //resize es el evento que se activa al cambiar el tamaño de la ventana/pantalla (como si fuera click), entonces al escuchar el evento resize se ejecuta handleResize

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, []);



    return ( <div style={{backgroundColor:"lightyellow", padding: "20px"}}>
        <h1>Largo de pantalla</h1>

        <p>width {size.width}</p>
        <p>height: {size.height}</p>

    </div> );
}
 
export default Pantalla;