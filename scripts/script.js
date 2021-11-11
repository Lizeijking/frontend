/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*eslint-disable no-unused-vars*/

/*https://www.youtube.com/watch?v=vQTZl_5H90k (dark/light mode)*/
document.getElementById("toggle").addEventListener("click", function () {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

/*https://www.youtube.com/watch?v=X10lSt_9WeY&t=584s (hamburger menu)*/
var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function (e) {
    var ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});


