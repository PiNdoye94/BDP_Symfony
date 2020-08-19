var hamburger = document.querySelector(".hamburger");
    var wrapper  = document.querySelector(".wrapper");
    var backdrop = document.querySelector(".backdrop");

    hamburger.addEventListener("click", function(){
        wrapper.classList.add("active");
    })

    backdrop.addEventListener("click", function(){
        wrapper.classList.remove("active");
    })

var compteCourant= document.getElementById('courant');
var compteEpargne= document.getElementById('epargne');
var compteBloque= document.getElementById('bloque');

compteCourant.addEventListener('click', function () {

    
    document.getElementById("nom_employeur").style.display="block";
    document.getElementById("raison_social").style.display="block";
    document.getElementById("identifiant_employeur").style.display="block";
    document.getElementById("Adresse_employeur").style.display="block";
    document.getElementById("agios_compte_courant").style.display="block";
    document.getElementById("salaire_client").style.display="block";
    document.getElementById("duree_blocage").style.display="none";
    document.getElementById("MontantRenumeration").style.display="none";
    document.getElementById("frais_ouverture").style.display="none";

    document.getElementById("dureeBloque").disabled = true;
    document.getElementById("montant_renumeration").disabled = true;
    document.getElementById("fraisOuverture").disabled = true;
    
});

compteEpargne.addEventListener('click', function () {

    document.getElementById("nom_employeur").style.display="none";
    document.getElementById("raison_social").style.display="none";
    document.getElementById("identifiant_employeur").style.display="none";
    document.getElementById("Adresse_employeur").style.display="none";
    document.getElementById("agios_compte_courant").style.display="none";
    document.getElementById("salaire_client").style.display="none";
    document.getElementById("duree_blocage").style.display="none";
    document.getElementById("MontantRenumeration").style.display="block";
    document.getElementById("frais_ouverture").style.display="block";

    document.getElementById("nameEmployeur").disabled = true;
    document.getElementById("rs_employeur").disabled = true;
    document.getElementById("id_employeur").disabled = true;
    document.getElementById("adressEmployeur").disabled = true;
    document.getElementById("salaire").disabled = true;
    document.getElementById("agios").disabled = true;
    document.getElementById("dureeBloque").disabled = true;
    
});

compteBloque.addEventListener('click', function () {

    document.getElementById("nom_employeur").style.display="none";
    document.getElementById("raison_social").style.display="none";
    document.getElementById("identifiant_employeur").style.display="none";
    document.getElementById("Adresse_employeur").style.display="none";
    document.getElementById("agios_compte_courant").style.display="none";
    document.getElementById("salaire_client").style.display="none";
    document.getElementById("duree_blocage").style.display="block";
    document.getElementById("MontantRenumeration").style.display="block";
    document.getElementById("frais_ouverture").style.display="block";

    document.getElementById("nameEmployeur").disabled = true;
    document.getElementById("rs_employeur").disabled = true;
    document.getElementById("id_employeur").disabled = true;
    document.getElementById("adressEmployeur").disabled = true;
    document.getElementById("salaire").disabled = true;
    document.getElementById("agios").disabled = true;
    
});

