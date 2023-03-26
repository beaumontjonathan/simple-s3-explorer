import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { useDeferStream } from '@graphql-yoga/plugin-defer-stream';
import { schema } from './schema';

const yoga = createYoga({
  schema,
  plugins: [useDeferStream()],
});

const server = createServer(yoga);

const port = 4000;

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
