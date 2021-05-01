import Article from '../../models/article'

export default function handler(req, res) {
    if (req.method === "POST") {
        if (req.body.password == process.env.password) {
            let article = new Article({
                title: req.body.title,
                url: req.body.url,
                description: req.body.description,
                longDescription: req.body.content
            })
            article.save(function (err) {
                if (err) {
                    return handleError(err)
                } else {
                    res.send("Success")
                }
            })

        } else {
            res.send("Error")
        }
    } else {
        res.status(404).send("error")
    }
}