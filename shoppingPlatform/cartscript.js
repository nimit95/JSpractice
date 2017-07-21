
var cart;
var products = [];



$(function () {
    cart = $('#cart');
    //console.log(products);
    retrieveProducts();
    addProducts(products);

});

function retrieveProducts() {
    let str = localStorage.getItem('products');
    if(str)
        products = JSON.parse(str);
}
function addRow(index, productDetail) {
    let tableRow = $('<tr>');
    tableRow.append(`<td>${+(index)+1}</td>`);
    tableRow.append(`<td>${productDetail.name}</td>`);
    tableRow.append(`<td>${productDetail.price}</td>`);
    tableRow.append(`<td>`)<button type="button" class="btn btn-secondary btn-sm">-</button>  ${productDetail.qty}  <button type="button" class="btn btn-secondary btn-sm">+</button>`);
    tableRow.append(`<td>${productDetail.price*productDetail.qty}</td>`);
    return tableRow;
}
function addProducts(products){
    for(var i in products){
        cart.append(addRow(i,products[i]));
    }
}
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}