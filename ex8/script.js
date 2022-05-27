function func(){
    if(window.document.form.choix[0].checked){
        alert("vous avez choisi le "+window.document.form.choix[0].value)
    }
    else if (window.document.form.choix[1].checked){
        alert("vous avez choisi le "+window.document.form.choix[1].value)
    }
    else if (window.document.form.choix[2].checked){
        alert("vous avez choisi le "+window.document.form.choix[2].value)
    }
}