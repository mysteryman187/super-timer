import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Icon from '../components/icon';
import { nav, navBack } from '../actions/nav';
import '../../less/header.less';

const Header = props => (
   <div className={'header'}>
        { props.hasBack ? <Icon icon={'back'} onClick={props.back}/> : props.icon ? <Icon icon={props.icon}/> : <div className={'icon-placeholder'}/> }
        <div>{props.title}</div>
        { (props.icon && props.hasBack) ? <Icon icon={props.icon}/> : <div className={'icon-placeholder'}/> }
   </div>
);

Header.displayName = 'Header';

Header.propTypes = {
    hasBack: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

const mapStateToProps = state => ({
    title: state.nav.title,
    icon: state.nav.icon,
    hasBack: state.nav.breadcrumbs.length > 1  
});

const mapPropsToDispatch = dispatch => ({
    back: () => dispatch(navBack())
});

export default connect(mapStateToProps, mapPropsToDispatch)(Header);