import {navbar} from './navbar.js'

import { women } from './clearence.js';

import { womensclothing } from './womenclothing.js';

import { mens } from './menclothing.js';

import { kids } from './kidsclothing.js';

import { bag } from './bag.js';

import { home } from './home.js';

import { beauty } from './beauty.js';

import { gifts } from './gifts.js'

document.getElementById('navbar').innerHTML = navbar();
document.getElementById("clearence").innerHTML = women();

document.getElementById("womensclothing").innerHTML = womensclothing();

document.getElementById("mensclothing").innerHTML = mens();

document.getElementById("kidclothing").innerHTML = kids();

document.getElementById("bags").innerHTML = bag()

document.getElementById('Homeapp').innerHTML = home();

document.getElementById('Beautyapp').innerHTML = beauty();

document.getElementById('giftsapp').innerHTML = gifts();

document.getElementById('clear').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('womens').addEventListener("click", function() {
	document.querySelector('.wbg-modal').style.display = "flex";
});

document.querySelector('.wclose').addEventListener("click", function() {
	document.querySelector('.wbg-modal').style.display = "none";
});
document.getElementById('mens').addEventListener("click", function() {
	document.querySelector('.mbg-modal').style.display = "flex";
});

document.querySelector('.mclose').addEventListener("click", function() {
	document.querySelector('.mbg-modal').style.display = "none";
});

document.getElementById('kid').addEventListener("click", function() {
	document.querySelector('.kbg-modal').style.display = "flex";
});

document.querySelector('.kclose').addEventListener("click", function() {
	document.querySelector('.kbg-modal').style.display = "none";
});

document.getElementById('bag').addEventListener("click", function() {
	document.querySelector('.abg-modal').style.display = "flex";
});

document.querySelector('.aclose').addEventListener("click", function() {
	document.querySelector('.abg-modal').style.display = "none";
});


document.getElementById('home').addEventListener("click", function() {
	document.querySelector('.hbg-modal').style.display = "flex";
});

document.querySelector('.hclose').addEventListener("click", function() {
	document.querySelector('.hbg-modal').style.display = "none";
});

document.getElementById('beauty').addEventListener("click", function() {
	document.querySelector('.bbg-modal').style.display = "flex";
});

document.querySelector('.bclose').addEventListener("click", function() {
	document.querySelector('.bbg-modal').style.display = "none";
});

document.getElementById('gifts').addEventListener("click", function() {
	document.querySelector('.gbg-modal').style.display = "flex";
});

document.querySelector('.gclose').addEventListener("click", function() {
	document.querySelector('.gbg-modal').style.display = "none";
});

document.getElementById('signin').addEventListener("mouseenter", function() {
	document.querySelector('.sign-modal').style.display = "flex";
});

document.querySelector('.signclose').addEventListener("mouseenter", function() {
	document.querySelector('.sign-modal').style.display = "none";
});

// document.getElementById('cart').addEventListener("click", function() {
// 	document.querySelector('.cart-modal').style.display = "flex";
// });

// document.querySelector('.cartclose').addEventListener("click", function() {
// 	document.querySelector('.cart-modal').style.display = "none";
// });

document.querySelector("#menscloths").addEventListener("click",show) ;
document.querySelector("#menscloths1").addEventListener('click',show) ;
document.querySelector("#menscloths2").addEventListener('click',show) ;
document.querySelector("#menscloths3").addEventListener('click',show) ;
document.querySelector("#menscloths4").addEventListener('click',show) ;


function show() {
	window.location.href="activewear.html" ;
}
