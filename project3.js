const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginlink');
const registerLink = document.querySelector('.registerlink');
const btnpopup = document.querySelector('.loginbtn');
const closebtn = document.querySelector('.closebutton');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('popup');
});
closebtn.addEventListener('click', ()=>{
    wrapper.classList.remove('popup');
});