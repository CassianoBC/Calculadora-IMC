import React, { useState } from 'react'

import styles from './Calculadora.module.css'

export default function CalculadoraIMC() {


  return (
    <>
        <div className="container">
            <h1 className={styles.title}>CALCULADORA IMC</h1>
            <form className={styles.form}>
              <input className={styles.formInput} id='peso' type="number" required placeholder="Peso (kg)" />
              <input className={styles.formInput} id='altura' type="number" required placeholder="Altura (cm)" />
              <button className={styles.btn} type="submit">Calcular</button>
            </form>
            <div className="resultado">
              <p>
                <span></span>
              </p>
            </div>
        </div>
    </>
  )
}
