import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import {Landing} from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path='/' exact component={Landing} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/surveys' component={Survey} />
                        <Route path='/header' component={Header} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);