function bold (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style1");
}

function italic (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style2");
}

function underlined (){
    var element = document.getElementById("textarea");
    element.classList.toggle("style3");
}

function changeStyle() {
    var e = document.getElementById("style");
    var dspText  = e.options[e.selectedIndex].text;

    if (dspText  == "initial"){
        document.getElementById("textarea").style.fontFamily = 'initial'; 
   } 
   else if (dspText  == "Sacramento") {
    document.getElementById("textarea").style.fontFamily = 'Sacramento', 'cursive'; 
   }
   else if (dspText  == "Kalam") {
    document.getElementById("textarea").style.fontFamily =  'Kalam', 'cursive' ; 
   }
   else if (dspText  == "Yellowtail") {
    document.getElementById("textarea").style.fontFamily = 'Yellowtail', cursive ; 
   }
   else if (dspText  == "Armata") {
    document.getElementById("textarea").style.fontFamily =  'Armata', 'sans-serif'; 
   }
   else if (dspText  == "Quantico") {
    document.getElementById("textarea").style.fontFamily = 'Quantico', 'sans-serif'; 
   } 
   else if (dspText  == "Charmonman") {
    document.getElementById("textarea").style.fontFamily =  'Charmonman', 'cursive'; 
   }
   else if (dspText  == "Srisakdi") {
    document.getElementById("textarea").style.fontFamily =  'Srisakdi', 'cursive'; 
   }
  
}

function changerTaille() {
    var e = document.getElementById("Taille");
    var dspText  = e.options[e.selectedIndex].value;
    if (dspText  == "30px") {
        document.getElementById("textarea").style.fontSize ='30px' ;
    }
   else if (dspText  == "26px") {
        document.getElementById("textarea").style.fontSize ='26px' ;
   }
   else if (dspText  == "22px") {
    document.getElementById("textarea").style.fontSize ='22px' ; 
   }
   else if (dspText  == "18px") {
    document.getElementById("textarea").style.fontSize ='18px' ; 
   }
   else if (dspText  == "16px") {
    document.getElementById("textarea").style.fontSize ='16px' ;
   }
   else if (dspText  == "12px") {
    document.getElementById("textarea").style.fontSize ='12px' ;
   }
}