import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BodyBuilding = () => (
    <div>{'BodyBuilding...'}</div>
);

BodyBuilding.displayName = 'BodyBuilding';

BodyBuilding.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(BodyBuilding);