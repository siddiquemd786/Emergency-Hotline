// index.js
let heartNav=document.getElementById("nav-heart")
let heart=document.getElementsByClassName("card-heart")
let callButton=document.getElementById("first-button")
let serviceName=document.getElementsByClassName("service-name")
let number=document.getElementsByClassName("Number")
let coin=document.getElementById("coin")
let divHistory=document.querySelector(".div-history")
let clearButton=document.getElementById("btn-clear")
let parentHistory=document.querySelector(".parent-history")
let calls=document.getElementsByClassName("call")
let copyBtn=document.getElementsByClassName("copy-button ")
let copyNumber=document.getElementById("copy-number")




let count=0

for(let n=0; n<heart.length;n++){
  heart[n].addEventListener("click", function(){
 count++
    heartNav.textContent =count
  })
}



 
   function callHandaler (index){ 
   let service= serviceName[index].innerText
     let callNumber=number[index].innerText   

         
    let num=parseInt(coin.innerText)
     if(num <= 0){
    alert(`👉 “You don’t have enough coins. At least 20 coins are required to make a call.”`);
        return;
   }
    alert( `📞 "calling" ${service} ${callNumber}  `)
   let result=num-20
   coin.innerText=result
    let date=new Date()
    let currentDate=date.toLocaleTimeString()

   let child= document.createElement("div")
   child.innerHTML=`  <div id="div-history" class="bg-[#FAFAFA] flex justify-between items-center p-2 mt-4 rounded-lg">
        <div  class="w-[70%]">
                <h1 id="sirvice-history" class="font-semibold text-[14px] w-full">${service}</h1>
                <p id="call-history">${callNumber}</p>

        </div>
        <div> <h1 id="time " class="text-[14px]">${currentDate}</h1></div>

    </div>`
    parentHistory.appendChild(child)

    clearButton.addEventListener("click",function(){
      child.remove()
    })

 }


 for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function() {
    callHandaler(i);
  });
}

let copyCount=0

function copyNum(index){
  
  let copyN=number[index].innerText
  alert(`"Number copied " ${copyN}`)
  return copyN

}

for(let j=0; j<copyBtn.length; j++){
  copyBtn[j].addEventListener("click",function () {
    
    copyCount++
    copyNumber.innerText=copyCount

   navigator.clipboard.writeText(copyNum(j))
   
    
  })
}


