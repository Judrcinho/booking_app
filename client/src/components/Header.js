import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
                return ([
                    <li key="1"><Payments/></li>,
                    <li key="3" style={{margin: '0 10px 0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href='/api/logout'>LOG OUT</a></li>
                ]);
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