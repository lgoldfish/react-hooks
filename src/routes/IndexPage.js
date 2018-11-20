import React, { Component } from 'react';
import Component1 from '../components/Component1';

class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
IndexPage
        <div><Component1 /></div>
      </div>
    );
  }
}
export default IndexPage;
