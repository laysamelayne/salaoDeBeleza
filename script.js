const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
  
for(const element of toggle){
    element.addEventListener('click', function() {
    nav.classList.toggle('show')
    })
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    767:{
      slidesPerView: 2,
        seWrapperSize: true
    }
  }
  })
  
  const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
    
  })
  
  scrollreveal.reveal(
`#home .image, #home .text,
#sobre .image, #sobre .text,
#servicos header, #servicos .card,
#depoimentos header, #depoimentos .testimunials,
#contatos .text, #contatos .meios,
footer .logo, footer p, .links
`, {interval: 100})
  
