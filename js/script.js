const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example2'
})
if(document.getElementsByClassName('.owl-carousel')){

$(document).ready(function(){
  $(".slider1").owlCarousel({
   
    loop:true,
    autoplay:true,
    nav:true,
    // navText:['<i class="fa-solid fa-arrow-left-long  "></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

});
$(document).ready(function(){
  $(".slider2").owlCarousel({
   
    loop:true,
    autoplay:true,
    nav:true,
    // navText:['<i class="fa-solid fa-arrow-left-long  "></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
  });

});
}


let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category = 'category1']")
    let category2 = document.querySelectorAll("[data-category= 'category2']")
    let divs = document.querySelectorAll("[data-category]")
    console.log(category1)
    console.log(category2)
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('d-none')
    }

    if (type == 'category1') {
        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.add('d-block')
            category1[i].classList.remove('d-none')
        }
    }
    else {
        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.add('d-block')
            category2[i].classList.remove('d-none')
        }
    }
}

let nameValidation = (input)=>{
        let inputValue = input.value
     
        if(inputValue.length < 3){
            handleError(input , "at least 3 character")
            
        }
        else  handleError(input)
    }
    let emailValidation = (input)=>{
        let inputValue = input.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        (emailRegex.test(inputValue)) ? handleError(input)
            : handleError(input , "please a valid email")

    }
    let passwordValidation = ()=>{

    }
    let handleError = (ele , msg = "")=>{
        ele.nextElementSibling.innerText = msg
    }

  let userForm = document.getElementById('userForm')  
  userForm.addEventListener('input' , (e)=>{
    
    if(e.target.id == "UserName") nameValidation(e.target)
        else if (e.target.id == "userEmail") emailValidation(e.target)
        else if (e.target.id == "userPassword") passwordValidation()
  })
