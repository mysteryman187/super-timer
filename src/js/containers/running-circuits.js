import React, { PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MenuItem from '../components/menu-item';
import { nav } from '../actions/nav';
import {
    SPEED,
    RUNNING_TIME,
    DISTANCE
} from '../constants';

const RunningCircuits = props => (
     <div className={'menu'}>
        <MenuItem icon={'running-man'} title={`Distance`} onClick={props.setDistance}/>
        <MenuItem icon={'redo'} title={`Circuits`} onClick={props.setDistance}/>
    </div>
);

RunningCircuits.displayName = 'RunningCircuits';

RunningCircuits.propTypes = {    
    speed: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    setSpeed: PropTypes.func.isRequired,
    setTime: PropTypes.func.isRequired,
    setDistance: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    speedOptions: state.running.speedOptions,
    distanceOptions: state.running.distanceOptions,
    timeOptions: state.running.timeOptions,
    distance: state.running.distanceOptions.find(option => option.value === state.running.distance).label,
    speed: state.running.speed,
    time: moment(state.running.time).format('HH:mm:ss')    
});

const mapPropsToDispatch = dispatch => ({
    setDistance: () => dispatch(nav(DISTANCE)),
    setTime: () => dispatch(nav(RUNNING_TIME)),
    setSpeed: () => dispatch(nav(SPEED))
});

export default connect(mapStateToProps, mapPropsToDispatch)(RunningCircuits);
