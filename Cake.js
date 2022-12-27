var Evo = [
    {
        id: 1,
        name: "Bánh Cracker Kinh Đô vị phô mai",
        price: "29.000đ",
        image: "https://colombo.vn/upload/2002080/20201209/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc_c83fb.png"
    },
    {
        id: 2,
        name: "Hộp 10 Gói Bánh Kinh Đô Mini Or",
        price: "54.000đ",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"

    },
    {
        id: 3,
        name: "Bánh Trứng Tik-Tok Sầu Riêng (12...)",
        price: "23.000đ",
        image: "https://hoianmooncake.vn/wp-content/uploads/2020/08/banh-trung-thu-ga-quay-jambon-600x600.jpg"

    },
    {
        id: 4,
        name: "Bánh Gấu Chùm Ngây (Nhân Kem)...",
        price: "28.000đ",
        image: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590"

    }
    // {
    //     id:5,
    //     name:"Bánh Bơ Trứng Richy (270g/Hộp)",
    //     price:"29.000đ",
    //     image:"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/7.png?v=1568944398257"

    // }
]
function listproduct() {
    for (let i = 0; i < product.length; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" src="' + product[i].image + 'alt="Card image cap">';
        demo += '<div class="card-body">'
        demo += '<h5 class="card-title">' + product[i].name + '</h5>';
        demo += '<p class="card-text">' + product[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
        if (price > price) {
            price

        }
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        document.getElementById('banh').innerHTML += demo;
    }

}
function datmua() {
    alert("Đặt mua thành công !")
}
