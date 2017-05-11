import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import '../../less/speedometer.less';

const fmt = number => (`0${number}`).substr(-4, 4);
//const fmt2 = number => Math.round();

const lineWidth = 35;

class Speedo extends Component {

    componentDidUpdate() {
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        var radius = 105;

        var startAngle = Math.PI;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;

        // context.lineCap = "round";

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = lineWidth;

        // line color
        context.strokeStyle = '#ececec';
        context.stroke();

        let start = Math.PI * 1.05;
        var startAngle = Math.PI;
        var counterClockwise = false;
        let end = Math.PI * 1.95;
        var str = start;
        str += (this.props.speed / this.props.maxSpeed) * (end - startAngle);
        str = Math.min(Math.PI * 2, str);

        context.beginPath();
        context.arc(x, y, radius, startAngle, str, counterClockwise);
        context.strokeStyle = '#df5759';
        context.stroke();

        let n = 0;

        const interval = ((end - start) / 8);
        const speedInterval = this.props.maxSpeed / 8;
        let currentSpeed = 0;
        for (let ang = start; ang <= end + interval; ang += interval) {
            context.rotate(0);
            const rad = radius - 30;
            var mx = x + rad * Math.cos(ang);
            var my = y + rad * Math.sin(ang);

            let size = 2;
            if (n++ % 2 === 0) {
                size = 3;
            }
            context.beginPath();
            context.arc(mx, my, size, 0, 2 * Math.PI, false);
            context.fillStyle = '#ececec';
            context.fill();
            if (size === 3) {
                context.save();
                const trad = rad - 17;
                var tx = x + trad * Math.cos(ang);
                var ty = y + trad * Math.sin(ang);
                context.translate(tx, ty);
                context.rotate(ang + (Math.PI / 2));
                context.font = '12px rubik';
                context.fillStyle = '#254657';
                context.fillText(Math.round(currentSpeed), -6, 0);
                context.restore();
            }
            currentSpeed += speedInterval;
        }



        //var img = document.getElementById("needle");
        //context.translate(tx, ty);
        //context.drawImage(img, 10, 10); //, 150,180);

        context.lineWidth = 2;
        context.strokeStyle = '#254657';
        context.beginPath();
        context.moveTo(x, y);
        var nx = x + (radius - 51) * Math.cos(str);
        var ny = y + (radius - 51) * Math.sin(str);
        context.lineTo(nx, ny);
        context.stroke();


        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, false);
        context.fillStyle = '#294c50';
        context.fill();

    }



    render() {
        return (
            <div className={'speedo'}>
                <canvas ref="myCanvas" className={'speedo-canvas'} />
            </div>
        );
    }
}

Speedo.propTypes = {
    maxSpeed: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
};

export default Speedo;