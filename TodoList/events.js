/**
 * Created by nimit on 16/7/17.
 */
window.onload = function () {
  var mydiv = document.getElementById('myDiv');
  // mydiv.onclick = function () {
  //     console.log('on click');
  // };
  // mydiv.addEventListener('click',function(){
  //    console.log('event listner');
  // });
  //   mydiv.addEventListener('click',function(){
  //       console.log('event listner2');
  //   });
    var div1 = document.getElementById("one");
    var div2 = document.getElementById("two");
    var div3 = document.getElementById("three");

    div1.addEventListener('click', function(event){
        console.log("event 1");
        },true);
    div2.addEventListener('click', function(event){
        console.log("event 2");
    },true);
    div3.addEventListener('click', function(event){
        console.log(event);
    });
};