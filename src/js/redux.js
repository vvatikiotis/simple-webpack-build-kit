import { combineReducers } from 'redux';
import _debug from 'debug';
const debug = _debug('app:redux');

const SHOW_CHILD_1 = 'SHOW_CHILD_1';
const SHOW_CHILD_2 = 'SHOW_CHILD_2';

export function showChild1() {
  return {
    type: SHOW_COUSIN_1, payload: { child1: { visible: true } },
  };
};

export function showChild2() {
  return {
    type: SHOW_CHILD_2, payload: { child2: { visible: true } },
  };
};

const initialChildState = {
  child1: { visible: false },
  child2: { visible: false },
};
export function reduceChildren(state = initialChildState, action) {
  switch (action.type) {
    case SHOW_CHILD_1:
      return Object.assign({}, state, action.payload);

    case SHOW_CHILD_2:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

// -------------------------------------------------------

const SHOW_COUSIN_1 = 'SHOW_COUSIN_1';
const SHOW_COUSIN_2 = 'SHOW_COUSIN_2';

export function showCousin1() {
  return {
    type: SHOW_COUSIN_1, payload: { cousin1: { visible: true } },
  };
};

export function showCousin2() {
  return {
    type: SHOW_COUSIN_2, payload: { cousin2: { visible: true } },
  };
};

const initialCousinState = {
  cousin1: { visible: false },
  cousin2: { visible: false },
};
export function reduceCousins(state = initialCousinState, action) {
  switch (action.type) {
    case SHOW_COUSIN_1:
      return Object.assign({}, state, action.payload);

    case SHOW_COUSIN_2:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export default combineReducers({
  children: reduceChildren,
  cousins: reduceCousins,
});
