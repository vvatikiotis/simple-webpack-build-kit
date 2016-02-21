import React from 'react';
import { connect } from 'react-redux';
import { showChild2 } from 'js/redux';

import _debug from 'debug';
const debug = _debug('app:child2');

const mapStateToProps = (state) => {
  debug('child2');
  return {
    child2: state.child2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(showChild2());
    },
  };
};

export const ChildComponent = (props) => {
  const {
    child2,
    onClick,
  } = props;
  return (
    <div onClick={onClick}>Child 2</div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildComponent);
