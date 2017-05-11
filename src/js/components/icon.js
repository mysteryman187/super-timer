import React from 'react';
import '../../less/icons.less';

const Icon = props => (
    <div className={`icon ${props.icon}`} onClick={props.onClick}>
    </div>
);

export default Icon;