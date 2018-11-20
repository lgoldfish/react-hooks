import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import echarts from 'echarts';
import { Button } from 'antd';

class Component1 extends Component {
  componentDidMount() {
    console.log('this props is', this.props);
    console.log('echarts is', echarts);
  }

  render() {
    const { show } = this.props;
    return (
      <div>
        {JSON.stringify(show)}
        <img src={require('../assets/images/picture.png')} alt="" />
        <Button type="primary">button</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state is', state);
  return {
    show: state.isShowReducer.show,
  };
};

export default connect(mapStateToProps)(Component1);
Component1.propTypes = {
  show: PropTypes.object.isRequired,
};
