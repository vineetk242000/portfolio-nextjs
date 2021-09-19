import Head from 'next/head'
import Image from 'next/image';
import Projects from '../src/components/Projects';
import ShortIntro from '../src/components/ShortIntro';
import Skills from '../src/components/Skills';
import Repositories from '../src/components/Repositories';
import styles from '../styles/Home.module.css';
import Services from '../src/components/Services';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vineet K</title>
        <meta name="portfolio" content="Vineet K Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ShortIntro />
        <Skills />
        <Projects />
        <Services />
        <Repositories />
      </main>
    </div>
  )
}
