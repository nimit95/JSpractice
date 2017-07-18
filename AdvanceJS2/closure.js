/**
 * Created by nimit on 18/7/17.
 */
function gencounter(initial, delta) {
    return {
        getValue(){
            console.log(initial);
        },
        incrValue() {
          initial+= delta;
        },
        decValue() {
            initial-=delta;
        }
    }
}
var counter = gencounter(10,3);
counter.getValue();
counter.incrValue();
counter.incrValue();
counter.incrValue();
counter.decValue();
counter.getValue();