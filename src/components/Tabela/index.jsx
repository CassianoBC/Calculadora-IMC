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
                        22.5
                    </td>
                    <td className={styles.tbodyCell}>
                        Peso Normal
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        27.5
                    </td>
                    <td className={styles.tbodyCell}>
                        Sobrepeso
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        32.5
                    </td>
                    <td className={styles.tbodyCell}>
                        Obesidade
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        37.5
                    </td>
                    <td className={styles.tbodyCell}>
                        Obesidade Severa
                    </td>
                </tr>
                <tr className={styles.tbodyLine}>
                    <td className={styles.tbodyCell}>
                        42.5
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
