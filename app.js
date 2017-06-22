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
  var theForm = document.createElement('newForm');

  function handleForm(event) {
    // event.preventDefault();
    console.log(event);
    var name = event.target.form.elements.dropDownMenu.value;//make all 4 console.log() into variables
    var quantity = parseFloat(event.target.form.elements.avgInput.value);
    var firstName = event.target.form.elements.minInput.value;
    var lastName = event.target.form.elements.maxInput.value;
    var address = event.target.form.elements.address.vale);

if(!name || !quantity || !firstName || !lastName || !address) {
  return null;
}//a bang statement to prevent allowance of empty field submits from adding a new store feature
event.target.form.elements.name.value = null;//making values to clear the input after another button is pressed
event.target.form.elements.quantity.value = null;
event.target.form.elements.firstName.value = null;
event.target.form.elements.lastName.value = null;
event.target.form.elements.address.value = null

//new Order(name, quantity, firstName, lastName, address) is much less text than the line below and does the same thing ???
return newestStore = new Store(newLocation, 14, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale);
}
theForm.addEventListener('place-order', handleForm);
var newestStore = handleForm(event);
if (!newestStore) {
alert ('All fields required!');
} else { //do we even need an else??


theForm.addEventListener('submit', );
function handleForm(event) {
  if () {
    localStorage.orderFormData = JSON.stringify(allOrders);
  } else {
    alert ''
  }
}
