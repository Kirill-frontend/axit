function ibg() {  
  let ibg = document.querySelectorAll(".ibg");  
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
// Burger
const burger = document.querySelector('.header_burger')
const burgerMenu = document.querySelector('.header_menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('lock')
})

const tabListButtons = document.querySelector('.tab_list');
const tabButtons = tabListButtons.querySelectorAll('button'); 

const tabListContent = document.querySelector('.tab_list_content');
const tabContent = tabListContent.querySelectorAll('li');

let tab = 0

tabContent.forEach(item => item.classList.add('hide'))

tabContent[tab].classList.remove('hide')


tabButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (tabButtons[tab] == tabContent[tab]) {            
            return false
        } else {
            tab = index                    

            tabButtons.forEach(i => i.classList.remove('active')   )             
            tabButtons[tab].classList.add('active')
            
            tabContent.forEach(item => item.classList.add('hide'))
            tabContent[tab].classList.remove('hide')
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader_container')
  document.body.removeChild(loader)
})

// Scroll


const navItem = document.querySelectorAll('.header_nav_list li')

navItem.forEach(item => {
  item.addEventListener('click', () => {
    scrollToElem(item.dataset.scrollto)    
  })
})

function scrollToElem(elem) {
  const element = document.querySelector(`.${elem}`)  
  const box = element.getBoundingClientRect()
  scrollTo({
    top: box.top + pageYOffset,
    behavior: 'smooth'
  })
}

