function myFunction1() {
    var hk1 = parseInt(document.getElementById("text_1").value);
    var hk2 = parseInt(document.getElementById("text_2").value);
    var y = getElementById("select");
    var value = y.options[y.selectedIndex].value;
    var result;
  
    switch (select) {
        case 1: {
            result = (hk1 + (hk2 * 2) / 3);
            document.getElementById("sum").value = result;
        }
        case 2: {
            result = (hk1 + (hk2 * 3) / 4);
            document.getElementById("sum").value = result;
        }
        case 3: {
            result = (hk1 + (hk2 * 4) / 5);
            document.getElementById("sum").value = result;
        }
    }
    if (result>=9){
        document.getElementById("display").innerHTML="Hoc sinh gioi";
        document.getElementById("display").style.color="red";
    }
    if(result>=7){
        document.getElementById("display").innerHTML="Hoc sinh kha";
        document.getElementById("display").style.color="blue";
    }
    if(result>=5 && result<7){
        document.getElementById("display").innerHTML="hoc sinh trung binh";
        document.getElementById("display").style.color="yellow"
    }
    else;
    document.getElementById("display").innerHTML="hoc sinh yeu"

    // document.getElementById("sum").value = result;
}
function myFunction2() {
    document.getElementById("text_1").value = "";
    document.getElementById("text_2").value = "";
    // document.getElementById("sum").value = "";
}
