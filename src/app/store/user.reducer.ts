import { User } from '../model/user';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
    isAuthenticated: boolean,
    user?: User,
    error?: string,
}

export const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

export function UserReducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.RegisterSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                error: null,
            };
        }
        case UserActionTypes.RegisterFailure: {
            return {
                ...state,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
}