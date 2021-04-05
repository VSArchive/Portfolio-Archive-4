import Head from 'next/head'
import mongoose from 'mongoose'
import styles from '../../styles/Home.module.css'
import Articles from '../../models/article'
import marked from 'marked'

const Post = ({ article }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{article.title}</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <nav className={styles.navbar}>
                <a href="/">
                    <img src={"/logo.png"}></img>
                </a>
            </nav>

            <h1>{article.title}</h1>
            <main className={styles.main}>
                <div dangerouslySetInnerHTML={{
                    __html: marked(article.longDescription)
                }} className={styles.description}></div>
            </main>

            <footer className={styles.footer}>
                Created By
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </footer>
        </div>
    )
}

Post.getInitialProps = async (context) => {
    try {
        mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => console.log("connected"))
    } catch (error) {
        console.log(error)
    }

    const articles = await Articles.where('url').equals(context.query.url)
    return { article: articles[0] }
}

export default Post