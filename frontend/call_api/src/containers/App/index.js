import React, { Component } from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore'
import ProductBoard from '../ProductBoard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToastContainer />
                <Nav />
                <Header />
                <ProductBoard />
            </Provider>
        )
    }
}

export default App;
