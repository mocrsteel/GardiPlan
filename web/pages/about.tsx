import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About</h1>
        <p className={styles.description}>
          <Link href="/">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  )
}
