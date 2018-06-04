import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List.js'
import './index.css';

const App = () => {
  return (
    <div>
      <Header/>
      <List />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**REACT NOTES:

For presentation components, better to use function components (above)
Use class based components for things that need state or lifecycle hooks (list.js)

**/
