import styles from "./TransactionHistory.module.css"
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"

const TransactionHistory = ({items}) => {
  return (
      <div className={styles.container}>
          <table className={styles.tab}>
              <thead className={styles.list}>
                  <tr>
                      <th className={styles.item}>Type</th>
                      <th className={styles.item}>Amount</th>
                      <th className={styles.item}>Currency</th>
                  </tr>
              </thead>
              
              <tbody>
                  {items.map(item => (
                      <tr className={styles.data}
                          key={item.id}>
                          <TransactionHistoryItem
                              type={item.type}
                              amount={item.amount}
                              currency={item.currency
                              } />
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}

export default TransactionHistory