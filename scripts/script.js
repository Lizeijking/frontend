
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*eslint-disable no-unused-vars*/

document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});


var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function (e) {
    var ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});
