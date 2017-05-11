import { NAV, NAV_BACK, SET_TITLE, SET_ICON, SET_CONFIG } from '../actions';
import {
    HOME
} from '../constants';

const DEFAULT_STATE = {
    route: HOME,
    breadcrumbs: [
        {
            icon: 'home',
            title: HOME,
            route: HOME        
        }
    ],
    transition: 'forward',
    icon: 'home',
    title: HOME, 
    config: null
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                config: action.config
            };
        case NAV:
            return {
                ...state,
                transition: 'forward',
                breadcrumbs: [
                    ...state.breadcrumbs, 
                    { 
                        icon: action.icon,
                        title: action.title,
                        route: action.route
                    }
                ],
                route: action.route,
                title: action.title,
                icon: action.icon
             };
        case NAV_BACK:
            return {
                ...state,
                transition: 'back',
                breadcrumbs: state.breadcrumbs.slice(0, state.breadcrumbs.length - 1),
                route: state.breadcrumbs[state.breadcrumbs.length - 2].route,
                title: state.breadcrumbs[state.breadcrumbs.length - 2].title,
                icon: state.breadcrumbs[state.breadcrumbs.length - 2].icon
            };
        default:
            return state;
    }
}