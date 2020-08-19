var hamburger = document.querySelector(".hamburger");
    var wrapper  = document.querySelector(".wrapper");
    var backdrop = document.querySelector(".backdrop");

    hamburger.addEventListener("click", function(){
        wrapper.classList.add("active");
    })

    backdrop.addEventListener("click", function(){
        wrapper.classList.remove("active");
    })

var compteEpargne= document.getElementById('epargne');
var compteBloque= document.getElementById('bloque');

compteEpargne.addEventListener('click', function () {

    document.getElementById("duree_blocage").style.display="none";
    document.getElementById("MontantRenumeration").style.display="block";
    document.getElementById("frais_ouverture").style.display="block";
    
});

compteBloque.addEventListener('click', function () {

    document.getElementById("duree_blocage").style.display="block";
    document.getElementById("MontantRenumeration").style.display="block";
    document.getElementById("frais_ouverture").style.display="block";
    
});