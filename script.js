// Reference Datatype
let cart = 10;

function updatecart(cart) {
  // cart value is not updated Bcz it update only inside the funtion
  cart++;
}
updatecart(cart);
console.log("update cart value is : ", cart);
