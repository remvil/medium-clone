const articlecontroller = require('../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    // Get all articles
    router.route('/articles').get(articlecontroller.getAll);
    // select an article to view
    router.route('/article/:id').get(articlecontroller.getArticle);
    // Add an article
    router.route('/articles').post(articlecontroller.addArticle);
    // clap on an article
    router.route('/articles/clap').post(articlecontroller.clapArticle);
    // comment an article
    router.route('/articles/comment').post(articlecontroller.commentArticle);
}