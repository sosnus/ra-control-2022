function buttonpress(x){

    console.log(x);
  if (x=='a'){
     document.getElementById("div1a").style.display ="block";
     document.getElementById("div1b").style.display ="block";
     document.getElementById("div1c").style.display ="block";
  document.getElementById("div2").style.display ="none";
  document.getElementById("div3").style.display ="none";
    // document.getElementById("div1").style.zIndex="3";
    //   document.getElementById("div2").style.zIndex="-1";
    //   document.getElementById("div3").style.zIndex="-1";
    }
      
    
  else if(x=='b'){
     document.getElementById("div1a").style.display ="none";
     document.getElementById("div1b").style.display ="none";
     document.getElementById("div1c").style.display ="none";
  document.getElementById("div2").style.display ="block";
  document.getElementById("div3").style.display ="none";
    // document.getElementById("div1").style.zIndex="-1";
      // document.getElementById("div2").style.zIndex="3";
      // document.getElementById("div3").style.zIndex="-1";
    }
  else if(x=="c"){
     document.getElementById("div1a").style.display ="none";
     document.getElementById("div1b").style.display ="none";
     document.getElementById("div1c").style.display ="none";
  document.getElementById("div2").style.display ="none";
  document.getElementById("div3").style.display ="block";
    // document.getElementById("div1").style.zIndex="-1";
    //   document.getElementById("div2").style.zIndex="-1";
    //   document.getElementById("div3").style.zIndex="3";
    }
  }
  
  //myclick();
  //buttonpress("a");
  
  
  buttonpress('a')
    