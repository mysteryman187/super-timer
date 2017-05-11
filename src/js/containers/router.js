import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { setConfig } from '../actions/nav';

class Router extends Component {
    componentDidMount(){
        const config = this.props.children.map(childRoute => ({
            icon: childRoute.props.icon,
            route: childRoute.props.route 
        })).reduce((acc, obj) => {
            acc[obj.route] = obj;
            return acc;
        }, {});
        this.props.setConfig(config);
    }
    render(){
        const { children, route , transition } = this.props;
        const childToRender = children.find(childRoute => childRoute.props.route === route);
        return (
            <ReactCSSTransitionGroup
               component={'div'}
               className={'animation-container'}
               transitionName={transition}
               transitionEnterTimeout={500}
               transitionLeaveTimeout={500}
            >
               <div key={childToRender.props.route} className={'animation-element'}>
                    {childToRender}
               </div>
            </ReactCSSTransitionGroup>
        );
    }
}

Router.propTypes = {
    transition: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    setConfig: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    route: state.nav.route,
    transition: state.nav.transition
});

const mapPropsToDispatch = dispatch => ({
    setConfig: config => dispatch(setConfig(config))
});

export default connect(mapStateToProps, mapPropsToDispatch)(Router);