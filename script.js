var content = "";
var quantity = 0;
var totalPrice = 0;
var totalQuantity = 1;
var dataArray = [];

const deleteBtn = function (id) {
  $("#productId-" + id).fadeOut(1000, function () {
    $(this).remove();
    console.log(dataArray.pop(id));
    const filterItem = dataArray.filter(function (item) {
      return (item.id === id);
    });
    totalPrice = totalPrice - filterItem[0].price;
    console.log(filterItem[0].price);
    $("#totalPrice").text(totalPrice);
    console.log(dataArray);
  });
  
  
  
};

$("#refresh_id").click(function () {
  location.reload(true);
});

$("#button-addon2").click(function (e) {
  let myData = $("#dataInput").val();
  if (myData === "") {
    alert("Enter a name");
  } else {
    const updateContent = `<div id="productId" class="col-md-4 mt-5">
                            <div id="product_wrapper" class="d-flex flex-column">
                                <p>Id: <span>23</span></p>
                                <p>Name: <span>${myData}</span></p>
                                <p>Price: <span>444</span></p>
                                <button onclick="deleteBtn()" type="button" class="btn btn-danger">Remove</button>
                            </div>
                          </div>`;
    $("#rows").append(updateContent);
    $("#dataInput").val("");
  }
});

$("#dataInput").on("keypress", function (e) {
  if (e.key === "Enter") {
    let myData = $("#dataInput").val();
    if (myData === "") {
      alert("Enter a name");
    } else {
      var arrLength = dataArray.length;
      const updateContent = `<div id="productId-${++arrLength}" class="col-md-4 mt-5">
                        <div id="product_wrapper" class="d-flex flex-column">
                            <p>Id: <span>23</span></p>
                            <p>Name: <span>${myData}</span></p>
                            <p>Price: <span>444</span></p>
                            <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>`;
      $("#rows").append(updateContent);
      console.log(updateContent);
      $("#dataInput").val("");
      dataArray.push({ "price": 444 });
      
      
      console.log(totalPrice);
      let restLengArr = dataArray.length - 5;
      let multiAdd = 444 * restLengArr
      finalPrice = (multiAdd + totalPrice);

      $("#totalPrice").text(finalPrice);
    }
  } 
});

$("#button-addon2").on("click", function (e) {
  let myData = $("#dataInput").val();
  if (myData === "") {
    var arrLength = dataArray.length;
    const updateContent = `<div id="productId-${++arrLength}" class="col-md-4 mt-5">
                        <div id="product_wrapper" class="d-flex flex-column">
                            <p>Id: <span>23</span></p>
                            <p>Name: <span>${myData}</span></p>
                            <p>Price: <span>444</span></p>
                            <button onclick="deleteBtn(${arrLength})" type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>`;
    $("#rows").append(updateContent);
    $("#dataInput").val("");
    dataArray.push({ price: 444 });

    console.log(totalPrice);
    let restLengArr = dataArray.length - 5;
    let multiAdd = 444 * restLengArr;
    finalPrice = multiAdd + totalPrice;

    $("#totalPrice").text(finalPrice);
  } else {
    alert("Enter a name");
    
  }
});



const addItem = function () {
  $("#quantityId").val(++totalQuantity);
  $("#quantityId").attr("value", totalQuantity);
  var currentQuantity = $("#quantityId").val();
  console.log(currentQuantity);
};

$.get("./fake_data.json", function (data) {
  dataArray = data;
  content = dataArray
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
                            id="quantityId"
                            value=${d.quantity}
                        />
                        <button id="addItem" onclick="addItem()" class="btn btn-outline-secondary" type="button">Add</button>
                    </div>
                    <p>Price: <span>${d.price}</span></p>
                    <button onclick="deleteBtn(${d.id})" type="button" class="btn btn-danger">Remove</button>
                </div>
            </div>`
    )
    .join("");

  $("#rows").html(content);
  dataArray.map((d) => {
    totalPrice = parseInt(totalPrice + d.price);
    $("#totalPrice").text(totalPrice);
    // console.log(totalPrice);
  });
});
