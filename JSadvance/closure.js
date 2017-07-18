/**
 * Created by nimit on 18/7/17.
 */
function genCounter(initVal, deltaVal) {


    return {
        getVal() {
            return initVal;
        },
        incrVal () {
            initVal += deltaVal;
        },
        decrVal () {
            initVal -= deltaVal;
        }
    }
}

var counter = genCounter(10,3);

counter.getVal();
counter.incrVal();
counter.incrVal();
counter.getVal();
counter.decrVal();
counter.getVal();