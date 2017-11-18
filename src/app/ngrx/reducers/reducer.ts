
import { StoreModule, Action } from '@ngrx/store';
import { INIT_APP_STATE, State, INIT_STATE } from '../states/app-state';
import { LOADED_USER_ACTION } from '../actions/actions';

export function reducerStore(state: State = INIT_STATE, action: any): State {

    switch (action.type) {

        case LOADED_USER_ACTION:
            const userData = action;
            const newState: State = Object.assign({}, state)
            
            newState.storeData = {
                user: action.payload.user
            }

            return newState;
        default:
            return state;

    }

}