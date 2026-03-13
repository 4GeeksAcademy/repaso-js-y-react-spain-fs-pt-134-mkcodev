import React, { useState } from 'react'

const Contador = () => {

    // const [valor, funcion] = useState(valorInicial)

    const [contador, setContador] = useState(1000)

    const [name, setName] = useState("")
    const [numeros, setNumeros] = useState([3,7,5,9,4])
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const incrementar = () => setContador((prev) => prev + 1)
    const decrementar = () => setContador((prev) => prev - 1)

    return (
        <>
        <div>Contador: {contador}</div>
        <button className="btn btn-primary btn-sm" onClick={incrementar}><i className="bi bi-plus"></i></button>
        <button className="btn btn-danger btn-sm" onClick={decrementar}><i className="bi bi-dash"></i></button>
        </>
    )
}

export default Contador