/*function validateForm()
{
    var form = document.getElementsByTagName('form')[0];
    var nom = document.getElementById("lname");
    var prenom = document.getElementById("fname");
    var adresse = document.getElementById("adress");
    var telephone = document.getElementById("phone");
    var email = document.getElementById("mail");
    var cIdentite = document.getElementById("cin");
    var validite_cin = document.getElementById("validite");
    var profession = document.getElementById("nameProf");
    var nom_entreprise = document.getElementById("nameEnt");
    var adresse_entreprise = document.getElementById("adressEnt");
    //controle REGEX
    var lettreRegex = /^[a-zA-Z-\s]+$/;
    var chiffreRegex =/^(70|76|77|78)[0-9]{7}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    var cinRegex = /^[0-9]{13}$/;
    var salaireRegex = /^[0-9]+$/;
    var ncompteRegex = /^[0-9A-Z]{16}$/;
    var cleribRegex = /^[0-9]{2}$/;

    if (nom.value.trim()=="") {
        var erreurNom = document.getElementById("error_nom");
        erreurNom.innerHTML="*";
        erreurNom.style.color="red"; 
        return false;  
    }
    else if (lettreRegex.test(nom.value)==false) {
        var erreurNom = document.getElementById("error_nomMessage");
        erreurNom.innerHTML="le nom ne doit contenir que des lettres";
        erreurNom.style.color="red";
        return false;
    }
    else {
        document.getElementById('lname').innerHTML = '';
        return true;
    }
    if (prenom.value.trim()=="") {
        var erreurPrenom = document.getElementById("error_prenom");
        erreurPrenom.innerHTML="*";
        erreurPrenom.style.color="red";
        return false;
    }
    else if (lettreRegex.test(prenom.value)==false) {
        var erreurPrenom = document.getElementById("error_prenomMessage");
        erreurPrenom.innerHTML="le prénom ne doit contenir que des lettres";
        erreurPrenom.style.color="red";
        return false;
    }
    else {
        document.getElementById('fname').innerHTML = '';
        return true;
    }
    if (adresse.value.trim()=="") {
        var erreurAdresse = document.getElementById("error_adress");
        erreurAdresse.innerHTML="*";
        erreurAdresse.style.color="red";
        return false;
    }
    else {
        document.getElementById('adress').innerHTML = '';
        return true;
    }
    if (telephone.value.trim()=="") {
        var erreurTelephone = document.getElementById("error_phone");
        erreurTelephone.innerHTML="*";
        erreurTelephone.style.color="red";
        return false;
    }
    else if (chiffreRegex.test(telephone.value)==false) {
        var erreurTelephone = document.getElementById("error_phoneMessage");
        erreurTelephone.innerHTML="le numéro de téléphone est incorrect";
        erreurTelephone.style.color="red";
        return false;
    }
    else {
        document.getElementById('phone').innerHTML = '';
        return true;
    }
    if (email.value.trim()=="") {
        var erreurEmail = document.getElementById("error_mail");
        erreurEmail.innerHTML="*";
        erreurEmail.style.color="red";
        return false;
    }
    else if (emailRegex.test(email.value)==false) {
        var erreurEmail = document.getElementById("error_mail");
        erreurEmail.innerHTML="Adresse email incorrect";
        erreurEmail.style.color="red";
        return false;
    }
    else {
        document.getElementById('mail').innerHTML = '';
        return true;
    }
    if (cIdentite.value.trim()=="") {
        var erreurCin = document.getElementById("error_cin");
        erreurCin.innerHTML="*";
        erreurCin.style.color="red";
        return false;
    }
    else if (cinRegex.test(cIdentite.value)==false) {
        var erreurCin = document.getElementById("error_cinMessage");
        erreurCin.innerHTML="Numéro Carte d'identité incorrect";
        erreurCin.style.color="red";
        return false;
    }
    else {
        document.getElementById('cin').innerHTML = '';
        return true;
    }
    if (validite_cin.value.trim()=="") {
        var erreurValiditeCin = document.getElementById("error_valid");
        erreurValiditeCin.innerHTML="*";
        erreurValiditeCin.style.color="red";
        return false;
    }
    else {
        document.getElementById('validite').innerHTML = '';
        return true;
    } 
    if (profession.value.trim()=="") {
        var erreurProfession = document.getElementById("error_nameProf");
        erreurProfession.innerHTML="*";
        erreurProfession.style.color="red";
        return false;
    }
    else {
        document.getElementById('nameProf').innerHTML = '';
        return true;
    }
    if (nom_entreprise.value.trim()=="") {
        var erreurNomEntreprise = document.getElementById("error_nameEnt");
        erreurNomEntreprise.innerHTML="*";
        erreurNomEntreprise.style.color="red";
        return false;
    }
    else {
        document.getElementById('nameEnt').innerHTML = '';
        return true;
    }
    if (adresse_entreprise.value.trim()=="") {
        var erreurAdressEntreprise = document.getElementById("error_adressEnt");
        erreurAdressEntreprise.innerHTML="*";
        erreurAdressEntreprise.style.color="red";
        return false;
    }
    else {
        document.getElementById('adressEnt').innerHTML = '';
        return true;
    }
}*/


//controle des saisis sur les champs

//let save = document.getElementById("boutonsave");


