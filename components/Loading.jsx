import Image from 'next/image'
import styles from '../styles/Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Image src='/loading.svg' height={80} width={80} alt='loading' className={styles.spiner} />
      <div>Загрузка</div>
    </div>
  )
}
