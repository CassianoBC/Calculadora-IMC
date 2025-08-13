import React, { useState } from 'react'

import styles from './Calculadora.module.css'

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState(0);
  const [altura, serAltura] = useState(0);

  function calcularIMC() {
    
  }



  return (
    <>
        <div className="container">
            <h1 className={styles.title}>Calculadora IMC</h1>
            <form className={styles.form}>
              <input className={styles.formInput} type="number" required placeholder="Peso (kg)" />
              <input className={styles.formInput} type="number" required placeholder="Altura (cm)" />
              <button type="submit">Calcular</button>
            </form>
            <div className="resultado">
              <span></span>
            </div>
        </div>
    </>
  )
}
