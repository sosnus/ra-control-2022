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
   document.getElementById("div1b").style.display ="block";
   document.getElementById("div1c").style.display ="block";
document.getElementById("div2a").style.display ="none";
 document.getElementById("div2b").style.display ="none";
  document.getElementById("div2c").style.display ="none";
  document.getElementById("div2d").style.display ="none";
  document.getElementById("div2e").style.display ="none";
  document.getElementById("div2f").style.display ="none"; 
document.getElementById("div3a").style.display ="none";
  document.getElementById("div3b").style.display ="none";
  document.getElementById("div3c").style.display ="none";
  
 
  }
    
  
else if(x=='b'){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="block";
 document.getElementById("div2b").style.display ="block";
  document.getElementById("div2c").style.display ="block";
  document.getElementById("div2d").style.display ="block";
  document.getElementById("div2e").style.display ="block";
  document.getElementById("div2f").style.display ="block";
document.getElementById("div3a").style.display ="none";
  document.getElementById("div3b").style.display ="none";
  document.getElementById("div3c").style.display ="none";
  document.getElementById("div3d").style.display ="none";
  }
else if(x=="c"){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="none";
 document.getElementById("div2b").style.display ="none";
  document.getElementById("div2c").style.display ="none";
  document.getElementById("div2d").style.display ="none";
  document.getElementById("div2e").style.display ="none";
  document.getElementById("div2f").style.display ="none";
document.getElementById("div3a").style.display ="block";
  document.getElementById("div3b").style.display ="block";
  document.getElementById("div3c").style.display ="block";
  document.getElementById("div4a").style.display ="none";
  document.getElementById("div4b").style.display ="none";
  
  }
  else if(x=='b'){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="block";
 document.getElementById("div2b").style.display ="block";
  document.getElementById("div2c").style.display ="block";
  document.getElementById("div2d").style.display ="block";
  document.getElementById("div2e").style.display ="block";
  document.getElementById("div2f").style.display ="block";
document.getElementById("div3a").style.display ="none";
  document.getElementById("div3b").style.display ="none";
  document.getElementById("div3c").style.display ="none";
  document.getElementById("div3d").style.display ="none";
    document.getElementById("div4a").style.display ="none";
  document.getElementById("div4b").style.display ="none";
  }
else if(x=="d"){
   document.getElementById("div1a").style.display ="none";
   document.getElementById("div1b").style.display ="none";
   document.getElementById("div1c").style.display ="none";
document.getElementById("div2a").style.display ="none";
 document.getElementById("div2b").style.display ="none";
  document.getElementById("div2c").style.display ="none";
  document.getElementById("div2d").style.display ="none";
  document.getElementById("div2e").style.display ="none";
  document.getElementById("div2f").style.display ="none";
document.getElementById("div3a").style.display ="none";
  document.getElementById("div3b").style.display ="none";
  document.getElementById("div3c").style.display ="none";
  document.getElementById("div4a").style.display ="block";
  document.getElementById("div4b").style.display ="block";
  }
}



buttonpress('a')
buttonpress('b')
buttonpress('c')
buttonpress('d')





function kamera11(){
  
document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera4.jpg' />" ;

}
//function kamera1("v")

function kamera22(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera3jpg.jpg' />" ;

}
function kamera33(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera2.jpg' />" ;

}
function kamera44(){
  document.getElementById("gray").innerHTML ="<img src='img/bitmaps/kamera.jpg' />" ;

}
