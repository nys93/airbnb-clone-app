import { ActionCreator } from "redux";

import { IReduxUser, UserActionTypes, SET_USER } from "../types";

export const setUser: ActionCreator<UserActionTypes> = (user: IReduxUser) => {
	return { type: SET_USER, payload: user };
};
