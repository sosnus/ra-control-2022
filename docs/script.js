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