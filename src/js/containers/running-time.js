import React, { PropTypes } from 'react';
import TimePicker from '../components/time-picker';
//import Speedometer from '../components/speed-o-meter';
import Speedometer from '../components/canvas-speedometer';
import { connect } from 'react-redux';
import { nav } from '../actions/nav';
import { setTime, lessSpeed, moreSpeed } from '../actions/running';
import '../../less/running-time.less';
import { RUN } from '../constants';

const RunningTime = props => (
    <div className={'running-time'}>
        <Speedometer speed={props.speed} maxSpeed={25}/>
        <div className={'speed-controls'}>
            <button onClick={props.lessSpeed}>-</button>
            <button onClick={props.moreSpeed}>+</button>
        </div>
        <TimePicker value={props.time} onChange={props.setTime}/>
        
        <div className={'centre'}>
            <button onClick={props.go}>Go</button>
        </div>

    </div>
);

RunningTime.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    speed: PropTypes.number.isRequired,
    go: PropTypes.func.isRequired,
    moreSpeed: PropTypes.func.isRequired,
    lessSpeed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    options: state.running.timeOptions,
    time: state.running.time,
    speed: state.running.speed
});

const mapPropsToDispatch = dispatch => ({
    setTime: time => dispatch(setTime(time)),
    go: time => {
        dispatch(nav(RUN));
    },
    moreSpeed: time => {
        dispatch(moreSpeed(RUN));
    },
    lessSpeed: time => {
        dispatch(lessSpeed(RUN));
    },

});

export default connect(mapStateToProps, mapPropsToDispatch)(RunningTime);