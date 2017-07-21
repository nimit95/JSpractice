var cart;
var products = [];


$(function () {
    cart = $('#cart');
    //console.log(products);
    refreshProd();
});

function retrieveProducts() {
    let str = localStorage.getItem('products');
    if (str)
        products = JSON.parse(str);
}

function addRow(index, productDetail) {
    let tableRow = $(`<tr data-id="${productDetail.id}">`);
    tableRow.append($(`<td>${+(index) + 1}</td>`));
    tableRow.append($(`<td>${productDetail.name}</td>`));
    tableRow.append($(`<td>${productDetail.price}</td>`));
    // tableRow.append((`<td>`)).append((`<button type="button" class="btn btn-secondary btn-sm">-`))
    //   .append( (`<button type="button" class="btn btn-secondary btn-sm">+`));
    let decBtn = $(`<button type="button" class="btn btn-secondary btn-sm">`).text('-').click(decQty);

    let incBtn = $(`<button type="button" class="btn btn-secondary btn-sm">`).text('+').click(incQty);
    tableRow.append($(`<td>`).append(decBtn).append(`<span> ${productDetail.qty} </span>`).append(incBtn));

    tableRow.append(`<td>${productDetail.price * productDetail.qty}</td>`);
    return tableRow;
}

function incQty(ev) {

    let obj = findProduct($(ev.target).parent().parent().attr('data-id'));

    obj.qty++;
    saveProducts();
    refreshProd();
}

function decQty(ev) {
    let obj = findProduct($(ev.target).parent().parent().attr('data-id'));

    obj.qty--;
    if(+obj.qty<=0){

        products.splice(products.indexOf(obj),1);
    }
    saveProducts();
    refreshProd();
}

function findProduct(id) {

    var result = $.grep(products, function (e) {
        return e.id == id;
    }); 

    return result[0];
}

function addProducts(products) {
    cart.empty();
    var total = 0;
    for (var i in products) {
        total += products[+i].price * products[+i].qty;
        cart.append(addRow(i, products[i]));
    }
    cart.append(addTotalRow(total));
}
function addTotalRow(total) {
    let tableRow = $(`<tr>`);
    tableRow.append($('<td colspan="4">Total</td>'));
    tableRow.append(`<td>${total}</td>`);
    return tableRow;
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function refreshProd() {
    retrieveProducts();
    addProducts(products);
}