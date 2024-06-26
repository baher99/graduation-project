let cart=document.querySelector('.cart-icon i');
let cartContainer =document.querySelector('.cart-container');
let closeIcon =document.querySelector('.close');
let shopItem = document.querySelectorAll('.item-capt i');
let productContainer ;





cart.addEventListener('click' , function(){
    cartContainer.style.display='block';
})
closeIcon.addEventListener('click' , function(){
    cartContainer.style.display='none';
})

if (localStorage.getItem('myProducts')!=null) {
    productContainer=JSON.parse( localStorage.getItem('myProducts'));
    displayProducts(productContainer);
}
else
{
    productContainer=[];
}

shopItem.forEach(function(item){
    item.addEventListener('click' , (e)=>{
        let product ={
            name :item.previousElementSibling.innerHTML,
        }
        
        productContainer.push(product);
        localStorage.setItem('myProducts' ,JSON.stringify(productContainer));
        displayProducts(productContainer);
        

    })
})
function displayProducts(item) {

    var container =``
    for(var i=0 ;i<item.length;i++)
    {
        container+=`
        <tr>
        <td>${item[i].name}</td>
        <td><input type="number" value="1" name="" id=""></td>
        <td><button onclick="deleteProducts(${i})">delete</button></td>
        </tr>
        <hr>
        `
    }
    document.getElementById('table-data').innerHTML=container;

}
function deleteProducts(deletedIndex)
{
    productContainer.splice(deletedIndex,1);
    localStorage.setItem('myProducts',JSON.stringify(productContainer));
    displayProducts(productContainer);
}
