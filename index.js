const http = require('http');
const Koa = require('koa');
const WebSocket = require('ws');
const app = new Koa();
const port = process.env.PORT || 4000;
const koaBody = require('koa-body');
const server = http.createServer(app.callback());
const wss = new WebSocket.Server({server});
const router = require('./router');

require('./document/document.controller');

app
    .use(koaBody({
      // formidable: {
      //   // uploadDir: __dirname + '/public/uploads', // directory where files will be uploaded
      //   // keepExtensions: true, // keep file extension on upload
      // },
      multipart: true,
    }))
    .use(router.routes())
    .use(router.allowedMethods());


wss.on('connection', (ws, req) => {
  // const location = url.parse(req, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', chatService.getChats());
    return ws.send(chatService.getChats());
  });

  ws.send('something');
});

server.listen(port, () => console.log(`server started at ${port}`));
