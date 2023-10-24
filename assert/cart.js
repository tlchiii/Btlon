// mo dong cart
document.getElementById('header_cart').style.display = "none";

function opencart(){
   document.getElementById('header_cart').style.display = "block";
}
function closecart(){
    document.getElementById('header_cart').style.display = "none";
}

//--------- them vao gio hang
const btn = document.querySelectorAll('.item-buy');
btn.forEach(function(button,index){
    button.addEventListener('click',function(event){
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector('.item-img').src;
        var productName = product.querySelector('h4').innerText;
        var productPrice = product.querySelector('.item-price').innerText;
        addcart(productPrice,productImg,productName);
    })
})

function addcart(productPrice,productImg,productName){
    var addtr = document.createElement('tr')
    var cartItem = document.querySelectorAll('tbody tr')
    for(var i=0;i<cartItem.length;i++){
        var sanpham = document.querySelectorAll('.item-name')
        if(sanpham[i].innerText == productName){
            alert('Sản phẩm đã có trong giỏ hàng.')
            return
        }
    }

    var trcontent = '<tr><td class="image"><img src="'+ productImg+'" alt="" class="">'+
        '<span class="item-name">'+ productName +'</span></td>'+
    '<td class="item-price"><span>'+productPrice+'</span></td>'+
    '<td><input class ="sl" type="number" value="1" min="0"></td>'+
    '<td><span class="chon">xoa<span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody')
    cartTable.append(addtr)
    // append thêm thẻ chờ tr vào tbody

    cartotal()
    indexcong()
    deletecart()
    
}


//-------total price------
 function cartotal(){
    var cartItem = document.querySelectorAll('tbody tr')
    var total = 0
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('input').value
        var productPrice = cartItem[i].querySelector('.item-price').innerText
        tongA = inputValue*productPrice
        console.log(tongA)
        total = total+tongA
    }

    var carttong = document.querySelector('.total')
      carttong.innerHTML = total.toFixed(3)
      inputChange()
 }


//  ------xoa san pham-----

function deletecart(){
    var cartItem = document.querySelectorAll('tbody tr')
    for(var i=0;i<cartItem.length;i++) {
        var xoa = document.querySelectorAll('.chon')
        xoa[i].addEventListener('click',function(event){
            var cartDelete = event.target
            var cartSp = cartDelete.parentElement.parentElement
            // parentElement de lay the cha
            cartSp.remove()
            cartotal()
            indextru()   
        })
        
    }
   
}

// ------input value-----
function inputChange(){
    var cartItem = document.querySelectorAll('tbody tr')
    for(var i=0;i<cartItem.length;i++) {
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener('change',function(){
            cartotal()
        })
    }
}

//----chi so gio hang-----
function indexcong(){
    var add = document.querySelector('.quantity')
    add.innerHTML++
    
}
function indextru(){
    var tru = document.querySelector('.quantity')
     tru.innerHTML--
}




