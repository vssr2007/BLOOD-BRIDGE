document
  .getElementById("donor-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let bloodGroup = document.getElementById("blood-group").value;
    let location = document.getElementById("location").value;

    // Create an object to store the data
    let donor = {
      name: name,
      email: email,
      phone: phone,
      bloodGroup: bloodGroup,
      location: location,
    };

    // Save the data to local storage
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);
    localStorage.setItem("donors", JSON.stringify(donors));

    // Reset the form
    document.getElementById("donor-form").reset();
  });
