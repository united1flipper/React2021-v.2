import { Dispatch } from "redux";
import * as actionTypes from "./actionsTypes/commentsTypes";
import { ISingleComment } from "../components/entities/comments";

export const getComments = (): Promise<ISingleComment[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentsList = await response.json();
    dispatch({
      type: actionTypes.GET_COMMENTS,
      commentsList,
    });
}) as any