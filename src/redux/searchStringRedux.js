import initialState from "./initialState";

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');
const UPDATE_SEARCHTAG = createActionName('UPDATE_SEARCHTAG');

export const updateSearchString = payload => ({type: UPDATE_SEARCHSTRING, payload});
export const updateSearchTag = payload => ({type: UPDATE_SEARCHTAG, payload});
const searchStringReducer = (statePart = initialState.searchString, action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return {...statePart, string: action.payload}
    case UPDATE_SEARCHTAG:
      return {...statePart, tag: action.payload}
    default:
      return statePart;
  }
}
export default searchStringReducer