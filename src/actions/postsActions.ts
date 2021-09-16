import { Dispatch } from "redux";
import * as actionTypes from "./actionsTypes/postTypes";
import { ISinglePost } from "../components/entities/posts";

export const getPosts = (): Promise<ISinglePost[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsList = await response.json();
    dispatch({
      type: actionTypes.GET_POST,
      postsList,
    });
}) as any