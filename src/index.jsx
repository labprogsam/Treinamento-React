import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './State/App.context';
import {
  Github,
} from './components';

function App() {
  return (
    <section className="app">
      <Provider>
        <Github />
      </Provider>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
