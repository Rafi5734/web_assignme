const products = [
  {
    id: 0,
    name: "A",
    price: 10,
    quantity: 1,
  },
  {
    id: 1,
    name: "B",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "C",
    price: 10,
    quantity: 1,
  },
  // {
  //   id: 3,
  //   name: "D",
  //   price: 10,
  //   quantity: 1,
  // },
  // {
  //   id: 4,
  //   name: "E",
  //   price: 10,
  //   quantity: 1,
  // },
  // {
  //   id: 5,
  //   name: "F",
  //   price: 100,
  //   quantity: 1,
  // },
  // {
  //   id: 6,
  //   name: "G",
  //   price: 15,
  //   quantity: 1,
  // },
];


var content = "";
var quantity = 0;
var totalPrice = 0;
var totalQuantity = 1;
var dataArray = [];
let priceArray = [];

// console.log(products);

products.map(function (product) {
  totalPrice = totalPrice + product.price;
  // console.log(parseInt(totalPrice));
});

$("#totalPrice").text(totalPrice);

const addItem = function (id, price) {
  const findItem = dataArray.filter(function (item) {
    return item.id === id;
  });

  let finalQuantity = ++findItem[0].quantity;
  $("#quantityId-" + id).val(finalQuantity);
  // let itemPrice = findItem[0].price;

  var finalPrice = finalQuantity * price;
  console.log(finalPrice);
  $("#priceId-" + id).html(finalPrice);

  dataArray[id].price = finalPrice;

  // console.log(dataArray[id].price);

  console.log(dataArray);
  $("#totalPrice").text(totalPrice + finalPrice);

  console.log(totalPrice + finalPrice);
  console.log(finalPrice);

  // console.log("final totalPrice----", subTotal - dataArray[id].price);

  // console.log(objIndex);
  // $("#quantityId-" + id).val(++totalQuantity);
  // $("#quantityId-" + id).attr("value", totalQuantity);
  // var currentQuantity = $("#quantityId-" + id).val();
  // console.log(currentQuantity);
};

// const deleteBtn = function (id) {
//   const filterItem = dataArray.filter(function (item) {
//     return item.id === id;
//   });
//   $("#productId-" + id).fadeOut(1000, function () {
//     $(this).remove(filterItem);
//   });
//   dataArray.splice(id,1);
//   console.log(filterItem);
//   console.log(dataArray.length);
//   totalPrice = totalPrice - filterItem[0].price;
//   $("#totalPrice").text(totalPrice);

//   console.log(totalPrice);
//   console.log(dataArray);
// };

function deleteBtn(id) {
  console.log(id);
 
  console.log(products.splice(id, 1));
  // $("#productId-" + id).fadeOut(1000, function () {
  //   $(this).remove();
  // });
  // console.log(removeItemPrice);
  console.log(products);
}

$("#refresh_id").click(function () {
  location.reload(true);
});

$("#button-addon2").on("click", function (e) {
  let myData = $("#dataInput").val();
  if (myData === "") {
    alert("Enter a name");
  } else {
    var arrLength = dataArray.length;
    const updateContent = `<div id="productId-${++arrLength}" class="col-md-4 mt-5">
                            <div id="product_wrapper" class="d-flex flex-column">
                                <p>Id: <span>23</span></p>
                                <p>Name: <span>${myData}</span></p>
                                <div class="input-group mb-3">
                                  <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Add Quantity"
                                      aria-label="Recipient's username"
                                      aria-describedby="button-addon2"
                                      id="quantityId"
                                      value=""
                                    />
                                  <button id="addItem" onclick="addItem()" class="btn btn-outline-secondary" type="button">Add</button>
                              </div>
                                  <p>Price: <span>444</span></p>
                                  <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
                            </div>
                          </div>`;
    $("#rows").append(updateContent);
    $("#dataInput").val("");
    dataArray.push({ id: arrLength, price: 10 });

    console.log(updateContent);
    let restLengArr = dataArray.length - 5;
    let multiAdd = 10 * restLengArr;
    totalPrice = multiAdd + totalPrice;

    $("#totalPrice").text(totalPrice);
  }
});

