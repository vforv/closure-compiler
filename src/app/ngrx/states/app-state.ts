import { UiState, INIT_UI_STATE } from './ui-state';
import { StoreData, INIT_STORE_DATA } from './store-data';

export interface State {
    uiState: UiState
    storeData: StoreData
}

export interface AppState {
    AppState: State
}

export const INIT_STATE: State = {
    uiState: INIT_UI_STATE,
    storeData: INIT_STORE_DATA
}

export const INIT_APP_STATE: AppState = {
    AppState: INIT_STATE
}