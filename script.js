var bulb = document.querySelector("#bulb")
var button = document.querySelector("button")

var flag = 0
button.addEventListener("click",function(){
  if(flag == 0){
    bulb.style.backgroundColor = "rgb(255, 94, 0)"
    flag = 1
  }
  else{
    bulb.style.backgroundColor = "transparent"
    flag = 0  
  } 
}) 