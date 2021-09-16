import { Dispatch } from "redux";
import * as actionTypes from "./actionsTypes/photoTypes";
import { ISinglePhoto } from "../components/entities/photo";

export const getPhotos = (): Promise<ISinglePhoto[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photoList = await response.json();
    dispatch({
      type: actionTypes.GET_PHOTO,
      photoList,
    });
}) as any