'use strict';
let punct = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    prop = document.getElementById('prompt'),
    menuItemLi = document.createElement("li");
console.log(punct[0]);
console.log(punct[3]);
menu.insertBefore(punct[1], punct[3]);

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);   

document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerHTML = "Мы продаем только подлиную технику Apple";

adv.remove();

let question = prompt("Ваше отношение к технике apple?");

prop.textContent = question;