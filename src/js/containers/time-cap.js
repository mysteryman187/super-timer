import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TimeCap = () => (
    <div>{'TimeCap...'}</div>
);

TimeCap.displayName = 'TimeCap';

TimeCap.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(TimeCap);