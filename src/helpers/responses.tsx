const dispatchLoad = (dispatch: any, type: any, payload: any) => {
  return dispatch({type, load: true, payload});
};
const dispatchSuccess = (dispatch: any, type: any, payload: any) => {
  return dispatch({type, load: false, payload});
};
const dispatchError = (dispatch: any, type: any, error: any) => {
  return dispatch({type, load: false, payload: [], error});
};

export {dispatchLoad, dispatchSuccess, dispatchError};
