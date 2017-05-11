import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Circuits = () => (
    <div>{'Circuits...'}</div>
);

Circuits.displayName = 'Circuits';

Circuits.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(Circuits);