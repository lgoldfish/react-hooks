import React, { Component } from 'react';
import Highlight from 'react-highlight';
import ReadMe from '../../README.md';
export default class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={{width:'60%',margin:'0 auto ',height:'100%'}}>
        <Highlight innerHTML>
            {ReadMe}
        </Highlight>         
     </div>
    );
  }
}
