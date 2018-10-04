var canvas = document.getElementById("mainCanvas"),

    ctx = canvas.getContext("2d");

var bodies = simulations[1];

setInterval(loop, 1000/100);


function loop() {
    update();
    render();
}




function update() {
    //calls method to calculate and apply forces due to gravity
    applyForceFromGravity(bodies);

    //cycles through each body and applys acceleration and velocity
    for(var i = 0; i < bodies.length; i++) {
        applyAcceleration(bodies[i]);
        applyVelocity(bodies[i]);
    }
    
}




function render() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "rgb(50,50,50)";
    ctx.rect(0,0,window.innerWidth,window.innerHeight);
    ctx.fill();
    for(var i = 0; i < bodies.length; i++) {

        ctx.beginPath();
            ctx.arc(bodies[i].x, bodies[i].y, bodies[i].m * 2, Math.PI * 2, false);
            ctx.fillStyle = bodies[i].color;
            ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
            ctx.font = "12px Arial";
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillText(i, bodies[i].x - 2.5, bodies[i].y + 2.5);
        ctx.closePath();
    }
}
