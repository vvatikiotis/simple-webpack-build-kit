import React from 'react';
import { connect } from 'react-redux';
import { showCousin1 } from 'js/redux';

import _debug from 'debug';
const debug = _debug('app:cousin1');

const mapStateToProps = (state) => {
  debug('cousin1');
  return {
    cousin1: state.cousin1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(showCousin1());
    },
  };
};

export const CousinComponent = (props) => {
  const {
    cousin1,
    onClick,
  } = props;
  return (
    <div onClick={onClick}>Cousin 1</div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CousinComponent);
