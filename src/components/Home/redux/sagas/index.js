import { takeLatest,put } from "redux-saga/effects";
import * as actionTypes from "../actions_types";

function* getStoriesAsync (){
    console.log("testing")
    put({type: "GET_STORIES_ASYNC", value: 1});
    yield
}

export function* watchFetchStories(){
    console.log("fone")
    yield takeLatest(actionTypes.GET_STORIES, getStoriesAsync)
}