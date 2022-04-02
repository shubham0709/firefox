  // function addToCart(elem) {
  //   console.log(elem);
  //   cartData.push(elem);
  //   localStorage.setItem("cart", JSON.stringify(cartData));
  //   alert("item added to cart");
  // }
 

  function addToCartNew(cartID) {

    cartlist= JSON.parse(localStorage.getItem("Cart")) ||  [];


 var cartElm = document.getElementById(cartID);
 

 var imgVal = cartElm.children[3].firstElementChild.src;
 var name= cartElm.children[0].firstElementChild.innerHTML;
 var price = cartElm.children[5].firstElementChild.innerText;
 price= Number(price.replace(/[^0-9\.-]+/g,""));
 console.log(price);


 var list={
   image: imgVal,
   itemName: name,
   itemprice: price 
 };
 // // console.log(list)
 cartlist.push(list);
 console.log(cartlist)
    localStorage.setItem("Cart",JSON.stringify(cartlist));
    alert("item Added to cart");
    //window.location.href="cart.html";
  }