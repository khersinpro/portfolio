const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-left')
const allItemNav = document.querySelectorAll('.nav-menu-item')
const burger = document.querySelector('.burger')

if(window.matchMedia('(max-width:992px)')){
    allItemNav.forEach(item => {
        item.addEventListener("click", () => {
            burger.classList.toggle("active")
            nav.classList.toggle("active")
        })
    })
    burger.addEventListener("click", () => {
        burger.classList.toggle("active")
        nav.classList.toggle("active")
    })
}



//*** Portfolio open info onclick on tablet/mobile device  ***/
const allPortfolioItems = document.querySelectorAll(".item");

if(window.matchMedia('(max-width:992px)').matches){
    allPortfolioItems.forEach(item => {
        item.addEventListener('click', e => {
            item.querySelector('.item-hover-info').classList.toggle('openResponsive');
            item.querySelectorAll("button").forEach(item => {
                item.addEventListener('click', e => {
                    e.stopPropagation()
                })
            })
        })
    })
    window.addEventListener("scroll" , () => {
        allPortfolioItems.forEach(item => {
            item.querySelector('.item-hover-info').classList.remove('openResponsive')
        })
    }) 
}
//*** END of Portfolio open info onclick on tablet/mobile device  ***/

//*** TypeWriter annimation ***//
const txtAnim = document.querySelector('.txt-animation')
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 30
})
typewriter
.pause(1800)
.changeDelay(20)
.typeString("Moi c'est Kevin, ")
.pauseFor(300)
.typeString("<strong> Développeur</strong><span style='color:#27ae60;'> Javascript</span>")
.pauseFor(1200)
.deleteChars(10)
.typeString("<span style='color: #4361ee;'> React</span")
.pauseFor(1200)
.deleteChars(5)
.typeString("<span style='color: #fca311;'>NodeJs-Express</span>")

//*** animation contact input ***// 
const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length ; i++){
    let field = input_fields[i]
    field.addEventListener("input", (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        }else if(e.target.value == ""){
            e.target.parentNode.classList.remove('animation')
        }
    })
}

//*** Animation for home with Gsap ***/
const navbar = document.querySelector('.nav-left')
const navItem = document.querySelectorAll('.nav-menu-item')
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btn-rond')

const TL1 = gsap.timeline({paused: true});

TL1
.to(titre, {y: 0, opacity: 1, ease: Power3.easeOut, duration: 1.2 }, "-=0.3")
.add(()=> typewriter.start(),'-=0.9')
.staggerTo(btn, 0.5, {opacity: 1, scaleY: 1}, 0.2, '-=0.40')
.staggerTo(btnMedias, 1, {opacity: 1, y: 0}, 0.2, '-=0.85')



window.addEventListener('load', () => {
    TL1.play();
})
//*** END of Animation for home with Gsap ***/

//*** Animation for section PORTFOLIO with Gsap and ScrollMagic ***//
const portfolioLeftLine = document.querySelector('.portfolio-title-container .left-line')
const portfolioRightLine = document.querySelector('.portfolio-title-container .right-line')

//*** Vague1 ***// 
const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio =document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();
const controller = new ScrollMagic.Controller();

tlPortfolio
.to(portfolioLeftLine, {width: "100%", duration: 0.3})
.to(portfolioRightLine, {width: "100%" , duration: 0.3}, "-=0.3")
.to(titrePortfolio, {y: 0, opacity: 1, duration: 0.5})
.staggerTo(itemPortfolio, 0.1,{y: 0 ,opacity: 1}, 0.2, "-=0.5")

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.7,
    reverse: false
})
.setTween(tlPortfolio)
.addTo(controller)

//*** Vague2 ***//
const itemPortfolio2 = document.querySelectorAll('.vague2')
const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerTo(itemPortfolio2,0.1,{y: 0 ,opacity: 1}, 0.2, "+=0.2")

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.8,
    reverse: false
})
.setTween(tlPortfolio2)
.addTo(controller)
//*** END of Animation for section PORTFOLIO with Gsap and ScrollMagic ***//

//*** Animation for "about" section with Gsap and ScrollMagic ***//
const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titre-pres')
const presGauche = document.querySelector('.pres-gauche')
const imgPres = document.querySelector('.about-img-pres');
const aboutLeftLine = document.querySelector('.pres-title-container .left-line')
const aboutRightLine = document.querySelector('.pres-title-container .right-line')

const tlpres = new TimelineMax();

tlpres
.to(aboutLeftLine, {width: "100%", duration: 0.3})
.to(aboutRightLine, {width: "100%" , duration: 0.3}, "-=0.3")
.to(titrePres, {y: 0, opacity: 1, duration: 0.5})
.to(presGauche, {y: 0, opacity: 1, duration: 0.6}, "-=0.5")
.to(imgPres, {y: 0, opacity: 1, duration: 0.6}, "-=0.9")

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.7,
    reverse: false  //animation launch only one time
})
.setTween(tlpres)   //method for add timeline 
.addTo(controller)  // trigger control
//*** END ofAnimation for "about" section with Gsap and ScrollMagic ***//

//*** Animation for section range with Gsap and ScrollMagic ***//
const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const skillBox = document.querySelectorAll('.skill-box');
const rangeLeftLine = document.querySelector('.range-title-container .left-line');
const rangeRightLine  = document.querySelector('.range-title-container .right-line');

const tlCompetences = new TimelineMax();

tlCompetences
.to(rangeLeftLine, {width: "100%", duration: 0.3})
.to(rangeRightLine, {width: "100%" , duration: 0.3}, "-=0.3")
.to(titreComp, {opacity: 1, y: 0, duration: 0.6})
.staggerTo(skillBox, 0.5, { y: 0, opacity: 1 }, 0.1, '-=0.5')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false,
    triggerHook: 0.7,
})
.setTween(tlCompetences)
.addTo(controller);
//*** END of Animation for section range with Gsap and ScrollMagic ***//

//*** Animation for contact section with Gsap and ScrollMagic ***//
const contactSection =  document.querySelector('.section-contact');
const contactTitle =  document.querySelector('.contact-title-container h2');
const contactLeftLine = document.querySelector('.contact-title-container .left-line');
const contactRightLine = document.querySelector('.contact-title-container .right-line');

const tlContact = new TimelineMax()

tlContact
.to(contactLeftLine, { width: "100%", duration: 0.3 })
.to(contactRightLine, { width: "100%", duration: 0.3 }, "=-0.3")
.to(contactTitle, { opacity: 1, y: 0, duration: 0.5 })

const scene6 = new ScrollMagic.Scene({
    triggerElement: contactSection,
    reverse: false,
    triggerHook: 0.9
})
.setTween(tlContact)
.addTo(controller);
//*** END of Animation for contact section with Gsap and ScrollMagic ***//

//*** Getform.io logic with contact form ***/
var form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'surname',
        document.querySelector('input[name="surname"]').value
    )
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'message',
        document.getElementById("txt").value
    )

    fetch("https://getform.io/f/ceae3d30-dfaf-4033-a2f1-d8d8e9fb57fa", {
            method: "POST",
            body: formData,
    })
    .then(response => console.log(response))
    .then(() => {
        document.querySelector('input[name="surname"]').value = ""
        document.querySelector('input[name="name"]').value = ""
        document.getElementById("txt").value = ""
        Swal.fire({
            title: 'Envoyé!',
            text: 'Je vous répondrais dans les plus brefs délais',
            icon: 'success',
            confirmButtonText: 'Fermer',
            confirmButtonColor: "#14213d",
            width: "70%"
        })
    }
    )
    .catch(error => console.log(error))
}
//*** END of Getform.io logic with contact form **









