$("#newBurger").on("submit", event => {
  event.preventDefault();

  let newBurger = {
    burger_name: $("#burger_name")
      .val()
      .trim(),
    devoured: 0
  };
  console.log(newBurger);
  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(() => {
    // Reload the page to get the updated list
    location.reload();
  });
});

// $(".eatBurger").on("click", event => {
//   event.preventDefault();
//   let id = $(this).data("item_id");
//   // Send the PUT request.
//   $.ajax("/api/burger/" + id, {
//     type: "PUT",
//     data: { devoured: true }
//   }).then(function() {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });
