import React, { PropTypes } from 'react';

const Route = props => props.children;

Route.displayName = 'Route';

Route.propTypes = {
    route: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    icon: PropTypes.string
};

export default Route;