import { Dispatch } from "redux";
import * as actionTypes from "./actionsTypes/userTypes";
import { ISingleUser } from "../components/entities/users";

export const getUsers = (): Promise<ISingleUser[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();
    dispatch({
      type: actionTypes.GET_USERS,
      usersList,
    });
}) as any