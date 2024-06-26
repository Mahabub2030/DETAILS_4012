
const navBar = document.querySelector("nav")
const navToggle = document.querySelector(".navToggle")
const navLinks = document.querySelectorAll(".navList")
const darkToggle = document.querySelector(".darkToggle")
const body = document.querySelector("body")


navToggle.addEventListener('click',()=>{
    navBar.classList.toggle('close')
})
navLinks.forEach(function (element){
    element.addEventListener('click',function (){
        navLinks.forEach((e)=>{
            e.classList.remove('active')
            this.classList.add('active')
        })
    })
})


darkToggle.addEventListener('click',()=>{
    body.classList.toggle('dark')
})



// const navBar = document.querySelector("nav");
// const navToggle = document.querySelector(".navToggle");
// const navLinks = document.querySelectorAll(".navList");
// const darkToggle = document.querySelector(".darkToggle");
// const body = document.querySelector("body");

// navToggle.addEventListener('click', () => {
//     navBar.classList.toggle('close');
// });

// navLinks.forEach(function(element) {
//     element.addEventListener('click', function() {
//         navLinks.forEach((e) => {
//             e.classList.remove('active');
//             this.classList.add('active');
//         });
//     });
// });

// darkToggle.addEventListener('click', () => {
//     body.classList.toggle('dark');
// });

// // Add active class to first navigation link when the page loads
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.home,Management');
//     navLinks.forEach(function(link) {
//         link.classList.add('active');
//     });
// });
