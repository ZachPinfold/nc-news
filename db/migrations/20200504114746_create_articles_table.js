exports.up = function (knex) {
  return knex.schema.createTable("articles", (articlesTable) => {
    articlesTable.increments("article_id").primary();
    articlesTable.text("title")
    articlesTable.text("body")
    articlesTable.integer('votes').defaultTo("0")
    articlesTable.text('topic')
    articlesTable.foreign('topic').references("topics.slug")
    articlesTable.text('author')
    articlesTable.foreign('author').references("users.username")
    articlesTable.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
