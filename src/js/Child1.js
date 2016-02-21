import React from 'react';
import { connect } from 'react-redux';
import { showChild1 } from 'js/redux';

import _debug from 'debug';
const debug = _debug('app:child1');

const mapStateToProps = (state) => {
  debug('child1 stateToProps');
  return {
    child1: state.child1,
  };
};

const mapDispatchToProps = (dispatch) => {
  debug('child1 dispatchToProps');
  return {
    onClick: () => {
      dispatch(showChild1());
    },
  };
};

export const ChildComponent = (props) => {
  const {
    child1,
    onClick,
  } = props;
  return (
    <div onClick={onClick}>Child 1</div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildComponent);
