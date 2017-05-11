import React from 'react';
import Running from './running';
import Boxing from './boxing';
import Bodybuilding from './bodybuilding';
import Circuits from './circuits';
import TimedEvent from './timed-event';
import TimeCap from './time-cap';
import History from './history';
import Home from './home';
import Speed from './speed';
import RunningTime from './running-time';
import RunningDistance from './running-distance';
import Router from './router';
import Route from './route';
import Run from './run';
import {
    HOME,
    RUNNING,
    BOXING,
    BODYBUILDING,
    CIRCUITS,
    TIMED_EVENT,
    TIME_CAP,
    HISTORY,
    SPEED,
    RUNNING_TIME,
    RUNNING_DISTANCE,
    RUNNING_CIRCUITS,
    RUN
} from '../constants';

const AppRouter = () => (
    <Router>
        <Route route={HOME} icon={'home'}>
            <Home />
        </Route>
        <Route route={RUNNING} icon={'running-man'}>
            <Running />
        </Route>
         <Route route={RUNNING_TIME} icon={'running-man'}>
            <RunningTime />
        </Route>
        <Route route={RUNNING_DISTANCE} icon={'running-man'}>
            <RunningDistance />
        </Route>
        <Route route={RUN} icon={'running-man'}>
            <Run />
        </Route>
        
        <Route route={BOXING}>
            <Boxing />
        </Route>
        <Route route={BODYBUILDING}>
            <Bodybuilding />
        </Route>
        <Route route={CIRCUITS}>
            <Circuits />
        </Route>
        <Route route={TIMED_EVENT}>
            <TimedEvent />
        </Route>
        <Route route={TIME_CAP}>
            <TimeCap />
        </Route>
        <Route route={HISTORY}>
            <History />
        </Route>
        <Route route={SPEED}>
            <Speed />
        </Route>
    </Router>
);

AppRouter.displayName = 'AppRouter';

export default AppRouter;