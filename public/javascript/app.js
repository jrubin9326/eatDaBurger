$("#newBurger").on("submit", event => {
  event.preventDefault();

  let newBurger = {
    burger_name: $("#burger_name")
      .val()
      .trim(),
    devoured: false
  };
  console.log("hello");
  // Send the POST request.
  $.ajax("/api/burger", {
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
