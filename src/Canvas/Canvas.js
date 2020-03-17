import React from 'react';
import BubbleSort from '../Sorting/BubbleSort'; //引入js文件

import styles from '../CSS/Button.module.css';

// function outlinedRect(props) {
//     const { ctx, x, y, width, height } = props;
//     ctx.rect(x, y, width, height);
//     ctx.stroke();
// }



// function filledCircle(props) {
//     const { ctx, x, y, radius, color } = props;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
// }

function filledRect(props) {
    const { ctx, x, y, width, height, color } = props;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawBars() {
    drawBackground();
    const ctx = document.getElementById("canvas").getContext('2d');
    barNums = array.length;
    // 归一化？
    let maxInArray = Number.MIN_VALUE;
    array.forEach(element => {
        maxInArray = Math.max(element, maxInArray);
    });

    for (let i = 0; i < barNums; i++) {
        filledRect({ ctx: ctx, x: (100 + i * barWidth * 2), y: 500, width: barWidth, height: - array[i] * (400 / maxInArray), color: "#2B5F75" });
    }
}

function drawBubbleBars(currentLeft) {
    drawBackground();
    const ctx = document.getElementById("canvas").getContext('2d');
    barNums = array.length;
    // 归一化？
    let maxInArray = Number.MIN_VALUE;
    array.forEach(element => {
        maxInArray = Math.max(element, maxInArray);
    });

    for (let i = 0; i < barNums; i++) {
        if (i === currentLeft) {
            filledRect({ ctx: ctx, x: (100 + i * barWidth * 2), y: 500, width: barWidth, height: - array[i] * (400 / maxInArray), color: "#FBE251" });
        }
        else {
            filledRect({ ctx: ctx, x: (100 + i * barWidth * 2), y: 500, width: barWidth, height: - array[i] * (400 / maxInArray), color: "#2B5F75" });
        }
    }
}

function drawBackground() {
    const ctx = document.getElementById("canvas").getContext('2d');
    ctx.clearRect(0, 0, 800, 600);

    filledRect({ ctx: ctx, x: 0, y: 0, width: width, height: height, color: "#DDDDDD" });
}

function nextStep() {
    let result = bubbleSort.next();
    array = result[0];
    let currentLeft = result[1];
    drawBubbleBars(currentLeft);
    // alert(person1.name.first + ' has left the building. Bye for now!');
    // console.log('next');
    
}

let width = 800;
let height = 600;
let prevX = 0;
let prevY = 0;
var canvasElementOffsetLeft;
var canvasElementOffsetTop;

var array = [10, 15, 9, 38, 9, 16, 4, 8, 7, 23, 6, 8, 37, 16, 12, 13, 8, 27, 49, 48, 13, 42, 17];

var bubbleSort = new BubbleSort(array);
// var quickSort= new QuickSort(array);

let barNums;
let barWidth = (width - 200) / (2 * array.length - 1);

var intervalId, timeoutId;

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // let isMouseDown = false;
        
    }

    componentDidMount() {
        this.updateCanvas();

        var canvasElement = document.getElementById("canvas");
        canvasElementOffsetLeft = canvasElement.offsetLeft;
        canvasElementOffsetTop = canvasElement.offsetTop;

        drawBubbleBars(0);
        
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // ctx.translate(width / 2, height / 2);
        ctx.clearRect(0, 0, 800, 600);

        filledRect({ ctx: ctx, x: 0, y: 0, width: width, height: height, color: "#DDDDDD" });
    }

    drawBackground() {
        const ctx = this.refs.canvas.getContext('2d');
        // ctx.translate(width / 2, height / 2);
        ctx.clearRect(0, 0, 800, 600);

        filledRect({ ctx: ctx, x: 0, y: 0, width: width, height: height, color: "#DDDDDD" });
    }

    // drawCoordinateLine() {
    //     const ctx = this.refs.canvas.getContext('2d');
    //     ctx.strokeStyle = "#FFFFFB";

    //     for (let i = 0; i < 3; i++) {
    //         const coorLength = height / 20;
    //         for (let t = 0; t < 20; t += 2) {
    //             ctx.moveTo(0, height - coorLength * (t + 11.5));
    //             ctx.lineTo(0, height - coorLength * (t + 10.5));
    //         }

    //         ctx.stroke();
    //         ctx.rotate(Math.PI * 2 / symmetry);
    //     }
    // }

    // handleMouseDown = (event) => {
    //     console.log('mouse down');

    //     this.isMouseDown = true;

    //     // if window is resized
    //     var canvasElement = document.getElementById("canvas");
    //     canvasElementOffsetLeft = canvasElement.offsetLeft;
    //     canvasElementOffsetTop = canvasElement.offsetTop;

    //     prevX = event.pageX - canvasElementOffsetLeft - width / 2;
    //     prevY = event.pageY - canvasElementOffsetTop - height / 2;
    // }

    // handleMouseUp = (event) => {
    //     console.log('mouse up');

    //     this.isMouseDown = false;
    // }

    // handleMouseMove = (event) => {
    //     // var x = event.clientX - width / 2;
    //     // var y = event.clientY - height / 2;

    //     var x = event.pageX - canvasElementOffsetLeft - width / 2;
    //     var y = event.pageY - canvasElementOffsetTop - height / 2;



    //     if (x > width / 2 - 10 || x < - width / 2 + 10 || y > height / 2 - 10 || y < - height / 2 + 10) {
    //         this.isMouseDown = false;
    //     }

    //     const ctx = this.refs.canvas.getContext('2d');
    //     if (this.isMouseDown) {

    //         for (let i = 0; i < 6; i++) {

    //             ctx.beginPath();
    //             ctx.moveTo(prevX, prevY);
    //             ctx.lineTo(x, y);
    //             ctx.stroke();
    //             ctx.closePath();
    //             ctx.scale(-1, 1);
    //             ctx.beginPath();
    //             ctx.moveTo(prevX, prevY);
    //             ctx.lineTo(x, y);
    //             ctx.stroke();
    //             ctx.closePath();
    //             ctx.scale(-1, 1);

    //             ctx.rotate(angle * Math.PI / 180);
    //         }

    //         prevX = x;
    //         prevY = y;
    //     }
    // }

    // drawBars() {
    //     // this.updateCanvas();
    //     const ctx = this.refs.canvas.getContext('2d');
    //     //ctx.strokeStyle = "#333333";

    //     for (let i = 0; i < barNums; i++) {
    //         filledRect({ ctx: ctx, x: (100 + i * barWidth * 2), y: 400, width: barWidth, height: - Math.random()*300 , color: "#2B5F75" });
    //     }
    // }

    clearCanvas() {
        const ctx = document.getElementById("canvas").getContext('2d');
        // Store the current transformation matrix
        ctx.save();

        // Use the identity matrix while clearing the canvas
        // ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, width, height);

        // Restore the transform
        // ctx.restore();
        drawBars();

        // filledCircle({ ctx: ctx, x: 0, y: 0, radius: 400, color: "#2B5F75" });


        // ctx.strokeStyle = "#FFFFFB";

        // for (let i = 0; i < 3; i++) {
        //     const coorLength = height / 20;
        //     for (let t = 0; t < 20; t += 2) {
        //         ctx.moveTo(0, height - coorLength * (t + 11.5));
        //         ctx.lineTo(0, height - coorLength * (t + 10.5));
        //     }

        //     ctx.stroke();
        //     ctx.rotate(Math.PI * 2 / symmetry);
        // }

    }

    startSorting() {
        setInterval(nextStep, 50);
    }

    render() {
        const clearButtonStyle = {
            // border: 0,
            // borderRadius: '5px',
            // backgroundColor: '#FFFFFF',
            width: '270px',
            height: '60px',
            fontSize: '20px'
        };

        return (
            <React.Fragment>
                <canvas id='canvas' ref="canvas" width={width} height={height} />
                <button onClick={this.startSorting} class="btn btn--stripe" style={clearButtonStyle}>Start Sorting</button>
            </React.Fragment>
        );
    }
}

export default Canvas;