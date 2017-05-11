import React, { PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MenuItem from '../components/menu-item';
import { nav } from '../actions/nav';
import {
    RUNNING_DISTANCE,
    RUNNING_CIRCUITS
} from '../constants';

// running-menu
    // Circuits
    // distance
        // pick the distance from the list and we progress to next
        // which has the time picker and the speedometer on the same screen
        // and you can change the time only
        // and the speedometer will update a little needle
        // and output a cool looking time in kph

        // circuits will follow this exact same flow
        // except it needs an additions step for laps and rest time
        // they could be on the above screen potentially


// <MenuItem icon={'speedometer'} title={`Speed ${props.speed} kph`} onClick={props.setSpeed}/>
//         <MenuItem icon={'clock'} title={`Time ${props.time}`} onClick={props.setTime}/>
//         <MenuItem icon={'running-man'} title={`Distance ${props.distance}`} onClick={props.setDistance}/>
//         <MenuItem icon={'redo'} title={`Circuits`} onClick={props.setDistance}/>

const Running = props => (
     <div className={'menu'}>        
        <MenuItem icon={'running-man'} title={`Distance`} onClick={props.navDistance}/>
        <MenuItem icon={'redo'} title={`Circuits`} onClick={props.navCircuits}/>
    </div>
);

Running.displayName = 'Running';

Running.propTypes = {    
    navDistance: PropTypes.func.isRequired,
    navCircuits: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    // speedOptions: state.running.speedOptions,
    // distanceOptions: state.running.distanceOptions,
    // timeOptions: state.running.timeOptions,
    // distance: state.running.distanceOptions.find(option => option.value === state.running.distance).label,
    // speed: state.running.speed,
    // time: moment(state.running.time).format('HH:mm:ss')    
});

const mapPropsToDispatch = dispatch => ({
    navDistance: () => dispatch(nav(RUNNING_DISTANCE)),
    navCircuits: () => dispatch(nav(RUNNING_CIRCUITS))
});

export default connect(mapStateToProps, mapPropsToDispatch)(Running);
