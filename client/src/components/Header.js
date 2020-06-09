import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href='/auth/google'> Login With google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href='/api/logout'>LOG OUT</a>
                    </li>
                );
        }
    }

    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo">
                            Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStatesToProps = ({auth}) => {
    return {auth}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => dispatch(actions.changeName(name))
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Header);