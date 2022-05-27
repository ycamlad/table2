// ***** creation de la fonction func **** //
function func(){

    // ****** recuperation des valeurs de id:txtNom et id:txtPrenom ***** //

    let txtNom= document.getElementById("txtNom").value;
    let txtPNom= document.getElementById("txtPrenom").value;

    // *****   conditions pour pouvoir commencer le questionnaire ***** //

    if(txtNom==="" ||txtPNom==="") {
        alert("veillez remplir le champ Nom et le champ Prenom!")
    }

     else if((Number(txtNom)||Number(txtPNom))){
        alert("ne pas remplir avec des nombres!")
         document.getElementById("txtNom").value="";
         document.getElementById("txtPrenom").value="";


    }


    else{

        // *******  Initialisation des valeurs q et total ******* //

        let q1 = 0;
        let q2 = 0;
        let q3 = 0;
        let total;

        // *****   conditions pour verifier les bonnes reponses   ***** //

        if(document.getElementById("html").checked){
            q1=3;
        }
        if(document.getElementById("Q2").checked){
            q2=3;
        }
        if(window.document.form.choix.selectedIndex===1){
            q3=4;
        }

        // ***** calcul et Affichage du total ******* //

        total=q1+q2+q3;
        document.getElementById("total").value=total;

        // ***** conditions pour Affichage du message ******* //

        if(total<5){
            document.getElementById("message").innerHTML="Désolé, vous n'avez pas réussie! &#10060;"
        }

        else if(total>5&&total<10){
            document.getElementById("message").innerHTML="Vous avez réussie avec la mention passable! &#9989"
        }

        else{
            document.getElementById("message").innerHTML="Félicitations, vous avez réussie avec la mention très bien&#10071 &#10071 &#10071 "
        }

    }


}