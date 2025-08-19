import React, { useState } from 'react'

import styles from './Calculadora.module.css'

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularIMC = (e) => {
    e.preventDefault()

    if (!peso || !altura) return

    const alturaMetros = altura / 100
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2)

    let classificacao = ''
    if (imc < 18.5) classificacao = 'Abaixo do peso'
    else if (imc >= 18.5 && imc < 24.9) classificacao = 'Peso normal'
    else if (imc >= 25 && imc < 29.9) classificacao = 'Sobrepeso'
    else if (imc >= 30 && imc < 34.9) classificacao = 'Obesidade Grau I'
    else if (imc >= 35 && imc < 39.9) classificacao = 'Obesidade Grau II'
    else classificacao = 'Obesidade Grau III'

    setResultado(`IMC: ${imc} - ${classificacao}`)
  }

  return (
    <>
      <div className="container">
        <h1 className={styles.title}>CALCULADORA IMC</h1>
        <form className={styles.form} onSubmit={calcularIMC}>
          <input
            className={styles.formInput}
            id='peso'
            type="number"
            required
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            className={styles.formInput}
            id='altura'
            type="number"
            required
            placeholder="Altura (cm)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button className={styles.btn} type="submit">Calcular</button>
        </form>
          {resultado && (
        <div className={styles.resultado}>
            <p>
              <span>{resultado}</span>
            </p>
        </div>
          )}
      </div>
    </>
  )
}
