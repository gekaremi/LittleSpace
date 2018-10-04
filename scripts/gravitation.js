function applyVelocity(body) {
    //changes each bodies x and y co-ordinates according to its velocity
    body.x += body.vx;
    body.y += body.vy;
}




function applyAcceleration(body) {
    //calculates acceleration based on netwons 2nd law F=ma
    body.ax = body.fx / body.m;
    body.ay = body.fy / body.m;

    //applies acceleration to a bodies velocity
    body.vx += body.ax;
    body.vy += body.ay;
}




function applyForceFromGravity(bodies) {
    //sets the force vectors of each body to 0 so that the previous cycle doesn't interfere
    for(var i = 0; i < bodies.length; i++) {
        bodies[i].fx = 0;
        bodies[i].fy = 0;
    }


    // itterates through every element in bodies array then finds applys the appropriate force vectors to each bodies
    var startIndex = 1;
    var gravitationalConstant = 100;
    var quadrant, thetaFromQuadLine, dX, dY, dMag, F, fX, fY;
    for(var i = 0; i < bodies.length; i++){
        for(var j = startIndex; j < bodies.length; j++) {
                //calculates the linear (vector) distance between two bodies by applying pythagoras to the difference 
                //in their x and y componants
                dX = bodies[j].x - bodies[i].x;
                dY = bodies[j].y - bodies[i].y;
                dMag = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
                



                //calculates force based on Sir Isaac Newtons law of universial gravitation (F=(G m_1 m_2)/|r|^3*r where r is vector)
                F = (gravitationalConstant * bodies[i].m * bodies[j].m) / Math.pow(dMag,3);
                //splits force vector into its componants (x and y) so that they can be applied to the bodies
                fX = dX*F;
                fY = dY*F;
                

				bodies[i].fx += -fX;
				bodies[i].fy += -fY;

				bodies[j].fx += -fX;
				bodies[j].fy += -fY;


        }
        startIndex++;
    }
}
