import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shadid Haque</title>
        <meta name="description" content="Shadid's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Image 
          src="https://i.postimg.cc/3JBR76Lr/img.jpg" 
          alt="Shadid Haque" width={100} height={100} style={{borderRadius: '50%'}}
        />
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>
            <a rel="noreferrer" href="https://www.linkedin.com/in/shadid-haque/" target="_blank">Shadid</a>
          </span>
        </h1>
        <p className={styles.description}>
          I&apos;m a Programmer, a Solopreneur, travel enthusiast. Building a one person business.
        </p>
      </div>

    </div>
  )
}
