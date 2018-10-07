const Host = 'http://localhost:3600'

const editPerson = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit person message');
  await next();
};

const editContacts = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit contact messgae');
  return next();
};

const editTechniques = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit techique');
  await next();;
};

// 文章的存储方式不同，可能返回的数据类型也不同
const editArticle = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit article');
  return next();
}

// 文章的存储方式不同，可能返回的数据类型也不同
const editArticles = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit articles');
  return next();
}

module.exports = {
  'PATCH /person': editPerson,
  'PATCH /contacts': editContacts,
  'PATCH /techniques': editTechniques,
  'PATCH /article/:id': editArticle,
  'PATCH /articles': editArticles
}
