import * as productConstants from '../constants/product'
import { toastError, toastSuccess } from '../helpers/toastHelper'

const initialState = {
    productList: [],
    productEditing: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCT: {
            return {
                ...state,
                productList: []
            }
        }
        case productConstants.FETCH_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                productList: data
            }
        }
        case productConstants.FETCH_PRODUCT_FAILED: {
            console.log(1);
            const { error } = action.payload;
            toastError(error)
            console.log(2);
            return {
                ...state,
                productList: []
            }
        }
        case productConstants.FILTER_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                productList: data
            }
        }
        case productConstants.DELETE_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.DELETE_PRODUCT_SUCCESS: {
            const { id } = action.payload;
            var idString = String(id)
            toastSuccess('Xóa công việc thành công')
            return {
                ...state,
                productList: state.productList.filter(item => item.id !== idString)
            }
        }
        case productConstants.DELETE_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error)
            return {
                ...state
            }
        }
        case productConstants.ADD_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.ADD_PRODUCT_SUCCESS: {
            const { product } = action.payload;
            toastSuccess('Thêm mới công việc thành công')
            return {
                ...state,
                productList: product.concat(state.productList)
            }
        }
        case productConstants.ADD_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error)
            return {
                ...state
            }
        }
        case productConstants.SET_PRODUCT_EDITING: {
            const { product } = action.payload;
            return {
                ...state,
                productEditing: product
            }
        }
        case productConstants.UPDATE_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.UPDATE_PRODUCT_SUCCESS: {
            const { product } = action.payload;
            console.log(product);
            const { productList } = state;
            const index = productList.findIndex(item => item.id === product.id);
            if (index !== -1) {
                const newList = [
                    ...productList.slice(0, index),
                    product,
                    ...productList.slice(index + 1)
                ];
                toastSuccess('Cập nhật công việc thành công')
                return {
                    ...state,
                    productList: newList,
                }
            }
            return {
                ...state
            }
        }
        case productConstants.UPDATE_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
            }
        }
        default: return state;
    }
}
export default reducer;