
var products  = [];
var prices = [100,200,300,400,500,600,700];
var prodname = [];

function fillName() {
    for(var i=0;i<6;i++) {

        prodname.push("Product " + i);

    }
}
function addProduct(id,name,price,qty){
    this.id= id;
    this.name = name;
    this.price = price;
    this.qty = qty;
}
function retrieveProducts() {
    let str = localStorage.getItem('products');
    if(str)
        products = JSON.parse(str);
}
$(function(){
    fillName();
    retrieveProducts();
    console.log(name[1]);
    $('#1').click(addToCart);
    $('#2').click(addToCart);
    $('#3').click(addToCart);
    $('#4').click(addToCart);
    $('#5').click(addToCart);
    $('#6').click(addToCart);

});

function addToCart(ev){
    console.log(ev.target.id);
    var id = +(ev.target.id);
    increaseQty(id);
    saveProducts();
}
function increaseQty(id){
    var result = $.grep(products, function(e){ return e.id === id; });
    if(result.length===0) {
        products.push(new addProduct(id,prodname[id],prices[id],1));
    }
    else{
        result[0].qty++;
    }
}
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}