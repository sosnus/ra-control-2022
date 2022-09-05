



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function buttonpress(x){

  console.log(x);
if (x=='a'){
   document.getElementById("div1a").style.display ="block";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="none";
 
  
 
  }
    
  
else if(x=='b'){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="block";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="none";
 
  }
else if(x=="c"){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="block";
document.getElementById("div2a").style.display ="none";
 
  
  }
  
else if(x=="d"){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="block";
 
  }
}



buttonpress('a');
buttonpress('b');
buttonpress('c');
buttonpress('d');





function kamera11(){
  
document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera4.jpg' style=height:100%; />" ;

}
//function kamera1("v")

function kamera22(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera3jpg.jpg' style=height:100%; />" ;

}
function kamera33(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera2.jpg' style=height:100%;/>" ;

}
function kamera44(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera.jpg' style=height:100%;/>" ;

}






ham=getElementById("hamburger");
el1=getElementById("but1");
el2=getElementById("but2");
el3=getElementById("but3");
el4=getElementById("but4");
hamburger.style.top=400+"px";


