import ReactDOM from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import App from './components/App';
import 'bulma/css/bulma.min.css';
import './main.css';

import { worker } from '../src/mocks/browser.js';

// if (process.env.NODE_ENV === 'development') {
worker.start();
// }
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);