$("#dataInput").on("keypress", function (e) {
  if (e.key === "Enter") {
    let myData = $("#dataInput").val();
    if (myData === "") {
      alert("Enter a name");
    } else {
      var arrLength = dataArray.length;
      // let finalQuantity = ++findItem[0].quantity;
      // $("#quantityId-" + id).val(finalQuantity);
      console.log($("#quantityId-" + ++arrLength));
      const updateContent = `<div id="productId-${arrLength}" class="col-md-4 mt-5">
                        <div id="product_wrapper" class="d-flex flex-column">
                            <p>Id: <span>23</span></p>
                            <p>Name: <span>${myData}</span></p>
                            <div class="input-group mb-3">
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Add Quantity"
                                  aria-label="Recipient's username"
                                  aria-describedby="button-addon2"
                                  id="quantityId-${arrLength}"
                                  value=1
                                />
                               <button id="addItem" onclick="addItem(${arrLength})" class="btn btn-outline-secondary" type="button">Add</button>
                            </div>
                            <p>Price: <span>10</span></p>
                            <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>`;
      $("#rows").append(updateContent);
      console.log(updateContent);
      $("#dataInput").val("");
      dataArray.push({ id: arrLength, price: 10 });

      // console.log(totalPrice);
      console.log(dataArray);
      let restLengArr = dataArray.length - 6;
      let multiAdd = 10 * restLengArr;
      totalPrice = multiAdd + totalPrice;

      $("#totalPrice").text(totalPrice);
    }
  }
});

var content = products
  .map((product) => 
    // console.log(product);
    `<div id="productId-${product.id}" class="mt-5 col-md-4">
                 <div id="product_wrapper" class="d-flex flex-column">
                     <p id="item">Id: <span id="itemId">${product.id}</span></p>
                     <p>Name: <span>${product.name}</span></p>
                     <div class="input-group mb-3">
                         <input
                             type="text"
                             class="form-control"
                             placeholder="Add Quantity"
                             aria-label="Recipient's username"
                             aria-describedby="button-addon2"
                             id="quantityId-${product.id}"
                             value=${product.quantity}
                         />
                         <button id="addItem" onclick="addItem(${product.id}, ${product.price})" class="btn btn-outline-secondary" type="button">Add</button>
                     </div>
                     <p>Price: <span id="priceId-${product.id}">${product.price}</span></p>
                     <button onclick="deleteBtn(${product.id})" type="button" class="btn btn-danger">Remove</button>
                 </div>
             </div>`
  ).join("");
  

  $("#rows").html(content);

// $.get("./fake_data.json", function (data) {
//   dataArray = data;
//   content = dataArray
//     .map(
//       (d) => `<div id="productId-${d.id}" class="mt-5 col-md-4">
//                 <div id="product_wrapper" class="d-flex flex-column">
//                     <p id="item">Id: <span id="itemId">${d.id}</span></p>
//                     <p>Name: <span>${d.name}</span></p>
//                     <div class="input-group mb-3">
//                         <input
//                             type="text"
//                             class="form-control"
//                             placeholder="Add Quantity"
//                             aria-label="Recipient's username"
//                             aria-describedby="button-addon2"
//                             id="quantityId-${d.id}"
//                             value=${d.quantity}
//                         />
//                         <button id="addItem" onclick="addItem(${d.id}, ${d.price})" class="btn btn-outline-secondary" type="button">Add</button>
//                     </div>
//                     <p>Price: <span id="priceId-${d.id}">${d.price}</span></p>
//                     <button onclick="deleteBtn(${d.id})" type="button" class="btn btn-danger">Remove</button>
//                 </div>
//             </div>`
//     )
//     .join("");

//   $("#rows").html(content);
//   dataArray.map((d) => {
//     totalPrice = parseInt(totalPrice + d.price);
//     $("#totalPrice").text(totalPrice);
//     // console.log("final totalPrice----", totalPrice);
//   });
// });
