import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container } from '@cerebral/fluent';
import controller from './controller';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
