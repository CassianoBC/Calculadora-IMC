import styles from './Tabela.module.css';


export default function Tabela() {
  return (
    <div className="container">
        <h2 className={styles.title}>TABELA IMC</h2>
        <table className={styles.table}>
            <thead className={styles.tableThead}>
                <tr className={styles.theadLine}>
                    <th className={styles.theadCell}>
                        IMC
                    </th>
                    <th className={styles.theadCell}>
                        Classificação
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        18.5 ou menos
                    </td>
                    <td className={styles.tbodyCell}>
                        Abaixo do Peso
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        entre 18.5 e 24.9
                    </td>
                    <td className={styles.tbodyCell}>
                        Peso Normal
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        entre 25 e 29.9
                    </td>
                    <td className={styles.tbodyCell}>
                        Sobrepeso
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        entre 30 e 34.9
                    </td>
                    <td className={styles.tbodyCell}>
                        Obesidade
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        entre 35 e 39.9
                    </td>
                    <td className={styles.tbodyCell}>
                        Obesidade Severa
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        40 ou mais
                    </td>
                    <td className={styles.tbodyCell}>
                        Obesidade Mórbida
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}
