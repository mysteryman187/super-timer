import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TimedEvent = () => (
    <div>{'TimedEvent...'}</div>
);

TimedEvent.displayName = 'TimedEvent';

TimedEvent.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(TimedEvent);