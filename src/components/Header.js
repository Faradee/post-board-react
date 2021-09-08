import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
export class Header extends Component {
    render() {
        return (
            <div className="header">
           
                <button id="login">Log in</button>
                <button id="signin">Sign in</button>
            </div>
        )
    }
}

export default Header
