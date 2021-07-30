import axiosService from '../commons/axiosService'
import { API_ENDPOINT } from '../constants'
const url = 'products'
const addUrl = 'add'
const deleteUrl = 'delete'
const updateUrl = 'update'
export const getList = (params = {}) => {
    if (Object.keys(params).length > 0) {
        return axiosService.post(`${API_ENDPOINT}/${url}`, params)
    } else {
        return axiosService.get(`${API_ENDPOINT}/${url}`)
    }
}

export const addProduct = (product) => {
    return axiosService.post(`${API_ENDPOINT}/${addUrl}`, product)
}
export const deleteProduct = (id) => {
    return axiosService.delete(`${API_ENDPOINT}/${deleteUrl}/${id}`)
}
export const updateProduct = (data, id) => {
    return axiosService.put(`${API_ENDPOINT}/${updateUrl}/${id}`, data)
}