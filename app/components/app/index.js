/**
 * App component is the main application React Component.
 */
import React, { PropTypes } from 'react';

const App = ({ children }) => <div>
  {children}
</div>
;

/**
 * @prop {array} children - React children app component's elements.
 */
App.propTypes = {
  children: PropTypes.element,
};

App.defaultProps = {
  children: null,
};

export default App;
