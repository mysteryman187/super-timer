import React from 'react';
import MenuItem from './menu-item';
import '../../less/menu.less';

const Menu = props => (
    <div className={'menu'}>
        {props.options.map((item, index) => <MenuItem key={index} icon={props.icon} title={item.label} onClick={() => props.onSelect(item)}/>)}
    </div>
);

export default Menu;