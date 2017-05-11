import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const History = () => (
    <div>{'History...'}</div>
);

History.displayName = 'History';

History.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(History);