import React, { PropTypes } from 'react';
import Clock from '../components/clock';
import Speedometer from '../components/speed-o-meter';
import { connect } from 'react-redux';
import { nav } from '../actions/nav';
import { setTime } from '../actions/running';
import '../../less/run.less';

// i want to show..
// speed - maybe speedo is not for this view after all
// remaining time - important thing, should be big
// speed +/- buttons
// 
// if you can change speed then it needs to show the target time/eta somewhere
// distance covered so far
// distance remaining
// some kind of circular progress bar could be good for distances but we cant have that and speed same time
// its just that the speedo is probably not gonna change and you know now how fst you are going, only use if you wanna slow down
// give up button(could just be back, this could be an annoying button..i want it though since it happens)

// it could be the case that you click on the speedo and it does a barrel roll and turns into the circle progress thing
// then click again to make it go back
// then we would only be showing the +/- buttons on the speedo view


const Run = props => (
    <div className={'run'}>
        <Speedometer speed={props.speed} maxSpeed={25}/>
        <Clock value={props.time}/>
    </div>
);

Run.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    speed: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    options: state.running.timeOptions,
    time: state.running.time,
    speed: state.running.speed
});

const mapPropsToDispatch = dispatch => ({
    setTime: time => dispatch(setTime(time))
});

export default connect(mapStateToProps, mapPropsToDispatch)(Run);