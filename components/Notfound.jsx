import Image from 'next/image'
import styles from '../styles/NotFound.module.css'

export const Notfound = ({uin}) => {
  return (
    <div className={styles.wrapper}>
      <Image src='/notFound.svg' height={80} width={80} alt='not_found' /> 
      <div>Штраф {uin} не найден</div>
    </div>
  )
}
