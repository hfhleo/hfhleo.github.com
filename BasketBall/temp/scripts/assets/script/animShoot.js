"use strict";
cc._RFpush(module, '68810UWGidHuIB8gk8ZX/Rd', 'animShoot');
// script\animShoot.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},
    init: function init(ballComp, time_i) {
        this.ballComp = ballComp;
        this.time_i = time_i;
    },
    animShoot: function animShoot() {
        this.ballComp.doShoot(this.time_i);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();