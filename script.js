
var container2=document.getElementsByClassName("container2")[0];

var container3=document.getElementsByClassName("container3")[0];

var checkIcon=document.getElementById("check-icon");

var xIcon=document.getElementById("x-icon");
var i=0;

xIcon.addEventListener("click",function(){
  typeNote();

});

checkIcon.addEventListener("click",function(){
    createNote();
});
function typeNote()
{
  if(container3.style.display=="none"){
      container3.style.display="block";
  }       
  else{
    container3.style.display="none";
  }
}

function createNote()
{
     var noteText=document.getElementById("note").value;
     var node0=document.createElement("div");
     var node1=document.createElement("h1");
    node1.innerHTML=noteText;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow-wrap: break-word; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")
  
   node1.style.margin=margin();
   node1.style.transform=rotate();
   node1.style.background=color();

    node0.appendChild(node1);
    container2.insertAdjacentElement("beforeend",node0);
    node0.addEventListener("mouseenter",function(){
        node0.style.transform="scale(1.1)";
    })
    node0.addEventListener("mouseleave",function(){
        node0.style.transform = "scale(1)";
    })
    node0.addEventListener("dblclick",function(){
        node0.remove();
    })
    document.getElementById("note").value='';

}
function margin()
{
var random=["-5px","1px","5px","10px","15px","20px"];
return random[Math.floor(Math.random()*random.length)];
}
function rotate()
{
   var randomr=["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];
   return randomr[Math.floor(Math.random()*randomr.length)];
}

function color()
{
    var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
     if(i > random_colors.length - 1){
      i = 0;
    }
    return random_colors[i++];

}