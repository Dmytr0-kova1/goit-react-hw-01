import style from "./TransactionHistoryItem.module.css"

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <>
            <td className={style.dataItem}>{ type }</td>
            <td className={style.dataItem}>{ amount }</td>
            <td className={style.dataItem}>{ currency }</td>
        </>
    )
}

export default TransactionHistoryItem