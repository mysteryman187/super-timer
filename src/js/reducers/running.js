import { SET_TIME, SET_SPEED, SET_DISTANCE } from '../actions';
import moment from 'moment';

const speedOptions = [];
const minSpeed = 9;
const maxSpeed = 24;
const speedOptionIncrement = 0.2;

for(let i = minSpeed; i <= maxSpeed; i+=speedOptionIncrement){
    speedOptions.push({label: `${i.toFixed(2)} kph`, value: Number(i.toFixed(2)) });
}

const timeOptions = [];
const ONE_MINUTE = 1000 * 60
const ONE_HOUR = ONE_MINUTE * 60

const minTime = ONE_MINUTE;
const maxTime = ONE_HOUR;
const timeOptionIncrement = 1000;

for(let i = minTime; i <= maxTime; i+=timeOptionIncrement){
    timeOptions.push({label: moment(i).format('HH:mm:ss'), value: i });
}


const DEFAULT_STATE = {
   speed: 10,       // kph    // todo - persist this and load from localstorage
   distance: 1000,  // meters
   time: 36000,     // ms
   speedOptions,
   distanceOptions: [
       { label: '400m' , value: 400 },
       { label: '800m' , value: 800 },
       { label: '1K' , value: 1000 },
       { label: '1 Mile' , value: 1609 },
       { label: '2K' , value: 2000 },
       { label: '1.5 Miles' , value: 2412 },
       { label: '3K' , value: 3000 },
       { label: '4K' , value: 4000 },
       { label: '5K' , value: 5000 },
       { label: '6K' , value: 6000 },
       { label: '7K' , value: 7000 },
       { label: '8K' , value: 8000 },
       { label: '9K' , value: 9000 },
       { label: '10K' , value: 10000 }
   ],
   timeOptions,
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_TIME:
            return { ...state, time: action.time };
        case SET_SPEED:
            return { ...state, speed: action.speed } ;
        case SET_DISTANCE:
            return { ...state, distance: action.distance } ;
        default:
            return state;
    }
}