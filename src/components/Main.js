require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/CardComponent.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="root">
      	<Card />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
