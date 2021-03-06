const apiRouter = require("express").Router();
const topicsRouter = require('./topics.router')
const fromUsers = require('./users.router')
const articlesRouter = require('./article.router')
const commentsRouter = require('./comment.router')
const endpoint = require('../../endpoints.json')
const {send405} = require('../controllers/error.controller')



apiRouter.route("/").get((req, res, next) => {
  res.status(200).send(endpoint)
}).all(send405)

apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', fromUsers)
apiRouter.use('/articles', articlesRouter)
apiRouter.use('/comments', commentsRouter)

module.exports = apiRouter;
