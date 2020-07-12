import * as actionTypes from "../actions_types";
const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "GET_STORIES_ASYNC":
      newState.age += action.value;
      break;
    default:
      return state;
  }
}
export default reducer;
