const burger=document.querySelector('.burger');
const ul=document.querySelector('#navbar');

burger.addEventListener('click', ()=>{
    ul.classList.toggle('ham_active');

    let ham_child=burger.firstElementChild;
    if(ul.classList.contains('ham_active')){
        ham_child.classList.replace('fa-bars','fa-xmark')
    }
    else{
        ham_child.classList.replace('fa-xmark','fa-bars')
    }
})


