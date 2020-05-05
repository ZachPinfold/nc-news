const connection = require("../connection");

exports.selectArticleById = (article_id) => {
  return connection
    .select("articles.*")
    .count('comments.comment_id as comment_count')
    .from("articles")
    .join('comments', 'articles.article_id', '=', 'comments.article_id')
    .where("articles.article_id", article_id)
    .groupBy('articles.article_id')
    .returning("*")
    .then((articleData) => {
        console.log(articleData)
       return articleData[0]
    });
};

exports.patchArticleVoteById = (article_id, votes) => {
    return connection('articles')
    // .update({votes})
    .where({article_id})
    .increment('votes', 10)
    .returning('*')
    .then((article) => {
        console.log(article)
    })
}