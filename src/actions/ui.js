import {
  SET_GLOBAL_ERROR,
  SET_CURRENT_ROUTE,
  SET_CURRENT_TAB,
  SET_CURRENT_STOP_GROUP,
} from 'constants/ActionTypes';

export function setGlobalError(errorMessage) {
  return {
    type: SET_GLOBAL_ERROR,
    payload: errorMessage,
  };
}

export function setCurrentRoute(routeID) {
  return {
    type: SET_CURRENT_ROUTE,
    payload: routeID,
  };
}

export function setCurrentTab(tabName) {
  return {
    type: SET_CURRENT_TAB,
    payload: tabName,
  };
}

export function setCurrentStopGroup(payload) {
  return {
    type: SET_CURRENT_STOP_GROUP,
    payload,
  };
}
