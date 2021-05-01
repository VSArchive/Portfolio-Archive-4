import Head from 'next/head'
import styles from '../styles/Home.module.css'

const New = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>New Article</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <nav className={styles.navbar}>
                <a href="/">
                    <img src={"/logo.png"}></img>
                </a>
            </nav>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <form action="/api/publish" method="POST">
                        <input id="title" name="title" className={styles.textBox} placeholder="Title" required></input>
                        <input id="url" name="url" className={styles.textBox} placeholder="Url" required></input>
                        <textarea id="description" name="description" className={styles.textBox} rows={5} placeholder="Description" required></textarea>
                        <textarea id="content" name="content" className={styles.textBox} rows={20} placeholder="Content" required></textarea>
                        <input id="password" name="password" type="password" className={styles.textBox} placeholder="Password" required></input>
                        <button className={styles.submit}>Publish</button>
                    </form>
                </div>
            </main>

            <footer className={styles.footer}>
                Created By
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </footer>
        </div >
    )
}

export default New