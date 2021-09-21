import { UserActionTypes, SET_USER, IReduxUser } from "../types";

type UserState = IReduxUser;

const initialState: UserState = {
	userId: 0,
	userName: "",
};

const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
	switch (action.type) {
		case SET_USER: {
			return {
				...state,
				userId: action.payload.userId,
				userName: action.payload.userName,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
