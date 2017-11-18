export interface StoreData {
    user: {
        id: number;
        name: string;
    }
}

export const INIT_STORE_DATA: StoreData = {
    user: {
        id: null,
        name: null
    }
}