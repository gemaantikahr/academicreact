import React, { Component, Fragment } from 'react';
import Student from '../student/Student';
import Lecture from '../lecture/Lecture';
import Course from '../course/Course';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Calculator from '../calculator/Calculator';
import Schnorr from '../schnorr/Schnorr';

class Home extends Component{
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                        <Route path="/" exact component={Student}/>
                        <Route path="/lecture" component={Lecture}/>
                        <Route path="/course" component={Course}/>
                        <Route path="/calculator" component={Calculator}/>
                        <Route path="/schnorr" component={Schnorr}/>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;