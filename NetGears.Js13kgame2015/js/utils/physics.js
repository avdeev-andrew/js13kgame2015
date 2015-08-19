﻿
//d - document
function Physics(d) {
    //private variable
    var _this = this;

    //game world gravity
    this.gravity = new Vec2(0, 9.8);

    //TODO - separate gravity with friction
    //v - velocity of object, m - mass of object
    this.gravityPositionImpact = function (dt, m, velocity) {
        var g = _this.gravity;
        var v = velocity;

        return new Vec2(((g.x * dt * dt) / (2 * m)) + v.x * dt, ((g.y * dt * dt) / (2 * m)) + v.y * dt);
    }
    this.gravityVelocityImpact = function (dt, m) {
        var g = _this.gravity;

        return new Vec2(g.x * dt / m, g.y * dt / m);
    }

    this.collisionCircleCircle = function () {

    }
    this.collisionRectangleCircle = function () {

    }
    this.collisionRectangleRectangle = function () {

    }

    //event handlers
    //e - event
    this.gravityReverse = function (e) {
        _this.gravity.scale(-1);
    }

    //listeners initialization
    d.addEventListener('gravityReverse', _this.gravityReverse);
}