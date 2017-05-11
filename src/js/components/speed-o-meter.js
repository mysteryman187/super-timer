import React, { PropTypes } from 'react';
import '../../less/speedometer.less';

const fmt = number => (`0${number}`).substr(-4, 4);

const Speedo = props => {
    const { speed, maxSpeed } = props;
    const displaySpeed = speed === Infinity ? (0).toFixed(1) : Math.min(speed, maxSpeed).toFixed(1);
    const angle = speed === Infinity ? 0 : Math.min(103, (speed / maxSpeed) * 103);
    return (
        <div className={'speed-o-meter-container'}>            
            <div className={'outer-circle'}>
                <div className={'inner-circle'}>
                    <div className={'speed-dial'}>
                        <div className={'speed-text'}>{`${fmt(displaySpeed)}`}</div>
                        <div className={'unit-text'}>{'Km/h'}</div>
                    </div>
                </div>
                <div className={'needle-container'}>
                        <div className={'needle-inner'} style={{transform: `rotate(${angle}deg)` }}>
                            <div className={'needle'}>
                                <div className={'needle-inner-inner'}/>
                            </div>
                        </div>
                </div>   
            </div>
                    
        </div>
    );
}

Speedo.propTypes = {
    maxSpeed: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
};

export default Speedo;