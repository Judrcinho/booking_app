import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>
const Laning = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="container">
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Laning} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/survey' component={Survey} />
                        <Route path='/header' component={Header} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);