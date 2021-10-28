import Head from 'next/head'
import styles from '../styles/Home.module.css'
import mongoose from 'mongoose'
import Articles from '../models/article'

const Home = (props) => {
	const { articles } = props
	return (
		<div className={styles.container}>
			<Head>
				<title>Vineel Sai | Blog</title>
				<meta name="description" content="Blog by Vineel Sai"></meta>
				<link rel="icon" href="/logo.png" />
			</Head>

			<main className={styles.main}>
				<div className={styles.sidebar}>
					<img className={styles.profileImg} src="/profile.jpg"></img>
					<a className={styles.name}>Vineel Sai</a>
					{/* <a href="mailto:vineelsai26@gmail.com" className={styles.email}>vineelsai26@gmail.com</a> */}
					<div className={styles.ldiv}>
						<a href="#home" className={styles.nav}>Home</a>
						<a href="#about" className={styles.nav}>About</a>
						<a href="#posts" className={styles.nav}>Posts</a>
					</div>
				</div>
				<div id="home" className={styles.parallax}>
				</div>
				<div id="about">
				</div>
				<div id="posts" className={styles.grid}>
					{
						articles.map(article => (
							<a href={"post/" + article.url} className={styles.card} key={article._id}>
								<img src={article.imageUrl} className={styles.image} alt="image"></img>
								<h3>{article.title}</h3>
								<p>{article.description.substring(0, 100)}</p>
							</a>
						))
					}
				</div>
			</main>

			<footer className={styles.footer}>
				Created By
				<img src="/logo.png" alt="Logo" className={styles.logo} />
			</footer>
		</div >
	)
}

export async function getServerSideProps() {
	try {
		mongoose.connect(process.env.mongodb, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndexes: true
		}, () => console.log("connected"))
	} catch (error) {
		console.log(error)
	}
	const articles = await Articles.find().sort({ createdAt: "desc" })
	console.log(articles)
	return { props: articles }
}

export default Home