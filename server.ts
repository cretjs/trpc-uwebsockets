import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import type { CreateContextOptions } from 'trpc-uwebsockets';
import { createUWebSocketsHandler } from 'trpc-uwebsockets';
import { App } from 'uWebSockets.js';
import z from 'zod';


const t = initTRPC.context<Context>().create();

const createContext = ({ req, res }: CreateContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization === 'meow') {
      return {
        name: 'KATT',
      };
    }
    return null;
  };
  return {
    req,
    res,
    user: getUser(),
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;

const router = t.router({
  hello: t.procedure
    .input(
      z
        .object({
          who: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ input, ctx }) => {
      return {
        text: `hello ${input?.who ?? ctx.user?.name ?? 'world'}`,
      };
    }),
});

const app = App();

createUWebSocketsHandler(app, '/api/trpc', {
  router,
  createContext,
});

/* dont crash on unknown request */
app.any('/*', (res) => {
  res.writeStatus('404 NOT FOUND');
  res.writeHeader( "Content-Type", "text/html; charset=utf-8" );
  res.end( "<b>404 Not Found</b>" );
});

app.listen('localhost', 8000, () => {
  console.log('Server listening on http://localhost:8000');
});