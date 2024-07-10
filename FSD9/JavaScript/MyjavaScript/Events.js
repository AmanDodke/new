// let designation = 'Teacher'   //prompt('enter your Designation')

// let attendance=0;
// let  attend=()=>{
//  attendance=attendance+1
//  console.log(attendance);
//             }
// if(designation==="Teacher"){
//     const container=document.getElementById('btn')
//     const btn = document.createElement('button')
//     btn.innerText="attendance"
//     container.appendChild(btn)
//      console.log(`there are ${attend()} students are present`);
//     }
// const securityBox=document.querySelector(".screen")
//   securityBox.onmouseover=()=>{
//    const key=prompt("enter security key")
//    if(key=="abcd"){
//     alert("display none")
//     const design=document.querySelector(".passwords")
//     design.style.display='block'
//    }
//    else{
//     alert("abe chal naA")ss
//    }
//   }
// const name1 =document.querySelector("#name")
// console.log(name1);
// const container=document.querySelector(".screen")
//  onchange=(eve)=>{
//      const element1=document.createElement("h1")
//      element1.innerText="hello "+eve.target.value
//      container.append(element1)
//  }
const modeBtn = document.querySelector("#modebtn")
const body = document.querySelector("body")
let mode ="light"
 modeBtn.onclick=()=>{
          if(mode==="light"){
             mode="dark"
             // body.style.backgroundColor="black"
             body.classList.add("dark")
             body.classList.remove("light")
          }
          // Isme class ke sequence ka bhi rol hota hae kya ??
      else{
         mode="light"
         // body.style.backgroundColor="white"
         body.classList.add("light")
         body.classList.remove("dark")
          }
 }
  function A(){
   console.log("function 1 is calling");
  }
  function B(){
   console.log("function 2 is calling");
  }
  function C(){
   console.log("function 3 is calling");
  }
  function D(){
   console.log("function 4 is calling");
  }

  modeBtn.addEventListener("click",A)
  modeBtn.removeEventListener("click",B)
  modeBtn.addEventListener("click",C)
  modeBtn.addEventListener("click",D)