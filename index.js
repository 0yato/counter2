document.getElementById("up").onclick =function(){
    if(Number(document.getElementById("counter").textContent)>=0 && Number(document.getElementById("step").value)>=0){
    let x =Number(document.getElementById("step").value);
document.getElementById("counter").textContent = x+Number(document.getElementById("counter").textContent);
}
else window.alert("the negative number are not allowed")
}

document.getElementById("down").onclick =function(){
    if(Number(document.getElementById("counter").textContent)>0 && Number(document.getElementById("step").value)>=0){
    let x =Number(document.getElementById("step").value);
document.getElementById("counter").textContent = Number(document.getElementById("counter").textContent)-x;
    }
    else window.alert("the negative number are not allowed");
}
document.getElementById("reset").onclick =function(){
    document.getElementById("counter").textContent = 0;
}
document.getElementById("set").onclick =function(){
  let start=  Number(window.prompt("Enter value you want to start with :"));
if(start>=0){
document.getElementById("counter").textContent = start;
}
else
window.alert("You put an wrong input..!");
}