import React, { PropTypes } from 'react';
import Icon from './icon';

const MenuItem = props => (
    <div className={'menu-item'} onClick={props.onClick}>
        <Icon icon={props.icon}/>
        <div>{props.title}</div>
    </div>
);

MenuItem.displayName = 'MenuItem';

MenuItem.propTpes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MenuItem;