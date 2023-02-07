const products = [
  {
    id: 0,
    name: "A",
    price: 10,
    quantity: 2,
  },
  {
    id: 1,
    name: "B",
    price: 20,
    quantity: 5,
  },
  {
    id: 2,
    name: "C",
    price: 30,
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
var quantity = 1;
var totalPriceArr = [];
var totalQuantity = 0;
var dataArray = [];
let priceArray = [];
var tempArr = [];
var addItemArr = [];
var sum = 0;
var mergeArray = [];
var mergeDataArr1 = []; 

// const addItem = function (id, price) {
//   const findItem = dataArray.filter(function (item) {
//     return item.id === id;
//   });

//   let finalQuantity = ++findItem[0].quantity;
//   $("#quantityId-" + id).val(finalQuantity);
//   // let itemPrice = findItem[0].price;

//   var finalPrice = finalQuantity * price;
//   console.log(finalPrice);
//   $("#priceId-" + id).html(finalPrice);

//   dataArray[id].price = finalPrice;

//   // console.log(dataArray[id].price);

//   console.log(dataArray);
//   $("#totalPrice").text(totalPrice + finalPrice);

//   console.log(totalPrice + finalPrice);
//   console.log(finalPrice);

//   // console.log("final totalPrice----", subTotal - dataArray[id].price);

//   // console.log(objIndex);
//   // $("#quantityId-" + id).val(++totalQuantity);
//   // $("#quantityId-" + id).attr("value", totalQuantity);
//   // var currentQuantity = $("#quantityId-" + id).val();
//   // console.log(currentQuantity);
// };

// const deleteBtn = function (id) {
//   const filterItem = dataArray.filter(function (item) {
//     return item.id === id;
//   });
//   $("#productId-" + id).fadeOut(1000, function () {
//     $(this).remove(filterItem);
//   });
//   dataArray.slice(id);
//   console.log(filterItem);
//   console.log(dataArray.length);
//   totalPrice = totalPrice - filterItem[0].price;
//   $("#totalPrice").text(totalPrice);

//   console.log(totalPrice);
//   console.log(dataArray);
// };

$("#refresh_id").click(function () {
  location.reload(true);
});

// $("#button-addon2").on("click", function (e) {
//   let myData = $("#dataInput").val();
//   if (myData === "") {
//     alert("Enter a name");
//   } else {
//     var arrLength = dataArray.length;
//     const updateContent = `<div id="productId-${++arrLength}" class="col-md-4 mt-5">
//                             <div id="product_wrapper" class="d-flex flex-column">
//                                 <p>Id: <span>23</span></p>
//                                 <p>Name: <span>${myData}</span></p>
//                                 <div class="input-group mb-3">
//                                   <input
//                                       type="text"
//                                       class="form-control"
//                                       placeholder="Add Quantity"
//                                       aria-label="Recipient's username"
//                                       aria-describedby="button-addon2"
//                                       id="quantityId"
//                                       value=""
//                                     />
//                                   <button id="addItem" onclick="addItem()" class="btn btn-outline-secondary" type="button">Add</button>
//                               </div>
//                                   <p>Price: <span>444</span></p>
//                                   <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
//                             </div>
//                           </div>`;
//     $("#rows").append(updateContent);
//     $("#dataInput").val("");
//     dataArray.push({ id: arrLength, price: 10 });

//     console.log(updateContent);
//     let restLengArr = dataArray.length - 5;
//     let multiAdd = 10 * restLengArr;
//     totalPrice = multiAdd + totalPrice;

//     $("#totalPrice").text(totalPrice);
//   }
// });

// $("#dataInput").on("keypress", function (e) {
//   if (e.key === "Enter") {
//     let myData = $("#dataInput").val();
//     if (myData === "") {
//       alert("Enter a name");
//     } else {
//       var arrLength = dataArray.length;
//       // let finalQuantity = ++findItem[0].quantity;
//       // $("#quantityId-" + id).val(finalQuantity);
//       console.log($("#quantityId-" + ++arrLength));
//       const updateContent = `<div id="productId-${arrLength}" class="col-md-4 mt-5">
//                         <div id="product_wrapper" class="d-flex flex-column">
//                             <p>Id: <span>23</span></p>
//                             <p>Name: <span>${myData}</span></p>
//                             <div class="input-group mb-3">
//                               <input
//                                   type="text"
//                                   class="form-control"
//                                   placeholder="Add Quantity"
//                                   aria-label="Recipient's username"
//                                   aria-describedby="button-addon2"
//                                   id="quantityId-${arrLength}"
//                                   value=1
//                                 />
//                                <button id="addItem" onclick="addItem(${arrLength})" class="btn btn-outline-secondary" type="button">Add</button>
//                             </div>
//                             <p>Price: <span>10</span></p>
//                             <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
//                         </div>
//                     </div>`;
//       $("#rows").append(updateContent);
//       console.log(updateContent);
//       $("#dataInput").val("");
//       dataArray.push({ id: arrLength, price: 10 });

//       // console.log(totalPrice);
//       console.log(dataArray);
//       let restLengArr = dataArray.length - 6;
//       let multiAdd = 10 * restLengArr;
//       totalPrice = multiAdd + totalPrice;

//       $("#totalPrice").text(totalPrice);
//     }
//   }
// });

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

$("#button-addon2").on("click", function (e) {
  var addValue = $("#dataInput").val().toUpperCase();
  if (addValue) {
    var arrLength = products.length;
    console.log("updateArrLength", arrLength)
    products.push({ id: arrLength, name: addValue, price: 10, quantity: 1 });
    if (products.length > arrLength) {
      console.log(
        "A new element has been added:",
        tempArr.push(
          products[products.length - 1].price *
            products[products.length - 1].quantity
        )
      );
      console.log("A new price has been added:", tempArr);
      mergeArray = totalPriceArr.concat(tempArr);
      console.log(products[products.length - 1]);
      console.log("A new price sum added:", mergeArray);
      sum = mergeArray.reduce((total, current) => total + current, 0);
      $("#totalPrice").text(sum);
    }
    console.log("temp array  ", tempArr);
    // totalPriceArr.concat(tempArr);
    console.log("after concat added:", totalPriceArr);
    

    const updateContent = `<div id="productId-${arrLength}" class="col-md-4 mt-5">
                                <div id="product_wrapper" class="d-flex flex-column">
                                    <p>Id: <span>${arrLength}</span></p>
                                    <p>Name: <span>${addValue}</span></p>
                                    <div class="input-group mb-3">
                                      <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Add Quantity"
                                          aria-label="Recipient's username"
                                          aria-describedby="button-addon2"
                                          id="quantityId-${arrLength}"
                                          value="1"
                                        />
                                      <button id="addItem" onclick="addItem(${arrLength})" class="btn btn-outline-secondary" type="button">Add</button>
                                  </div>
                                      <p>Main Price: <span priceId-${arrLength}>10</span></p>
                                      <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
                                </div>
                              </div>`;
    $("#rows").append(updateContent);
    // console.log(products);
    $("#dataInput").val("");
  } else {
    alert("Please enter a value");
  }
});

$("#show-product").on("click", function (e) {
  // console.log(totalPrice)
  content = products
    .map(
      (d) => `<div id="productId-${d.id}" class="mt-5 col-md-4">
                  <div id="product_wrapper" class="d-flex flex-column">
                      <p id="item">Id: <span id="itemId">${d.id}</span></p>
                      <p>Name: <span>${d.name}</span></p>
                      <div class="input-group mb-3">
                          <input
                              type="text"
                              class="form-control"
                              placeholder="Add Quantity"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              id="quantityId-${d.id}"
                              value=${d.quantity}
                          />
                          <button id="addItem" onclick="addItem(${
                            d.id
                          })" class="btn btn-outline-secondary" type="button">Add</button>
                      </div>
                      <p>Sub Price: <span id="priceId-${d.id}">${
        d.price * d.quantity
      }</span></p>
                      <p>Main Price: <span id="priceId">${d.price}</span></p>
                      <button onclick="deleteBtn(${
                        d.id
                      })" type="button" class="btn btn-danger">Remove</button>
                  </div>
              </div>`
    )
    .join("");
  $("#rows").html(content);
  products.map((d) => {
    console.log("final totalPrice----", totalPriceArr.push(d.price * d.quantity));
  });
  console.log(totalPriceArr);
  sum = totalPriceArr.reduce((total, current) => total + current, 0);
  console.log("A new price sum added:", sum);
  // totalPrice = parseInt(totalPrice + d.price);
  $("#totalPrice").text(sum);



  //  for checking purpose

  
});

function addItem(id) {
  var tempCount = 1;
  var initQuantity = $(`#quantityId-${id}`).val();
  let initPrice = $(`#priceId-${id}`).text();
  var priceQuantity = (parseInt(initQuantity) + 1) * products[id].price;
  // var updateQuantity = (quantity += parseInt(initQuantity));
  $(`#quantityId-${id}`).val((tempCount += parseInt(initQuantity)));
  
  console.log("basic price: ", parseInt(initPrice));
  console.log("basic quantity and price: ", priceQuantity);
  console.log("totalQuantity--", totalQuantity);
  
  $(`#priceId-${id}`).text((parseInt(initQuantity) + 1) * products[id].price);
  // console.log(
  //   "total price with update quantity---",
  //   initQuantity * parseInt(initPrice)
  // );
  //  console.log("increment-----", (quantity += parseInt(initQuantity)));
  tempArr.push(products[id].price);
  console.log("id-----", tempArr);
  mergeArray = totalPriceArr.concat(tempArr);
  console.log("merge-----", mergeArray[id].quantity = tempCount);
  console.log("temp count-----", tempCount);
  console.log("merge array -----", mergeArray[id]);
  console.log("check quantity -----", (products[id].quantity = tempCount));
  sum = mergeArray.reduce((total, current) => total + current, 0);
  $("#totalPrice").text(sum);
  console.log("A new price sum added:", sum);
  console.log("all products array -----", products);
}

function deleteBtn(id) {
  // mergeArray.splice(id, 1);
  console.log("product index-----", products.splice(id,1))
  console.log("product id-----", id);
  products.map(del => console.log(del));
  console.log("merge array-----", mergeArray);
}
