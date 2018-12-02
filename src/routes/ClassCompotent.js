import React, { Component } from 'react';

export default class ClassCompotent extends Component {
  constructor(props) {
    super();
    console.log('props is', props);
  }

  render() {
    return (
      <div>
                ClassCompotent
      </div>
    );
  }
}
