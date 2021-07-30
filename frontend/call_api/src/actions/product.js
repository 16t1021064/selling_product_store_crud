import * as productConstants from '../constants/product'

export const fetchProductList = (params = {}) => {
    return {
        type: productConstants.FETCH_PRODUCT,
        payload: {
            params
        }
    }
}
export const fetchProductListSuccess = (data) => {
    return {
        type: productConstants.FETCH_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}
export const fetchProductListFailed = (error) => {
    return {
        type: productConstants.FETCH_PRODUCT_FAILED,
        payload: {
            error
        }
    }
}
export const filterProduct = (keyword) => ({
    type: productConstants.FILTER_PRODUCT,
    payload: {
        keyword
    }
})
export const filterProductSuccess = (data) => ({
    type: productConstants.FILTER_PRODUCT_SUCCESS,
    payload: {
        data
    }
})
export const addProduct = (product) => ({
    type: productConstants.ADD_PRODUCT,
    payload: {
        product
    }
})
export const addProductSuccess = (product) => ({
    type: productConstants.ADD_PRODUCT_SUCCESS,
    payload: {
        product
    }
})
export const addProductFailed = (error) => ({
    type: productConstants.ADD_PRODUCT_FAILED,
    payload: {
        error
    }
})
export const deleteProductSuccess = (id) => ({
    type: productConstants.DELETE_PRODUCT_SUCCESS,
    payload: {
        id
    }
})
export const deleteProductFailed = (error) => ({
    type: productConstants.DELETE_PRODUCT_FAILED,
    payload: {
        error
    }
})
export const deleteProduct = (id) => ({
    type: productConstants.DELETE_PRODUCT,
    payload: {
        id
    }
})
export const setProductEditing = (product) => ({
    type: productConstants.SET_PRODUCT_EDITING,
    payload: {
        product
    }
})
export const updateProductSuccess = (product) => ({
    type: productConstants.UPDATE_PRODUCT_SUCCESS,
    payload: {
        product
    }
})
export const updateProductFailed = (error) => ({
    type: productConstants.UPDATE_PRODUCT_FAILED,
    payload: {
        error
    }
})
export const updateProduct = (product) => ({
    type: productConstants.UPDATE_PRODUCT,
    payload: {
        product
    }
})