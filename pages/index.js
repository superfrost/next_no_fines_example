import styles from '../styles/Home.module.css'
import { Logo } from '../components/Logo'
import { UinResult } from '../components/UinResult'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
          <Logo/>
          <UinResult />
      </div>
    </main>
  )
}
