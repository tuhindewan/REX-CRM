import React, { useState, useRef, useEffect } from "react";

const PieChart = () => {
	
    useEffect(() => {

		var canvas = document.getElementById("canvas");
		var pieChartTooltip = document.getElementById("pie-chart-tooltip");
		var ctx = canvas.getContext("2d");
		var cw = canvas.width;
		var ch = canvas.height;
		ctx.lineWidth = 0;
		ctx.font = '20px verdana';

		var PI2 = Math.PI * 2;
		var myColor = ["#573BFF", "#02C4FB", "#EC5956"];
		var myData = [60, 20, 30];
		var sliceLabel = ["Subscribed", "Pending", "Unsubscribed"];
		var cx = 105;
		var cy = 105;
		var radius = 100;
		var mouse = {x :0,y:0,oldx : 0,oldy:0};

		//ctx.globalAlpha = 0.50;
		pieChart(myData, myColor, sliceLabel);
		ctx.globalAlpha = 1.00;
		

		function pieChart(data, colors, label) {
			// calc data total
			var total = 0;
			for (var i = 0; i < data.length; i++) {
				total += data[i];
			}
			// calc sweep angles for each piece of pie
			var sweeps = []
			for (var i = 0; i < data.length; i++) {
				sweeps.push(data[i] / total * PI2);
				data[i] = {
					value : data[i],
					angle : data[i] / total * PI2,
					// text : label[i]+ ' ' +((data[i] / total) * 100).toFixed(0) + "%",
					text : label[i]+ ' ' + data[i],
				}
			}
			console.log(data);
			// draw outer pie
			var accumAngle = 0;
			for (var i = 0; i < sweeps.length; i++) {
				drawWedge(radius, accumAngle, accumAngle + sweeps[i], colors[i], data[i].value);
				accumAngle += sweeps[i];
			}

		}

		function drawWedge(radius, startAngle, endAngle, fill, label) {
			// draw the wedge
			ctx.beginPath();
			ctx.moveTo(cx, cy);
			ctx.arc(cx, cy, radius, startAngle, endAngle, false);
			ctx.closePath();
			ctx.fillStyle = fill;
			ctx.strokeStyle = 'transparent';
			ctx.fill();
			ctx.stroke();
		}

		canvas.addEventListener("mousemove",function(event){
			mouse.x = event.clientX; 
			mouse.y = event.clientY;
		})
		
		function update(){
			// only on change in mouse position
			if(mouse.x !== mouse.oldx || mouse.y !== mouse.oldy){
				var x = mouse.oldx = mouse.x;
				var y = mouse.oldy = mouse.y;
				x -= cx; // vector from pie center
				y -= cy;
				var newText = "My pie chart. Mouse over slices for more info.";
				var dist = Math.sqrt(x * x + y * y); // get distance from center

				console.log('x axis '+ x);
				console.log('y axis '+ y);
				
				if(dist > radius){
					// console.log('dist '+ dist);
					// console.log('radius '+ radius);
					var ang = Math.atan2(y,x); // get angle note y is first
					ang += Math.PI * 2; // rotate 360 as atan2 starts at -Pi
					ang %= Math.PI * 2; // normalize to range 0 to 2Pi
					var i = 0;
					var tAng = 0

					while(i < (myData.length - 1)){
						//console.log('ang '+ ang);
						//console.log('tAan '+ tAng + myData[i].angle);

						if(ang < tAng + myData[i].angle){
							break;
						}

						tAng +=  myData[i].angle;
						i += 1;

						//console.log('tAngdvfdvfde '+ tAng);
						//console.log('iiii '+ i);
					}
					newText = myData[i].text;

					console.log('new-test: '+newText);
				}
				//canvas.title = newText;
				canvas.setAttribute('chart-data', newText);
			}

			requestAnimationFrame(update);
		}
		update();


	});

    return (
        <div className="pie-chart">
			<span id="pie-chart-tooltip"></span>
            <canvas id="canvas" width={210} height={210} ></canvas>
        </div>
    );
};

export default PieChart;
