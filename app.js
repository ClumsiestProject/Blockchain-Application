const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

console.log( 'Koa.js Server in 127.0.0.1:3000    ')
app.listen(3000);