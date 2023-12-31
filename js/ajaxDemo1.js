function displayData() {
  const btn = document.getElementById("btn");
  // btn.style.display = "none";
  // Creating the XMLHttpRequest object
  var request = new XMLHttpRequest();
  // Instantiating the request object
  request.open("GET", "https://dummyjson.com/products/", true);
  request.responseType = "json";
  // Defining event listener for readystatechange event
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var response = request.response;
      console.log(response, "responseee");
      const prArray = [];
      prArray.push(response);
      console.log(prArray[0].products, "prAYYY");
      const crd = document.getElementById("result");

      crd.innerHTML = prArray[0].products
        .map(function (pr) {
          return `
          <div id="main">
          <div id="mainImg">
          <span id="ids"><img src="${pr.images[0]}" </span> 
          </div>
          <div id="mainDetails">
          <span id="title">Name: ${pr.title}</span>    
        <span id="brand">Brand: ${pr.brand}</span>
        <span id="rating">Rating: ${pr.rating}</span>
        <span id="price">Price: ${pr.price}</span>
        <span id="category">Category: ${pr.category}</span>
          </div>


        </div>
        `;
        })
        .join("");
    }
  };
  // Sending the request to the server
  request.send();
}
