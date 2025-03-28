import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const Sumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const Restar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta)
    }

    const Multiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion)
    }

    const Dividir = () => {
        const division = parseFloat(num1) / parseFloat(num2);
        setResultado(division)
    }

    const Limpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    }
    

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className="botones">
            <button onClick={Sumar}>+</button> 
            <button onClick={Restar}>-</button> 
            <button onClick={Multiplicar}>x</button> 
            <button onClick={Dividir}>÷</button>
            </div>

            <button className="limpiar" onClick={Limpiar}>Limpiar</button>
            
            {resultado !== null && <p>Resultado: {resultado}</p>}

            
        </div>
    );
};

export default Calculadora;