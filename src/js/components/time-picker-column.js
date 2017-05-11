import React, { PropTypes, Component } from 'react';
import '../../less/time-picker.less';
import _ from 'lodash';
import $ from 'jquery';

const fmt = number => (`00${number}`).substr(-2, 2);

const TILE_HEIGHT = 70;

 function closest (scrollTop) {
     //debugger;
     let f = Math.floor(scrollTop / TILE_HEIGHT) * TILE_HEIGHT;
     let c = Math.ceil(scrollTop / TILE_HEIGHT) * TILE_HEIGHT;

    const dif1 = Math.abs(scrollTop - f);
    const dif2 = Math.abs(scrollTop - c);
    return Math.min(dif1, dif2) === dif1 ? f : c;
 }

class TimePickerColumn extends Component {
    constructor(props) {
        super(props);
        const options = [];

        for (let x = 0; x < 3; x++) {
            for (let i = props.min; i <= props.max; i++) {
                options.push(i);
            }
        }
        this.itemCount = options.length / 3;
        this.state = {
            options
        };
        this.onScrollFinish =  _.debounce(() => {
            this._onScrollFinish();
        }, 200);
        this.inUse = false;
        this.callback = _.debounce(this.callback, 200, { maxWait: 200 });
    }

    _onScrollFinish() {
        if (this.touching) {
            return;
        }
        const centre = 70; 
        this.settingScroll = true;
        const scrollTop = closest(this.picker.scrollTop + 35) - 35;
        const valueSelected = (closest(this.picker.scrollTop + 35) / TILE_HEIGHT) % this.itemCount;
        $(this.picker).animate({ scrollTop }, 200, 'linear', () => {
                setTimeout(() => {
                    this.adjustOptions();
                    this.settingScroll = false;
                    this.props.onChange(valueSelected);
                    this.inUse = false;
                }, 200);                
        });
    }

    componentDidMount() {
        this.selectValue(this.props.value);
    }

    componentDidUpdate(){
        if(!this.inUse){
            this.settingScroll = true;
           // console.log('did update', this.props.value);  
            this.selectValue(this.props.value);
            setTimeout(() => this.settingScroll = false, 10);
        }
    }

    onTouchStart() {
        this.touching = true;
        this.inUse = true;
    }

    onTouchEnd() {
        this.touching = false;
        this.onScrollFinish();
    }

    selectValue(value) {
        this.picker.scrollTop = (TILE_HEIGHT * this.itemCount) + (value * TILE_HEIGHT) - 35;
        this.adjustOptions();
    }

    callback(val){
         this.props.onChange(val);
    }

    onScroll() {
        this.inUse = true;
        if(!this.settingScroll){
            this.onScrollFinish();
            const valueSelected = (closest(this.picker.scrollTop + 35) / TILE_HEIGHT) % this.itemCount;
            this.callback(valueSelected);
        }
    }

    adjustOptions(){
        const { scrollTop } = this.picker;
        if (scrollTop > ((TILE_HEIGHT * this.itemCount) * 2 ) + 0) {    // at which point you will see 0 1 2 of the last one
            this.picker.scrollTop = this.picker.scrollTop - (TILE_HEIGHT * this.itemCount);
        }
        if (scrollTop < (TILE_HEIGHT * this.itemCount) - 35) {               // at which point the bottom of 59 is just becoming visible
            this.picker.scrollTop = this.picker.scrollTop + (TILE_HEIGHT * this.itemCount);
        }
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'picker'}
                    ref={picker => this.picker = picker}
                    onScroll={() => this.onScroll()}
                    onTouchStart={() => this.onTouchStart()}
                    onTouchEnd={() => this.onTouchEnd()}
                    >
                    {this.state.options.map((option, idx) => <div className='tile' key={idx}>{fmt(option)}</div>)}
                </div>
            </div>
        );
    }
}

TimePickerColumn.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default TimePickerColumn;