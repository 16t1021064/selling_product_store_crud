import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch } from 'react-router-dom'
import { ROUTES } from '../../constants';
import LayoutRoute from '../../commons/LayoutRoute'
const store = configureStore()



class App extends Component {
    renderLayoutRoutes = () => {
        let xhtml = null;
        xhtml = ROUTES.map((route) => {
            return (<LayoutRoute
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
                name={route.name}
            />)
        })
        return xhtml
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer />
                    <Switch>
                        {this.renderLayoutRoutes()}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
