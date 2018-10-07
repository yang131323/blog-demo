const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
// const photo = require('./static/photo');
const data = require('./data');

app.use(bodyParser());

app.use((ctx, next) => {
  console.log('header')
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS, PATCH, DELETE');
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
  ctx.set('Access-Control-Max-Age', 30)
  next();
});

const main = async function (ctx, next) {
  console.log('come on');
  console.log('app.env' + app.env)
  ctx.response.type = 'json';
  const obj = JSON.stringify(data);
  ctx.response.body = obj;
  await next();
};

app.use(main);

app.listen(3600, function () {
  console.log('Exapmle app listening on port 3600!');
});