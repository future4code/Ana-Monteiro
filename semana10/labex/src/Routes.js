import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Main/HomePage.js';

import LoginAdmPage from './pages/LoginAdm/LoginAdmPage.js';

import ListTripsPage from './pages/ListTrips/ListTripsPage.js';

import DetailsTrips from './pages/DetailsTrips/TripDetailsPage.js';

import CreateTripPage from './pages/CreateTrips/CreateTripPage.js';

import ApplicationForm from './pages/ApplicationForm/ApplicationForm.js';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/LoginAdmPage"exact component={LoginAdmPage}/>

                <Route path="/ListTripsPage" exact component={ListTripsPage}/>

                <Route path="/DetailsTrips" exact component={DetailsTrips}/>

                <Route path="/CreateTripPage" exact component={CreateTripPage}/>

                <Route path="/ApplicationForm" exact component={ApplicationForm}/>

            </Switch>
        </BrowserRouter>
    );

};

export default Routes();