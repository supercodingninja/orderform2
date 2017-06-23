'used strict'

// event.preventDefault();
var allOrders = [];

function Order(name, quantity, firstName, lastName, address) {
  this.name = name;
  this.quantity = quantity;
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
}

function handleEvent(event) {
  event.preventDefault();
  // var theForm = document.createElement('li');

  function handleForm(event) {
    // event.preventDefault();
    console.log(event);
    var dropDownMenu = event.target.form.elements.dropDownMenu.value;
    var quantity = parseInt(event.target.form.elements.quantityInput.value);
    var firstName = event.target.form.elements.firstNameInput.value;
    var lastName = event.target.form.elements.lastNameInput.value;
    var address = event.target.form.elements.addressInput.value;
    console.log('productName', event.target.form.elements.dropDownMenu.vale);
    console.log('quantity', parseInt(event.target.form.elements.quantityInput.value));
    console.log('firstName', event.target.form.elements.firstNameInput.value);
    console.log('lastName', event.target.form.elements.lastNameInput.value);


    if(!dropDownMenu || !quantity || !firstName || !lastName || !address) {
      return null;
    }//a bang statement to prevent allowance of empty field submits from adding a new store feature
    event.target.form.elements.dropDownMenu.value = null;//making values to clear the input after another button is pressed
    event.target.form.elements.quantityInput.value = null;
    event.target.form.elements.firstNameInput.value = null;
    event.target.form.elements.lastNameInput.value = null;
    event.target.form.elements.addressInput.value = null;

    allOrders.push(dropDownMenu, quantity, firstName, lastName, address);
    return localStorage.orderFormData = JSON.stringify(allOrders);
  }
  // orderFormData.addEventListener('submit', handleForm);
  // var newestOrder = handleForm(event);
  // if (!newestOrder) {
  //   alert ('All store information fields must have input!');
  // } else {
  //   orderFormData.render();
  // }

}

var buttonForPlaceOrder = document.getElementById('placeOrder');
buttonForPlaceOrder.addEventListener('click', handleEvent);

// theForm.addEventListener('place-order', handleForm);
// var newestStore = handleForm(event);
// if (!newestStore) {
// console.log('All fields required!');
// } else { //do we even need an else??
//   localStorage.orderFormData = JSON.stringify(allOrders);
// }
// }
// theForm.addEventListener('submit', );
// function handleForm(event) {
//   if () {
//     localStorage.orderFormData = JSON.stringify(allOrders);
//   } else {
//     alert ''
//   }
// }
