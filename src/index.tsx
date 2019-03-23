import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

function Hello() {
  return (
    <div className="hello">
      <div className="greeting">
        Hello
      </div>
    </div>
  );
}

ReactDOM.render(
  <Hello />
  document.getElementById('root') as HTMLElement
);
