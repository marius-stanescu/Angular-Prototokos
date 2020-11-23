import { User } from '../model/user';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
    isAuthenticated: boolean,
    user?: User,
    error?: string,
};

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
        case UserActionTypes.LoginSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                error: null,
            };
        }
        case UserActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.error,
            }
        }
        case UserActionTypes.Logout: {
            return initialState;
        }
        case UserActionTypes.LoadUserSuccess: {
            if (action.user) {
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.user,
                    error: null,
                };
            }

            return { ...state };
        }
        default: {
            return state;
        }
    }
}