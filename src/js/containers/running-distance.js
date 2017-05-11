import React, { PropTypes } from 'react';
import Menu from '../components/menu';
import { connect } from 'react-redux';
import { nav, setIcon, setTitle } from '../actions/nav';
import { RUNNING_TIME } from '../constants';
import { setDistance } from '../actions/running';

const RunningDistance = props => (
    <Menu options={props.options} onSelect={props.setDistance} icon={'running-man'}/>
);

RunningDistance.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    distance: PropTypes.number.isRequired,
    setDistance: PropTypes.func.isRequired
};

RunningDistance.displayName = 'RunningDistance';

const mapStateToProps = state => ({
    options: state.running.distanceOptions, 
    distance: state.running.distance  
});

const mapPropsToDispatch = dispatch => ({
    setDistance: distance => {
        dispatch(setDistance(distance.value));
        dispatch(nav(RUNNING_TIME, `${distance.label}`));
    }
});

export default connect(mapStateToProps, mapPropsToDispatch)(RunningDistance);