// favours part starts here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive:{
        // 0:{
        //     items:1,
        //     nav:false,
        // },
        250:{
            items:1,
            nav:false,
        },
        750:{
            items:3,
            nav:false,
        },
        1000:{
            items:3,
            nav:false,
        }
    }
})
//favours part ends here
 //Franklin Parts starts here
 const heroB = document.querySelector('.hero-left');
 const heroL = document.querySelector('.hero-right');
 const navLinks = document.querySelector('.nav-links')
 const openNav  = document.querySelector('.openNav')
 const closeNav  = document.querySelector('.closeNav')
 const mainCon = document.querySelector('.hero-section')
 const maincon = document.querySelector('main')
// gsap.from(heroB,{
//     duration: "2.5",
//     ease:"power2.out",
//     opacity: 0,
//     x:-500
// })

// gsap.from(heroL,{
//     duration: "2.5",
//     ease:"power2.out",
//     x:500,
//     opacity:0
// })
// hamBtn.addEventListener('click', () =>{
//     navLinks.classList.toggle('active');
//     mainCon.classList.toggle('main-drop')
//     maincon.classList.toggle('main-drop')
// })

openNav.addEventListener("click", function(){
    navLinks.style.top = "200px"
    openNav.style.display = "none"
    closeNav.style.display = "block"
})

closeNav.addEventListener("click", function(){
    navLinks.style.top = "-200px"
    closeNav.style.display = "none"
    openNav.style.display = "block"
})
 //Franklin Parts ends here