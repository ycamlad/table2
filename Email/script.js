function func(mail)
{


    if (/^[^@]+\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/.test(mail))
    {
        return alert("Bon")
    }
   return  alert("Pas bon!!")

}