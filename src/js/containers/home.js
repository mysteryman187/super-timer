import React, { PropTypes } from 'react';
import MenuItem from '../components/menu-item';
import { connect } from 'react-redux';
import { nav } from '../actions/nav';
import '../../less/menu.less';
import {
    RUNNING,
    BOXING,
    BODYBUILDING,
    CIRCUITS,
    TIMED_EVENT,
    TIME_CAP,
    HISTORY
} from '../constants';

const Home = props => (
    <div className={'menu'}>
        <MenuItem icon={'running-man'} title={RUNNING} onClick={props.running}/>
        <MenuItem icon={'star'} title={BOXING} onClick={props.boxing}/>
        <MenuItem icon={'dumbell'} title={BODYBUILDING} onClick={props.bodybuilding}/>
        <MenuItem icon={'kettlebell'} title={CIRCUITS} onClick={props.circuits}/>
        <MenuItem icon={'speedometer'} title={TIMED_EVENT} onClick={props.timedEvent}/> 
        <MenuItem icon={'clock'} title={TIME_CAP} onClick={props.timecap}/> 
        <MenuItem icon={'graph'} title={HISTORY} onClick={props.history}/>         
    </div>
);

Home.propTypes = {
    running: PropTypes.func.isRequired,
    boxing: PropTypes.func.isRequired,
    bodybuilding: PropTypes.func.isRequired,
    circuits: PropTypes.func.isRequired,
    timedEvent: PropTypes.func.isRequired,
    timecap: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = dispatch => ({
    running: () => dispatch(nav(RUNNING)),
    boxing: () => dispatch(nav(BOXING)),
    bodybuilding: () => dispatch(nav(BODYBUILDING)),
    circuits: () => dispatch(nav(CIRCUITS)),
    timedEvent: () => dispatch(nav(TIMED_EVENT)),
    timecap: () => dispatch(nav(TIME_CAP)),
    history: () => dispatch(nav(HISTORY))
});

export default connect(mapStateToProps, mapPropsToDispatch)(Home);