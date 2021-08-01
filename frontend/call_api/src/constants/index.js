import AdminHomePage from '../components/AdminHomePage'
import ProductBoard from '../containers/ProductBoard'

export const API_ENDPOINT = 'http://localhost:3000'


export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 201
}

export const ROUTES = [
    {
        path: '/',
        name: 'Trang chủ',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/product',
        name: 'Quản lý hàng hóa',
        component: ProductBoard
    },
]
