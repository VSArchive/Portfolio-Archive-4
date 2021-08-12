import Article from '../../models/article'

export default function handler(req, res) {
    if (req.method === "POST") {
        if (req.body.password == process.env.password) {
            let article = new Article({
                title: req.body.title,
                url: req.body.url,
                imageUrl: req.body.imageUrl,
                description: req.body.description,
                longDescription: req.body.content
            })
            await article.save(function (err) {
                if (err) {
                    return handleError(err)
                } else {
                    res.redirect('/post/' + req.body.url)
                }
            })

        } else {
            res.send("Error")
        }
    } else {
        res.status(404).send("error")
    }
}