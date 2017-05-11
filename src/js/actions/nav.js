import { NAV, NAV_BACK, SET_CONFIG } from './';
export const nav = (route, title) => (dispatch, getState) => {
    const { nav } = getState();
    const config = nav.config[route];
    if (config) {
        dispatch({ 
            type: NAV,
            route,
            title: title || config.title || route,
            icon: config.icon
        });
    } else {
        throw new Error(`${route} is not a valid route`);
    }
};
export const navBack = route => dispatch => dispatch({ type: NAV_BACK });
export const setConfig = config => dispatch => dispatch({ type: SET_CONFIG, config });