import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default class Dashboard extends Component {
    render() {
        const { children, name } = this.props
        return (
            <>
                <Nav />
                <Header name={name} />
                {children}
                <Footer />
            </>
        )
    }
}
