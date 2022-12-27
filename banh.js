
var product = [
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"

    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"

    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/12-305c5dfc-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"

    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"

    }
]
var Productnb = [
    {
        picture: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_4.jpg?1663905428530",
        name: "Banh Cracker AFC Kinh ...",
        price: "29.000",

    },
    {
        ipicture: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590",
        name: "Goi banh kinh do mini...",
        price: "40.000",

    },
    {
        id: 3,
        name: "Banh trung tik-tok sau rieng...",
        price: "26.000",
        picture: ""
    },
    {
        id: 4,
        name: "Banh gau (nhan kem)...",
        price: "27.000",
        picture: ""
    },
];


function listproduct() {
    for (let i in product) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" src="' + product[i].img + 'alt="Card image cap">';
        demo += '<div class="card-body">'
        demo += '<h5 class="card-title">' + product[i].Name + '</h5>';
        demo += '<p class="card-text">' + product[i].Price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        document.getElementById('banh').innerHTML += demo;
    }

}
function datmua() {
    alert("Đặt mua thành công !")
}
for(let a=0; a<= Productnb.length-1; a++){
    var demo ='<div class="col-3">';
    demo +='<div class="card" style="width: 18rem ;">';
    demo += '<img class="card-img-top" src="' + Productbc[a].picture + ' " alt="Card image cap">';
    demo +='<div class="card-body">';
    demo +='<h5 class="card-title">'+Productnb[a].name +'</h5>';
    demo +='<p class="card-text">'+Productnb[a].price +'</p>';
    demo +='<a href="#" class="btn-primary" onclick="oder()">Dat mua</a>'
    demo +='</div>';
    demo +='</div>';
    demo +='</div>';
    console.log(demo);
    document.getElementById("Productnb").innerHTML +=demo;
    }
