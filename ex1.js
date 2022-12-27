function myFunction(){
    var a = document.getElementById('text_1').value;
    a=parseInt(a);
    var b=document.getElementById('text_2').value;
    b=parseInt(b);
    var c = document.getElementById('seclect');
    var value=c.options[c.selectedIndex].value;
    value=parseInt(value);
    var k;
    switch (value) {
        case 1:{
            k=(a+(b*2))/3;
            k =parseFloat(k);
            document.getElementById('result').value=k;
        }
        case 2:{
            k=(a+(b*2))/3;
            k =parseFloat(k);
            document.getElementById('result').value=k;

        }
    }
}