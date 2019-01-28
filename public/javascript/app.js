$("#create-form").on("submit", event => {
  event.preventDefault();

  let newBurger = {
    name: $("#burger_name")
      .val()
      .trim(),
    devoured: false
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});
