import React, { Component } from 'react';

const { Fragment } = React;
// console.log('Fragment', Fragment);
class Father extends Component {
  constructor(props) {
    super();
    this.state = {
      hair: 'black',
      nose: 'high',
    };
    console.log('props is', props);
    this.props = props;
  }

  render() {
    const { render } = this.props;
    return (
      <Fragment>
        {render(this.state)}
      </Fragment>
    );
  }
}
const Child = ({ feature }) => (
  <div>
    {console.log('feature', feature)}
    <p>hair : <span style={{ color: 'red' }}>{feature.hair}</span></p>
    <p>nose : <span style={{ color: 'red' }}>{feature.nose}</span></p>
  </div>
);
export default () => (
  <div>
    <h1>RenderProps</h1>
    <Father render={obj => (<Child feature={obj} />)} />
  </div>
);
