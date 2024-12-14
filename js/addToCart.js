const product = [
    {
        id: 0,
        image: 'img/menu-1.png',
        title: 'اسم الوجبة',
        price: 10, 
    },
    {
        id: 1,
        image: 'img/menu-2.png',
        title: 'اسم الوجبة',
        price: 26,
    },
    {
        id: 2,
        image: 'img/menu-3.png',
        title: 'اسم الوجبة',
        price: 30,
    },
    {
        id: 3,
        image: 'img/menu-4.png',
        title: 'اسم الوجبة',
        price: 15,
    },
    {
        id: 4,
        image: 'img/menu-5.png',
        title: 'اسم الوجبة',
        price: 33,
    },
    {
        id: 5,
        image: 'img/menu-6.png',
        title: 'اسم الوجبة',
        price: 13,
    },
    {
        id: 6,
        image: 'img/menu-7.png',
        title: 'اسم الوجبة',
        price: 55,
    },
    {
        id: 7,
        image: 'img/menu-8.png',
        title: 'اسم الوجبة',
        price: 40,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='col-lg-3 col-md-4 col-sm-6'>
            <div class='box my-3'>
                
                <img class='d-block w-100' src=${image}></img>
                
                <div class='text py-3 px-4'>
                    <h3 class='mb-3'>${title}</h3>
                    <span class='price' > ${price}.00</span>`+
                    "<button class='product-btn btn rounded-pill main-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash ' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }   
}
// show and hide cart items
function openNav() {
  document.getElementById("mySidenav").style.width = "360px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}