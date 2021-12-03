import styles from '../styles/Result.module.css'

export const Result = ({ data }) => {
  return (
    <div className={styles.resultWrapper}>
      <div className={styles.resultName}>Постановление #{data.number}</div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Свидетельство о регистрации:</span>
        <span>{data.doc_number}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Дата постановления:</span>
        <span>{data.bill_at}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Нарушение:</span>
        <span>{data.koap_code}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Получатель платежа:</span>
        <span>{data.payee_username}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>ИНН:</span>
        <span>{data.payee_inn}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>КПП:</span>
        <span>{data.payee_kpp}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Расчетный счет:</span>
        <span>{data.payee_bank_account}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Банк получателя:</span>
        <span>{data.payee_bank_name}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>БИК:</span>
        <span>{data.payee_bank_bik}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>ОКТМО(ОКАТО):</span>
        <span>{data.payee_oktmo}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Сумма штафа:</span>
        <span>{data.amount}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>Скидка:</span>
        <span>{data.discount_at}</span>
      </div>
      <div className={styles.resultInfo}>
        <span className={styles.fineNames}>К оплате:</span>
        <span>{data.amount_to_pay}</span>
      </div>
    </div>
  )
}
