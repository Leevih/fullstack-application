import { GET_ALL } from '../actions/image.action'

const initialState = {
    images: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL: {
            const data = action.payload;
            return { ...state, images: data }
        }
        default:
                return state
        }
} 

export default reducer