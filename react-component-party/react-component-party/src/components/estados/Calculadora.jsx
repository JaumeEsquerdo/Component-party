import { useState } from 'react';

const styleCalculadora = { backgroundColor: "lightBlue"};

const Calculadora = () => {

    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [operacion, setOperacion] = useState('+');
    const [resultado, setResultado] = useState(null);
    const [contador, setContador] = useState(0);

    //funcion para hacer el calculo
    const calcular = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        let res;

        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Ingrese números válidss')
            return;
        }


        //realizar la operación según la opción seleccionada

        switch (operacion) {
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                res = n1 * n2;
                break;
            case '/':
                res = n1 / n2;
                break;
            default:
                res = 'Operación no válida';
        }

        setResultado(res);

        //Uso de la actualización funcional para incrementar el contador
        setContador((prevContador) => prevContador + 1);
    }

    return (
        <div style={styleCalculadora}>
            <h1>Calculadora</h1>

            <div>
                <input type="number" value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                    placeholder='Numero 1'
                />
            </div>
            <div>
                <select name="select" value={operacion} onChange={(e) => setOperacion(e.target.value)} id="select">
                    <option value="+">Suma</option>
                    <option value="-">Resta</option>
                    <option value="*">Multiplicación</option>
                    <option value="/">División</option>
                {/* Cuando el usuario selecciona "Multiplicación", por ejemplo, onChange captura el nuevo valor (*) y actualiza el estado: onChange={(e) => setOperacion(e.target.value)} ; entonces ahora el nuevo valor es * y cuando se da al boton que tiene la funcion calcular se va al switch case '*'
                */}
                </select>
            </div>

            <div>
                <input type="number" value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                />
            </div>

            <button
                onClick={calcular}
            >Calcular
            </button>

            <div>
                <h2>Resultado {resultado}</h2>
                <p>Calculos realizados : {contador}</p>
            </div>

        </div>
    );
}

export default Calculadora;