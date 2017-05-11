import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Boxing = () => (
    <div>{'Boxing...'}</div>
);

Boxing.displayName = 'Boxing';

Boxing.propTypes = {
    
};

const mapStateToProps = state => ({

});

const mapPropsToDispatch = () => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(Boxing);