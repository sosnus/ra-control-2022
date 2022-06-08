function displayArtists() {






    var data=
    {
    "pozycja" : [
    {
    "xp" : "0",
    "yp" : "30",
    "zp":"20"
    
    
    
    }
    ],
    "orientacja" : [
    {
    "xo" : "0",
    "yo" : "40",
    "zo":"10",
    "w":"35"
    
    
    
    }
    ]
    }
    
    
    
    
    
    // Put the data into a variable and format with HTML tags
    var output = "<h1>pozycja i orirntacja robota </h1>";
    output += "<ul>";
    
    
    
    // Loop through the artists
    for (var i in data.pozycja) {
    output += "<li>" +"x "+ data.pozycja[i].xp + "</li>";
    output += "<li>" +"y "+ data.pozycja[i].yp + "</li>";
    output += "<li>" +"z "+ data.pozycja[i].zp + "</li>";
    output += "<li>" +"x "+ data.orientacja[i].xo + "</li>";
    output += "<li>" +"y "+ data.orientacja[i].yo + "</li>";
    output += "<li>" +"z "+ data.orientacja[i].zo + "</li>";
    output += "<li>" +"w " + data.orientacja[i].w + "</li>";
    
    
    
    
    
    }
    
    
    
    output += "</ul>";
    
    
    
    
    
    // Output the data to the "artistList" element
    ///document.getElementById("pozycja").innerHTML=output;
    }
    
    
    
    
    
    // Load the above function when the window loads
    window.onload = displayArtists;
    
    
    
    var data =
    {
    "pozycja" : [
    {
    "xp" : "0",
    "yp" : "30",
    "zp":"20"
    
    
    
    }
    ],
    "orientacja" : [
    {
    "xo" : "0",
    "yo" : "40",
    "zo":"10",
    "w":"35"
    
    
    
    }
    ]
    }
    displayArtists();
    
    
    
    document.getElementById("fname1").value = data.pozycja[0].xp;
    document.getElementById("fname4").value = data.pozycja[0].yp;
    document.getElementById("fname7").value = data.pozycja[0].zp;
    document.getElementById("fname2").value = data.orientacja[0].xo;
    document.getElementById("fname5").value = data.orientacja[0].yo;
    document.getElementById("fname8").value = data.orientacja[0].zo;
    document.getElementById("fname11").value = data.orientacja[0].w;
    
    
    