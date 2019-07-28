import * as express from 'express';
import { Request, Response } from 'express';

function handleHelloWorld(_: Request, res: Response) {
  res.json({ msg: 'Hello, world' });
}

function handleReverse(req: Request, res: Response) {
  res.json({
    msg: req.params.msg
      .split('')
      .reverse()
      .join(''),
  });
}

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', handleHelloWorld);
app.get('/reverse/:msg', handleReverse);

const server = app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d', app.get('port'));
});

export { server, app };