//save.addEventListener("submit", function(event){
    //event.preventDefault()

    //let lettreRegex = /^[a-zA-Z-\s]+$/;
    /*let chiffreRegex =/^(70|76|77|78)[0-9]{7}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    let cinRegex = /^[0-9]{13}$/;
    let salaireRegex = /^[0-9]+$/;
    let ncompteRegex = /^[0-9A-Z]{16}$/;
    let cleribRegex = /^[0-9]{2}$/;*/

    //let nom = document.getElementById("lname");
    /*let prenom = document.getElementById("fname");
    let adresse = document.getElementById("adress");
    let telephone = document.getElementById("phone");
    let email = document.getElementById("mail");
    let cIdentite = document.getElementById("cin");
    let validite_cin = document.getElementById("validite");
    let profession = document.getElementById("nameProf");
    let nom_entreprise = document.getElementById("nameEnt");
    let adresse_entreprise = document.getElementById("adressEnt");*/
    //let champs_input = document.getElementsByTagName("input");
    /*let mSalaire = document.getElementById("salaire_client");
    let numero_compte = document.getElementById("numero_compte");
    let cle_rib = document.getElementById("cle_rib");
    let numero_agence = document.getElementById("numero_agence");
    let nom_Employeur = document.getElementById("nom_Employeur");
    let raison_sociale = document.getElementById("raison_social");
    let idEmployeur = document.getElementById("identifiant_employeur");
    let adresse_Employeur = document.getElementById("Adresse_employeur");
    let date_Ouverture = document.getElementById("date_ouverture");
    let duree_Blocage = document.getElementById("duree_blocage");
    let solde = document.getElementById("solde");
    let frais_Ouverture = document.getElementById("frais_ouverture");
    let agios = document.getElementById("agios_compte_courant"); */
    //if (champs_input.value.trim()=="") {
        //let champs_obligatoires = document.getElementById("obligatoire");
        //let etoile = "*";
        //champs_obligatoires.innerHTML ="les champs avec * sont obligatoire";
        //etoile.style.color = "red";
    //}
    /*if (nom.value.trim()=="") {
        let erreurNom = document.getElementById("error_nom");
        erreurNom.innerHTML="*";
        erreurNom.style.color="red";   
    }
    else if (lettreRegex.test(nom.value)==false) {
        let erreurNom = document.getElementById("error_nomMessage");
        erreurNom.innerHTML="le nom ne doit contenir que des lettres";
        erreurNom.style.color="red";
    }
    if (prenom.value.trim()=="") {
        let erreurPrenom = document.getElementById("error_prenom");
        erreurPrenom.innerHTML="*";
        erreurPrenom.style.color="red";
    }
    else if (lettreRegex.test(prenom.value)==false) {
        let erreurPrenom = document.getElementById("error_prenomMessage");
        erreurPrenom.innerHTML="le prénom ne doit contenir que des lettres";
        erreurPrenom.style.color="red";
    }
    if (adresse.value.trim()=="") {
        let erreurAdresse = document.getElementById("error_adress");
        erreurAdresse.innerHTML="*";
        erreurAdresse.style.color="red";
    }
    if (telephone.value.trim()=="") {
        let erreurTelephone = document.getElementById("error_phone");
        erreurTelephone.innerHTML="*";
        erreurTelephone.style.color="red";
    }
    else if (chiffreRegex.test(telephone.value)==false) {
        let erreurTelephone = document.getElementById("error_phoneMessage");
        erreurTelephone.innerHTML="le numéro de téléphone est incorrect";
        erreurTelephone.style.color="red";
    }
    if (email.value.trim()=="") {
        let erreurEmail = document.getElementById("error_mail");
        erreurEmail.innerHTML="*";
        erreurEmail.style.color="red";
    }
    else if (emailRegex.test(email.value)==false) {
        let erreurEmail = document.getElementById("error_mail");
        erreurEmail.innerHTML="Adresse email incorrect";
        erreurEmail.style.color="red";
    }
    if (cIdentite.value.trim()=="") {
        let erreurCin = document.getElementById("error_cin");
        erreurCin.innerHTML="*";
        erreurCin.style.color="red";
    }
    else if (cinRegex.test(cIdentite.value)==false) {
        let erreurCin = document.getElementById("error_cinMessage");
        erreurCin.innerHTML="Numéro Carte d'identité incorrect";
        erreurCin.style.color="red";
    }
    if (validite_cin.value.trim()=="") {
        let erreurValiditeCin = document.getElementById("error_valid");
        erreurValiditeCin.innerHTML="*";
        erreurValiditeCin.style.color="red";
    } 
    if (profession.value.trim()=="") {
        let erreurProfession = document.getElementById("error_nameProf");
        erreurProfession.innerHTML="*";
        erreurProfession.style.color="red";
    }
    if (nom_entreprise.value.trim()=="") {
        let erreurNomEntreprise = document.getElementById("error_nameEnt");
        erreurNomEntreprise.innerHTML="*";
        erreurNomEntreprise.style.color="red";
    }
    if (adresse_entreprise.value.trim()=="") {
        let erreurAdressEntreprise = document.getElementById("error_adressEnt");
        erreurAdressEntreprise.innerHTML="*";
        erreurAdressEntreprise.style.color="red";
    }  */ 
    /*if (mSalaire.value.trim()=="") {
        let erreurSalaire = document.getElementById("error_salaire");
        erreurSalaire.innerHTML="*";
        erreurSalaire.style.color="red";
    }
    else if (salaireRegex.test(mSalaire.value)==false) {
        let erreurSalaire = document.getElementById("error_salaireMessage");
        erreurSalaire.innerHTML="Veuillez revoir le salaire saisi";
        erreurSalaire.style.color="red";
    }
    if (numero_compte.value.trim()=="") {
        let erreurNCompte = document.getElementById("error_NCompte");
        erreurNCompte.innerHTML="*";
        erreurNCompte.style.color="red";
    }
    else if (ncompteRegex.test(numero_compte.value)==false) {
        let erreurNCompte = document.getElementById("error_NCompteMessage");
        erreurNCompte.innerHTML="Numéro de compte non reconnu";
        erreurNCompte.style.color="red";
    }
    if (cle_rib.value.trim()=="") {
        let erreurClerib = document.getElementById("error_clerib");
        erreurClerib.innerHTML="*";
        erreurClerib.style.color="red";
    }
    else if (cleribRegex.test(cle_rib.value)==false) {
        let erreurClerib = document.getElementById("error_cleribMessage");
        erreurClerib.innerHTML="Clé Rib non reconnu";
        erreurClerib.style.color="red";
    }
    if (numero_agence.value.trim()=="") {
        let erreurNagence = document.getElementById("error_nAgence");
        erreurNagence.innerHTML="*";
        erreurNagence.style.color="red";
    }
    if (nom_Employeur.value.trim()=="") {
        let erreurNomEmp  = document.getElementById("error_nomEmp");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    if (idEmployeur.value.trim()=="") {
        let erreuridEmployeur = document.getElementById("error_idEmpMessage");
        erreuridEmployeur.innerHTML="*";
        erreuridEmployeur.style.color="red";
    }
    if (adresse_Employeur.value.trim()=="") {
        let erreurNomEmp  = document.getElementById("error_adresseEmp");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    if (date_Ouverture.value.trim()=="") {
        let erreurNomEmp  = document.getElementById("error_dateOuverture");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }

    if (duree_Blocage.value.trim()=="") {
        let erreurNomEmp  = document.getElementById("error_dureeBlocage");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    if (solde) {
        let erreurNomEmp  = document.getElementById("error_solde");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    //else if () {}
    if (frais_Ouverture.value.trim()=="") {
        let erreurNomEmp  = document.getElementById("error_fraisOuverture");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    if (agios) {
        let erreurNomEmp  = document.getElementById("error_agios");
        erreurNomEmp.innerHTML="*";
        erreurNomEmp.style.color="red";
    }
    if (raison_sociale.value.trim()=="") {
        let erreurRaisonsociale  = document.getElementById("error_rSociale");
        erreurRaisonsociale.innerHTML="*";
        erreurRaisonsociale.style.color="red";
    }*/
//})

/*function valider() {
  // si la valeur du champ prenom est non vide
  if(document.ouvertureCompte.value != "") {
    // alors on envoie le formulaire
    document.ouvertureCompte.submit();
  }
  else {
    // sinon on affiche un message
    alert("Saisissez le prénom");
  }
}*/