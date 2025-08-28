// index.js
let heartNav=document.getElementById("nav-heart")
let heart=document.getElementById("card-heart")
let callButton=document.getElementById("first-button")
let serviceName=document.getElementsByClassName("service-name")
let number=document.getElementsByClassName("Number")
let coin=document.getElementById("coin")
let divHistory=document.getElementById("div-history")
let clearButton=document.getElementById("btn-clear")
let parentHistory=document.getElementById("parent-history")
let calls=document.getElementsByClassName("call")
let count=0

heart.addEventListener("click",function(){
    count++
    heartNav.textContent =count

})

console.log(number)



clearButton.addEventListener("click",function(){

  divHistory.hidden = true; 
  parentHistory.hidden = false;
  


})




   function callHandaler (index){ 
   let service= serviceName[index].innerText
     let callNumber=number[index].innerText   

          alert( `📞 "calling" ${service} ${callNumber}  `)
    let num=parseInt(coin.innerText)
     if(num<20){
    alert("Not enough coins!");
        return;
   }
   let result=num-20
   coin.innerText=result
    let date=new Date()
    let currentDate=date.toLocaleTimeString()

   let child= document.createElement("div")
   child.innerHTML=`  <div id="div-history" class="bg-[#FAFAFA] flex justify-between items-center p-2 mt-4 rounded-lg">
        <div  class="w-[60%]">
                <h1 id="sirvice-history" class="font-semibold">${service}</h1>
                <p id="call-history">${callNumber}</p>

        </div>
        <div> <h1 id="time">${currentDate}</h1></div>

    </div>`
    parentHistory.appendChild(child)
    }



 for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function() {
    callHandaler(i);
  });
}