var data=new Array();
function savedata(){
    var a, b, c, d, e;
    a= document.getElementById('fn_c').value;
    if(a==""){
        alert("full name must not blank!")
    }
    if(b==""){
        alert("Id_pro must not blank!")
    }
    if(c==""){

    }
    if(d==""){

    }
    if(e==""){

    }
    if(checkErro()==0){
        data.push({Fullname_cus:a, id_pro:b, Name_pro: c, })
    }
}