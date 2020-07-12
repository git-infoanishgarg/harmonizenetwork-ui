import * as actionTypes from "../actions_types";

export const getStories = () => {
  console.log("okok")
  return {
    type: actionTypes.GET_STORIES,
    payload: {
      value: 1
    },
  };
};
