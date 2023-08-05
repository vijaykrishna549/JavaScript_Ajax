console.log("Order 1");
console.log("Order 2");
console.log("Order 3");

setTimeout(() => {
  count();
}, 5000);

function count() {
  console.log("count function executed after 5 seconds");
}
