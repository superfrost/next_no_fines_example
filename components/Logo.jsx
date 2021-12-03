import styles from '../styles/Logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.logo}>Ш</span>
      <span><b>ШТРАФОВ</b> НЕТ</span>
    </div>
  );
}
