const Host = 'http://localhost:3600'

const delPerson = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('del person message');
  await next();
};

const delContacts = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('del contact messgae');
  await next();
};

const delTechniques = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('del techique');
  await next();;
};

// 文章的存储方式不同，可能返回的数据类型也不同
const delArticle = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('del article');
  await next();
}

// 文章的存储方式不同，可能返回的数据类型也不同
const delArticles = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('del articles');
  await next();
}

module.exports = {
  'DELETE /person': delPerson,
  'DELETE /contacts': delContacts,
  'DELETE /techniques': delTechniques,
  'DELETE /article/:id': delArticle,
  'DELETE /articles': delArticles
}
