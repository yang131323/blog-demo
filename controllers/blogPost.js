const Host = 'http://localhost:3600'

const createPerson = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('create person message');
  await next();
};

const createContacts = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('create contact messgae');
  return next();
};

const createTechniques = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('create techique');
  await next();;
};

// 文章的存储方式不同，可能返回的数据类型也不同
const createArticle = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('create article');
  return next();
}

// 文章的存储方式不同，可能返回的数据类型也不同
const createArticles = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('create articles');
  return next();
}

module.exports = {
  'POST /person': createPerson,
  'POST /contacts': createContacts,
  'POST /techniques': createTechniques,
  'POST /article/:id': createArticle,
  'POST /articles': createArticles
}
