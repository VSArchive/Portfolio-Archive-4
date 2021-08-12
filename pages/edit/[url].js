import Head from 'next/head'
import mongoose from 'mongoose'
import styles from '../../styles/Home.module.css'
import Articles from '../../models/article'

const EditPost = ({ article }) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Edit Article</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <nav className={styles.navbar}>
                <a href="/">
                    <img src={"/logo.png"}></img>
                </a>
            </nav>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <form action="/api/edit" method="POST">
                        <input id="title" name="title" className={styles.textBox} defaultValue={article.title} required></input>
                        <input id="url" name="url" className={styles.textBox} defaultValue={article.url} readOnly></input>
                        <input id="imageUrl" name="imageUrl" className={styles.textBox} defaultValue={article.imageUrl} required></input>
                        <textarea id="description" name="description" className={styles.textBox} rows={5} defaultValue={article.description} required></textarea>
                        <textarea id="content" name="content" className={styles.textBox} rows={20} defaultValue={article.longDescription} required></textarea>
                        <input id="password" name="password" type="password" className={styles.textBox} placeholder="Password" required></input>
                        <button className={styles.submit}>Edit</button>
                        <button name="delete" value="true" className={styles.submit}>Delete</button>
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

EditPost.getInitialProps = async (context) => {
    try {
        mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndexes: true
        }, () => console.log("connected"))
    } catch (error) {
        console.log(error)
    }

    const articles = await Articles.where('url').equals(context.query.url)
    return { article: articles[0] }
}

export default EditPost