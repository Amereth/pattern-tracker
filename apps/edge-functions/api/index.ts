import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import eventsApp from './routes/events';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TURSO_DATABASE_URL: string;
      TURSO_AUTH_TOKEN: string;
    }
  }
}

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' });
});

app.route('/events', eventsApp);

export default handle(app);
