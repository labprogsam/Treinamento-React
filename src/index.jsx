import React from 'react';
import ReactDOM from 'react-dom';

import {
  Github,
} from './components';

function App() {
  return (
    <section className="app">
      <Github />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
