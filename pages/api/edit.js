import Article from '../../models/article'

export default function handler(req, res) {
    if (req.method === "POST") {
        if (req.body.password == process.env.password) {
            let article = Article.findOne({
                url: req.body.url
            })
            if (req.body.delete == "true") {
                Article.findOneAndDelete({
                    url: req.body.url
                }, function (err) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.redirect('/')
                    }
                })
            } else {
                article.update({
                    title: req.body.title,
                    url: req.body.url,
                    imageUrl: req.body.imageUrl,
                    description: req.body.description,
                    longDescription: req.body.content
                }, function (err) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.redirect('/post/' + req.body.url)
                    }
                })
            }

        } else {
            res.send("Invalid Password")
        }
    } else {
        res.status(404).send("error")
    }
}