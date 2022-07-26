
let hearts = document.getElementsByClassName("heart");

a=true;
[...hearts].forEach(heart => {
  heart.addEventListener("click", () => {
  if(a){
    heart.setAttribute('src', "./image/favourite.svg")
  }else if(a==false){
    heart.setAttribute('src', "./image/heart0.svg")
  }
 a=!a
  });
});
//////////////menu/////////////////

let btnx = document.getElementById("btnx")
let menubox = document.getElementById("menubox")
let menu = document.getElementById("menu")

menu.addEventListener("click",()=>{
  menubox.style.right="0px"
})
btnx.addEventListener("click",()=>{
  menubox.style.right="-350px"
})



////////////modal////////////////

// let singIn = document.getElementById("singIn")
// let exampleModal = document.getElementById("exampleModal")

// singIn.addEventListener("click", ()=>{
//    exampleModal.style.display="none"

// })



///////////button X /////////

// let object = document.getElementsByClassName("object")
let closes = document.getElementsByClassName("close");

  // [...object].forEach(objectx =>{
  //   console.log(objectx)
    
  // })
 
  [...closes].forEach(close => {
    
    close.addEventListener("click", () => {
      close.parentElement.remove()
    })
      // close.addEventListener("click", () => {
      //   objectx.style.display="none"   
      // });
    });

//////////carousel///////////////
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


//////v.carousel/////
function fun(smallimg){
  var fullimg = document.getElementById("imagebox")
  fullimg.src = smallimg.src
}


let sp = document.getElementById("sp")
let des = document.getElementById("des")
let text = document.getElementById("text")
let text2 = document.getElementById("text2")
let line = document.getElementById("line")

sp.addEventListener("click", () => {
    sp.style.fontWeight="700"
    des.style.fontWeight="400"
    line.style.marginLeft="220px"
    text.innerHTML=`<div class="comm">
    <span>John Smith</span>
    <img src="./image/star3.svg">
    <h6>09 July, 2021</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
  </div>
  <div class="comm">
    <span>John Smith</span>
    <img src="./image/star4.svg">
    <h6>09 July, 2021</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
  </div>
  <div class="comm">
    <span>John Smith</span>
    <img src="./image/star3.svg">
    <h6>09 July, 2021</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
  </div>`
})
des.addEventListener("click", () => {
    sp.style.fontWeight="400"
    des.style.fontWeight="700"
    line.style.marginLeft="0px"
    text.innerHTML=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>`
})

