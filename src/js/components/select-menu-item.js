import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './menu-item';

class SelectMenuItem extends Component {
    focusSelect(){
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        this.select.dispatchEvent(e);
    }
    render(){
        const { icon, title } = this.props;
        return (
            <div>
                <MenuItem icon={icon} title={title} onClick={() => this.focusSelect()}/>
                <select className={'hidden-select'} ref={select => this.select = select}>
                     <option value={'1'}>{'hello'}</option>
                      <option value={'2'}>{'hello 2'}</option>
                       <option value={'3'}>{'hello 3'}</option>
                 </select>
            </div>
        );
    }
}

SelectMenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    model: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ]).isRequired,
    })).isRequired
};

export default SelectMenuItem;