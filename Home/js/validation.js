


var namecheck = /[a-zA-Z]{2,30}$/;
// var passwordcheck =/^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&*!~+_.])[a-zA-Z0-9!@#$%^&*+_.]/
var emailcheck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var numbercheck = /^(\+\d{1,3}[- ]?)?\d{10}$/;




var emailerror = document.getElementById('emailerror')
console.log(emailerror)

var btn = document.getElementById('btn')

const validateform = ()=>{
    var returnval ;
    var fname = document.getElementById('fname')
    var email = document.getElementById('email')
    var phonenumber = document.getElementById('phonenumber')
        if(namecheck.test(fname.value)) {
            document.getElementById('nameerror').textContent=''
            fname.classList.remove('active-error')
            returnval= true
        }else{
          
            document.getElementById('nameerror').textContent='Invalid'
            fname.classList.add('active-error')
            returnval= false
        }
    
        if(emailcheck.test(email.value)){
            document.getElementById('emailerror').textContent=''
            email.classList.remove('active-error')
            returnval= true
        }else{
            document.getElementById('emailerror').textContent='Invalid'
            email.classList.add('active-error')
            returnval= false

        }
    
    
        if(numbercheck.test(phonenumber.value)){
            document.getElementById('numbererror').textContent=''
            phonenumber.classList.remove('active-error')
            returnval= true
        }else{
            document.getElementById('numbererror').textContent='Invalid'
            phonenumber.classList.add('active-error')
            returnval= false
            
        }        
      

      


   
        
    }




    function label (){
  if (fname.value>0){
    console.log('ug')
  }
        
    }
    label()

   
   
    
