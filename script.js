function sendToWhatsapp(){
    let number = "+254708167366";

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let quantity = document.getElementById("quantity").value;
    let deliveryOption = document.getElementById("delivery-option").value;
    let currentLocation = document.getElementById("current-location").value;




    var url = "https://wa.me/" + number + "?text="
    + "First-name :" +firstName+ "%0a"
    + "Last-name :" +lastName+ "%0a"
    + "Email :" +email+ "%0a"
    + "Phone number :" +phone+ "%0a"
    + "Quantity :" +quantity+ "%0a"
    + "Delivery Option :" +deliveryOption+ "%0a"
    + "Delivery Option :" +currentLocation+ "%0a"

    window.open(url, '_blank').focus();
  }
  
      

  window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });

 function reset(){
    const formToReset = document.getElementById('my-form');
    formToReset.addEventListener('submit', (e) => {
       e.preventDefault();
       formToReset.reset();
    });
 }
