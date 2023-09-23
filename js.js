var icon = document.getElementById('icon')
var CartBox = document.getElementById('CartBox')
function inter(t) {
    t.stopPropagation()
    if (CartBox.getAttribute('cart') == 'none') {
        CartBox.style.display = 'flex'
        CartBox.setAttribute('cart', 'flex')
    } else {
        CartBox.style.display = 'none';
        CartBox.setAttribute('cart', 'none')
    }
}
icon.onclick = inter

function hied(t) {
    t.stopPropagation()
    CartBox.style.display = 'none';
    CartBox.setAttribute('cart', 'none')
}
document.onclick = hied
CartBox.onclick = (t) => {
    t.stopPropagation()
}


var buttonplus = document.getElementById('plus')
var Minus = document.getElementById('MinusWrapper')
var zero = document.getElementById('zero')


function Add() {

    var mynewnumber = Number(zero.innerText) + 1
    zero.innerText = mynewnumber
    console.log(mynewnumber)
}

buttonplus.onclick = Add



function Min() {

    var mynewnumberMIN = Number(zero.innerText) - 1
    zero.innerText = mynewnumberMIN
    console.log(mynewnumberMIN)
}

Minus.onclick = Min



var DeleteIcon = document.getElementById('DeleteIcon')
var ItemDetails = document.getElementById('ItemDetails')
function Delet() {
    document.getElementById('ItemDetails').remove()
}


DeleteIcon.onclick = Delet

var MenuIcon = document.getElementById('MenuIcon')
var SideBar = document.getElementById('SideBar')
function show() {
    // t.stopPopagation()
    document.getElementById('overlay').style.display = 'flex'
    SideBar.style.display = "flex"

}


MenuIcon.onclick = show

var CloseBtn = document.getElementById('CloseBtn')
function hide() {
    document.getElementById('overlay').style.display = 'none'
    document.getElementById('SideBar').style.display = 'none'
}
CloseBtn.onclick = hide


var two = document.getElementById('two')
function showtwo() {
    // var src =two.src
    // console.log(src);
    two.style.opacity = '0.4'
    document.getElementById('FirstThubmnils').style.opacity = 'unset'
    document.getElementById('MainProduct').src = './images/image-product-2.jpg'
}

two.onclick = showtwo



var Previous = document.getElementById('there')
function chagee() {

    there.style.opacity = '0.4'
    document.getElementById('two').style.opacity = 'unset'
    document.getElementById('MainProduct').src = './images/image-product-3.jpg'
}
Previous.onclick = chagee

var dot = document.getElementById('four')
function chag() {
    four.style.opacity = '0.4'
    document.getElementById('there').style.opacity = 'unset'
    document.getElementById('MainProduct').src = './images/image-product-4.jpg'
}
dot.onclick = chag



let inde=0

var newarray = [

    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",

];


document.getElementById('NextBTn').onclick = next

function next() {
    var newindex = inde + 1
    inde = newindex

    if (newindex < 4) {
        var newsrc = newarray[newindex]
        document.getElementById("MainProduct").src= newsrc
    } else {
        newindex = 0
        inde = 0
        var newsrc = newarray[newindex]
        document.getElementById("MainProduct").src= newsrc
    }

    
}