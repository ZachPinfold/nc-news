\c nc_news_test;

-- SELECT * FROM topics;
-- SELECT * FROM users;
-- SELECT * FROM articles;
-- SELECT * FROM comments;

SELECT articles.*, COUNT(comments.article_id) FROM articles
JOIN comments 
ON articles.article_id = comments.article_id
WHERE articles.article_id = 1
GROUP BY articles.article_id;