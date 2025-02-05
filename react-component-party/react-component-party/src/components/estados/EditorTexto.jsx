import { useState } from 'react';

const EditorTexto = () => {

    const [texto, setTexto] = useState("");
    // const [palabras, setPalabras] = useState(0);
    // const [caracteres, setCaracteres] = useState(0);

    const contadorPalabras = () => {
       return texto.trim().split(" ").filter(word => word != "").length;
    }

    const handleReiniciar = () =>{
        setTexto("")
    }

    return (
        <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            <h1>Editor de texto</h1>
            <textarea rows="20" value={texto} cols="60" placeholder="Escribe aquí" onChange={(e)=> setTexto(e.target.value)}></textarea>

            <p>Caracteres: {texto.length}</p>
            <p>Palabras: {contadorPalabras()}</p>
            <button onClick={handleReiniciar}>Reiniciar texto</button>
        </div>
    );
}

export default EditorTexto;