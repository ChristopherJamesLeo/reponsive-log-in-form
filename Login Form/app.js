console.log("hello world");
let switchCtn= document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch_circle");
let switchBtn = document.querySelectorAll(".switch_btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

// let getButtons = (e)=> e.preventDefault()
let changeForm = (e)=>{
    switchCtn.classList.add("is-gx");
    setTimeout(()=>{
        switchCtn.classList.remove("is-gx");
    },1500);
    switchCtn.classList.toggle("is-txr");
    switchCircle.forEach((items)=>{ // insert foreac loop
        items.classList.toggle("is-txr")
    })
//     switchCircle[0].classList.toggle("is-txr");
//     switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}
// let mainF = (e) =>{
//     for(var i = 0 ; i < allButtons.length ; i++){
//         allButtons[i].addEventListener("click",getButtons)
//     };
//     allButtons.forEach((items)=>{ // use forEach loop 
//         items.addEventListener("click",function(){
//             this.preventDefault();
//         })
//     })
//     for(var i = 0 ; i < switchBtn.length ; i++){
//         switchBtn[i].addEventListener("click",changeForm)
//     }
// }

// window.addEventListener("load",mainF)

(function(e){
    allButtons.forEach((items)=>{
        items.addEventListener("click",function(){
            this.preventDefault();
        })
    })
    for(var i = 0 ; i < switchBtn.length ; i++){
        switchBtn[i].addEventListener("click",changeForm)
    }
})(); // self avoid function
