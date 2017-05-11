import React, { PropTypes } from 'react';
import Menu from '../components/menu';
import { connect } from 'react-redux';
import { nav } from '../actions/nav';

const Speed = props => (
    <Menu options={props.options} onSelect={props.setSpeed} icon={'running-man'}/>
);

Speed.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    speed: PropTypes.number.isRequired,
    setSpeed: PropTypes.func.isRequired
};

Speed.displayName = 'Speed';

const mapStateToProps = state => ({
    options: state.running.speedOptions,
    speed: state.running.speed  
});

const mapPropsToDispatch = dispatch => ({
    setSpeed: () => dispatch({})
});

export default connect(mapStateToProps, mapPropsToDispatch)(Speed);