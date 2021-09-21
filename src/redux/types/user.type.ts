import { IUser } from "../../models/user";

export type IReduxUser = IUser;

export const SET_USER = "SET_USER";

interface SetUser {
	type: typeof SET_USER;
	payload: IReduxUser;
}

export type UserActionTypes = SetUser;
