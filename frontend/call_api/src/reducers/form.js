import * as types from '../constants/form'
const initialState = {
    formStatus: false,
    title: ''
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_FORM: {
            return {
                ...state,
                formStatus: true
            }
        }
        case types.HIDE_FORM: {
            return {
                ...state,
                formStatus: false,
                title: ''
            }
        }
        case types.CHANGE_FORM_TITLE: {
            return {
                ...state,
                title: action.payload.title
            }
        }
        default: return state;
    }
}
export default reducer;