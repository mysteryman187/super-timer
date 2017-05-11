import React, { PropTypes, Component } from 'react';
import '../../less/time-picker.less';
import TimePickerColumn from './time-picker-column';
import moment from 'moment';
import _ from 'lodash';

class TimePicker extends Component {
    constructor(props) {
        super(props);
        const m = moment(props.value);
        this.state = {
            hours : m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds()
        };
        this.setIsUpdating = _.debounce(() => this.isUpdating = false, 100);
        this.setPerformingUpdate = _.debounce(() => this.performingUpdate = false, 100);   
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.value !== nextProps.value || 
        nextState.hours !== this.state.hours ||
        nextState.minutes !== this.state.minutes || 
        nextState.seconds !== this.state.seconds;
    }

    componentDidUpdate(){
        if(this.performingUpdate){
            return;
        }
        this.isUpdating = true;

        const m = moment(this.props.value);
        this.setState({
            hours : m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds()
        });
        this.setIsUpdating();
    }
    onChange(field, val) {
        if(this.isUpdating){
            return;
        }
        this.performingUpdate = true;

        console.log('====onChange')
        this.setState({
            [field]: val
        });
        const timeValue = moment(0)
            .add(this.state.hours, 'hour')
            .add(this.state.minutes, 'minute')
            .add(this.state.seconds, 'second')
            .valueOf();

       
        this.props.onChange(timeValue);
        this.setPerformingUpdate();
    }

    render() {
        return (
            <div className={'time-picker-container'}>
                <div className={'fade fade-top'}/>
                <div className={'time-picker'}>
                    <TimePickerColumn min={0} max={23} value={this.state.hours} onChange={val => this.onChange('hours', val)} />
                    <div className={'sep'}>{':'}</div>
                    <TimePickerColumn min={0} max={59} value={this.state.minutes} onChange={val => this.onChange('minutes', val)} />
                    <div className={'sep'}>{':'}</div>
                    <TimePickerColumn min={0} max={59} value={this.state.seconds} onChange={val => this.onChange('seconds', val)} />
                </div>
                <div className={'fade fade-bottom'}/>
            </div>
        );
    }
}


TimePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
};

export default TimePicker;