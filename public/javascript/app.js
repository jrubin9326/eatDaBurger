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

$(".eatBurger").on("click", event => {
  event.preventDefault();
  let item_id = $(this).data("item_id");
  console.log(item_id + "hello");
  console.log("here");
  // Send the PUT request.
  $.ajax("/api/burgers/" + item_id, {
    type: "PUT",
    data: { devoured: 1 }
  }).then(function() {
    // Reload the page to get the updated list
    location.reload();
  });
});
