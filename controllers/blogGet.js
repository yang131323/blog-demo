const Host = 'http://localhost:3600'

const getPerson = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('get person message');
  await next();
};

const getContacts = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('get contact messgae');
  await next();
};

const getTechniques = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('get techique');
  await next();;
};

// 文章的存储方式不同，可能返回的数据类型也不同
const getArticle = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('get article');
  await next();
}

// 文章的存储方式不同，可能返回的数据类型也不同
const getArticles = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('get articles');
  await next();
}

module.exports = {
  'GET /person': getPerson,
  'GET /contacts': getContacts,
  'GET /techniques': getTechniques,
  'GET /article/:id': getArticle,
  'GET /articles': getArticles
}
