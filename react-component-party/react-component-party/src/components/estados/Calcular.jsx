import { useState, useEffect } from 'react';

const Calcular = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState("+");
    const [resultado, setResultado] = useState(0);

    // useEffects: permite ejectuar una función de código cuando yo quiera
    useEffect(()=>{
        console.log("cambiar num1");
        calcular();
    }, [num1, num2, operacion]); //escucho estos elementos y cuando cambien se ejecutan, los de dentro de la lista

    const calcular = () => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        //tambien sirve poner parseInt o parseFloat

        let res;

        if (num1 == isNaN || num2 == isNaN) {
            setResultado("Ingresa números correctos");
            return;
        }

        switch (operacion) {

            case "+":
                res = n1 + n2; break;
            case "-":
                res = n1 - n2; break;
            case "*":
                res = n1 * n2; break;
            case "/":
                res = n1 / n2; break;

            // case "/":
            // setResultado(n1/n2); break;
        }
        setResultado(res)
    
    }

    const handleReinicio = () => {
        setResultado(0)
        setNum1(0)
        setNum2(0)
        setOperacion("+")
    }


    return (
        <div style={{ backgroundColor: "lightyellow", padding: "30px" }}>
            <h1>Calculadora con select</h1>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>

            <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="+">Sumar</option>
                <option value="-">Restar</option>
                <option value="*">Multiplicar</option>
                <option value="/">Dividir</option>
            </select>

            <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />

            <button onClick={calcular}>Calcular</button>
            <p>Resultado: {resultado}</p>
            <button onClick={handleReinicio}>Reinicio</button>
        </div>
    );
}

export default Calcular;