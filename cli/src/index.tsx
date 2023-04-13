import { render } from 'ink';
import { RelayEnvironmentProvider } from 'react-relay';
import { environment } from './relay.js';
import App from './App.js';
import { clear } from './helpers.js';

const result = render(
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>
);

result.waitUntilExit().then(() => {
  result.clear();
  clear();
  process.exit();
});
