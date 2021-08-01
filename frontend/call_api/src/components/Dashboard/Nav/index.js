import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';

export default class Nav extends Component {

    renderList = () => {
        let xhtml = null;
        xhtml = (
            ROUTES.map((item, index) => {
                return (
                    <li key={index} className="nav-item" >
                        <NavLink to={item.path} exact={item.exact} className="nav-link">
                            {item.name}
                        </NavLink >
                    </li>
                )
            })
        )
        return xhtml;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
