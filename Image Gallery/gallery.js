var fullimgcontainer = document.getElementById('full-img-container')
var fullimg = document.getElementById('fullimg')
  var imgbox = document.querySelectorAll('.img-box')
    var closefullimg = document.getElementById('closeall')

imgbox.forEach((element)=>{
element.addEventListener('click',()=>{
    fullimgcontainer.style.display='flex';
    let pic = element.children[0].getAttribute('src')
    fullimg.setAttribute('src', pic);
    var b = document.getElementById('gallerya').setAttribute('href', pic)
    console.log(b)
})
})

closefullimg.addEventListener('click',()=>{
fullimgcontainer.style.display='none'
})