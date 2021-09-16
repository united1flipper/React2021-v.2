
import { ISinglePost } from "../entities/posts";
import * as actionTypes from "../../actions/actionsTypes/postTypes";

export interface IPostsReducer {
  postsList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
  postsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_POST: {
      const payload: actionTypes.IPhotoTypes["GET_POST"] = action;
      return {
        ...state,
        postsList: payload.postsList,
      };
    }

    default: {
        return state;
    }
  }
};