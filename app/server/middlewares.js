const consola = require('consola');
var Router = require('koa-router');
var router = new Router();
//const jwt = require('koa-jwt');
//const jwksRsa = require('jwks-rsa');

exports.Middleware = (app) => {

  var jwksHost = `https://${process.env.auth0_domain}`;
  var audience = `https://${process.env.auth0_audience}`;
  var issuer = "https://yourdomain.auth0.com";

  // app.use(jwt({
  //   secret: jwksRsa.koaJwtSecret({
  //     cache: true,
  //     rateLimit: true,
  //     jwksRequestsPerMinute: 2,
  //     jwksUri: `${jwksHost}/.well-known/jwks.json`
  //   }),
  //   audience,
  //   issuer,
  //   algorithms: [ 'RS256' ]
  // }));

  // router.get('/me', ctx => {
  //   ctx.body = ctx.state.user
  // });
  

  async function world(ctx, next){
    if (ctx.query.code && ctx.query.state) {
      
    }
    console.log(ctx.request);
    ctx.body = 'World';
  }
  router.get('/login/callback',world); // this will bypass nuxt altogether and be handled only by koa

  app.use(router.routes());

  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async (ctx, next) => {
    //try {

      //if (ctx.req.path)
      //console.log("request:");
      if (ctx.request.url.startsWith('/socket.io')) {
        return;
      }

      //console.log("response:");
      //console.log(ctx.response);
      await next()

      
      // // Handle 404 - throw it as an error.
      // if (ctx.status === 404 && ctx.res.headersSent === false) {
      //   ctx.throw(404)
      // }

      // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}
    //   if (ctx.status === 200 && ctx.res.headersSent === false) {
    //     ctx.body = {
    //       status: 200,
    //       data: ctx.body
    //     }
    //   }
    // } catch (err) {
    //   ctx.status = err.status || 500

    //   ctx.type = 'json'
    //   ctx.body = {
    //     status: ctx.status,
    //     message: err.message
    //   }

    //   ctx.app.emit('error', err, ctx)
    //} catch (err) {

    //}
  })
}