"use strict";

const gallery= document .querySelector('.gallery');
const galleryUl= gallery .querySelector('ul');
const galleryLi= galleryUl .querySelectorAll('li');

const centerBtn = document.querySelector('.center-btn');
const arrow = centerBtn.querySelectorAll('span.arrow')

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsLi = itemsUl.querySelectorAll('li');

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background=arrBg[i];
    galleryLi[i].style.filter='grayscale(1.1)';
    
};

//모듈화 할것임

let i=-1;

function autoGallery(){
    if(i>=galleryLi.length-1) i=-1;

    i++;
    let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    let goto=(-gap*i)+'px';
    gallery.style.left=goto;
    gallery.style.transition='all 0.2s';

    itemsLi.forEach((el,idx)=>{
        if(idx===i){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    });

};

let setIn = setInterval(autoGallery,4000);


centerBtn.addEventListener('mousover',(e)=>{
    const eTarget=e.target;
    arrow.forEach(el=>{
        if(el===eTarget){
            clearInterval(setIn);
            console.log(e.target);
        }
    });
});
centerBtn.addEventListener('mousout',(e)=>{
    const eTarget=e.target;
    arrow.forEach(el=>{
        if(el===eTarget){
            setIn= setInterval(autoGallery, 4000);
        }
    });
});

(()=>{autoGallery()})();