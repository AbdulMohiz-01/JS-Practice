// // let us = prompt('Enter your username');

// // alert('Your username is: '+us);

// // window is a global object
// // there are many fucntion in the window object
// // for example:
// // scrollY,scrollX
// // innerWidth,innerHeight
// // outerWidth,outerHeight
// // scrollTo
// // scrollBy
// // scrollIntoView
// // alert
// // confirm
// // prompt
// // open
// // close
// // print
// // stop
// // location
// // history
// // screen
// // menubar
// // toolbar
// // personalbar etc.

// // DOM 
// // Document Object Model

// // doc = document.all;
// // console.log(doc.inputs);

// let str = 'Hello World This is a string';
// console.log(str);
// let word='';
// let length=0;

// Array.from(str).forEach(function(item){
//     word+=item;
//     if(item==' '){
//         console.log(word);
//         word='';
//     }
//     if(length == str.length-1){
//         console.log(word);
//         word='';
//     }
//     length++;
// });

// doc = document.scripts;
// console.log(doc);
// doc = document.images;
// console.log(doc);
// // doc = document.videos;
// doc = document.links;


/*
There are two types of selectors
1. Single Selector
2. Multiple Selector
*/

// Single element selector 
// let ele = document.getElementById('number');
// ele = document.getElementsByClassName('text');

// // if you want to change inner text of any tag
// ele.innerText = 'Hello World';

// // if you want to change inner HTML of any tag
// ele.innerHTML = '<h1>Hello World</h1>';

// // if you want to change the value of any tag
// ele.value = 'Hello World';

// // if you want to change the src of any tag
// ele.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

// // if you want to change the href of any tag
// ele.href = 'https://www.google.com';

// let's grab tags by tag name
// ele = document.getElementsByTagName('p');
// ele.innerText = 'Hello World';
// ele.innerHTML = '<h1>Hello World</h1>';

// console.log(ele.parentNode);

// let ele = document.getElementById('text');
// ele.innerText = 'Hello World';
// ele.innerHTML = '<b>Hello World</b>';

// console.log(ele.parentNode);
// console.log(ele.childNodes);


let ele = document.getElementsByClassName('myClass');

Array.from(ele).forEach(child => {
    child.style.color = 'green';
})