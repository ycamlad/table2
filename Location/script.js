function func(){
    let Cin= parseInt(document.getElementById("txtCIN").value);
    let v1;
    let v2;
    let v3;
    let v4;
    let conv =  parseInt(document.getElementById("txtPrix").value)
    let prix;

    if(document.getElementById("txtNom").value===""||document.getElementById("txtPrenom").value===""||document.getElementById("txtCIN").value==="") {
        alert("Remplir tous les champs!")


    }

       else if (Cin !== Number(document.getElementById("txtCIN").value)) {
            alert("Le champ CIN prend qu'uniquement des chiffres")

        }

      else  if(document.getElementById("txtCIN").value.length<8){
           alert("Seul un CIN de 8 chiffre est accepter")
    }

      else{
          if(document.getElementsByName("Voiture").item(0).checked){
        v1=300;
        prix = v1*parseInt(document.getElementById("txtJour").value);
              document.getElementById("txtPrix").value=prix
    }
       else if(document.getElementsByName("Voiture").item(1).checked){
            v2=80;
              prix = v2*parseInt(document.getElementById("txtJour").value);
              document.getElementById("txtPrix").value=prix
        }
      else  if(document.getElementsByName("Voiture").item(2).checked){
            v3=75;
              prix = v3*parseInt(document.getElementById("txtJour").value);
              document.getElementById("txtPrix").value=prix
        }
      else  if(document.getElementsByName("Voiture").item(3).checked){
            v4=280;
              prix = v4*parseInt(document.getElementById("txtJour").value);
              document.getElementById("txtPrix").value=prix

        }



}
}