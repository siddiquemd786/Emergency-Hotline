// index.js
let heartNav=document.getElementById("nav-heart")
let heart=document.getElementById("card-heart")
let callButton=document.getElementById("call-btn")
let serviceName=document.getElementById("service-name")
let number=document.getElementById("Number")
let coin=document.getElementById("coin")
let count=0

heart.addEventListener("click",function(){
    count++
    heartNav.textContent =count

})


callButton.addEventListener("click", function(){
    let servic=serviceName.innerText
    let callNumber=number.innerText
      
    let num=parseInt(coin.innerText)
     if(num<20){
    alert("Not enough coins!");
        return;
   }
    

   let result=num-20
   coin.innerText=result
  
   
    alert( `📞 "calling" ${servic} ${callNumber}  `)
  


   
    
})