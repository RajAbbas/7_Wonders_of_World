            var navbtn = document.getElementById('nav-btn')
            var navbar = document.getElementById('navbaar')
            var logo = document.getElementById('logo')
            var navback = document.getElementById('nav-back')
  
            navbtn.addEventListener('click',()=>{
                if(navbar.style.width === '0%'){
                      navbar.style.width = '200px'
                      navbtn.classList.remove('fa-bars-staggered')
                      navbtn.classList.add('fa-xmark')
                      navback.style.display='block'
                    }
                else{
                      navbar.style.width = '0%'
                      navbtn.classList.add('fa-bars-staggered')
                      navbtn.classList.remove('fa-xmark')
                      navback.style.display='none'         
                    }
                                                })

                                                

window.addEventListener('scroll', function (e) {
  var nav = document.getElementsByTagName('header')[0];
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
          nav.classList.add('nav-colored');
          nav.classList.remove('nav-transparent');
          navbtn.style.color='black'
          logo.style.color='black'
      } else {
          nav.classList.add('nav-transparent');
          nav.classList.remove('nav-colored');
          navbtn.style.color='white'
          logo.style.color='white'
      }
});
/*const changebg = ()=>{
  var scrollval = window.scroll
  if(scrollval < 10){
    console.log(scrollval)
    header.classList.remove('navbar-bgcolor')
  }else{
    header.classList.add('navbar-bgcolor')
 
}}

window.addEventListener('scroll',changebg())*/

