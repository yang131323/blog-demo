const Host = 'http://localhost:3600'

const editPerson = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit person message');
  await next();
};

const editContacts = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit contact messgae');
  await next();
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
  await next();
}

// 文章的存储方式不同，可能返回的数据类型也不同
const editArticles = async function (ctx, next) {
  ctx.response.type = 'json';
  console.log('edit articles');
  await next();
}

module.exports = {
  'PUT /person': editPerson,
  'PUT /contacts': editContacts,
  'PUT /techniques': editTechniques,
  'PUT /article/:id': editArticle,
  'PUT /articles': editArticles
}
