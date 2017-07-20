

var obj = Object.create(Object.prototype, {
    key : {
        writable:true,
        configurable:true,
        value:"some value"
    },
    anotherKey : {
        configurable:true,
        get:function () {
            return "kya hai yeh?" + this.key;
        },
        set:function (val) {
            this.key = val;
        }
    }
});

var o = {a:2,f:4};
Object.defineProperty(o, 'z', {         // to make property with specific details by default
    writable: false,
    configurable: true,
    enumerable: false, // can be shown in for in or not
    value: "You can't change this"
})