import { SEARCH_USER, SEARCH_ERROR } from "../constants/utils";

const getInitialState = {
    error: false,
    data: []
}

export default function(state=getInitialState, action) {
    switch(action.type) {
        case SEARCH_USER:
            return {
                error: false,
                data: [...state.data, action.payload.data]
            }
        
        case SEARCH_ERROR:
            return {
                error: true,
                data: state.data
            }

        default:
            return state;
    }

}