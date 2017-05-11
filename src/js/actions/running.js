import { SET_SPEED, SET_TIME, SET_DISTANCE } from './';


const MAX_SPEED = 25;

export const setTime = time => (dispatch, getState) => {
    // get the distance and set the speed and time
    const { distance, speedOptions } = getState().running; // metres

    const kilometers = distance / 1000;
    const seconds = time / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;

    const speed = Number((kilometers / hours).toFixed(2));

    // let closestDiff = 1000;
    // const speed = speedOptions.reduce((closestValue, speedOption) => {
    //     const diff = Math.abs(speedOption.value - preciseSpeed);
    //     if(diff < closestDiff){
    //         closestDiff = diff
    //         return speedOption.value;
    //     } else {
    //         return closestValue;
    //     }
    // }, speedOptions[0].value);

    dispatch(setSpeed(speed));
    //{ type: SET_SPEED, speed });
    //dispatch({ type: SET_TIME, time });    
    console.log(`${kilometers}km in ${seconds}s at ${speed}kph`);
};

export const setDistance = distance => (dispatch, getState) => {
     // set the distance,
     // then keep the speed the same
     // and set the time according to that!
     // you can only change the time
     // so i will persist speed
     //const { speed } =  getState().running;
     dispatch({ type: SET_DISTANCE, distance });

};

export const setSpeed = speed => (dispatch, getState) => {
    let { distance } =  getState().running;
    speed = Math.min(MAX_SPEED, speed);
    dispatch({ type: SET_SPEED, speed });

    const kilometers = distance / 1000;
    // const seconds = time / 1000;
    // const minutes = seconds / 60;
    // const hours = minutes / 60;

    const hours = kilometers / speed;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    const ms = seconds * 1000;

    //console.log(`${seconds} seconds`);
    dispatch({ type: SET_TIME, time: ms });
};

const SPEED_INCREMENT = 0.5;
export const moreSpeed = () => (dispatch, getState) => {
    const { speed } =  getState().running;
    dispatch(setSpeed(speed + SPEED_INCREMENT ));
};

export const lessSpeed = () => (dispatch, getState) => {
    const { speed } =  getState().running;
    dispatch(setSpeed(speed - SPEED_INCREMENT ));
};
