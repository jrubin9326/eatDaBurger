$(function() {
  $("#create-form").on("submit", event => {
    event.preventDefault();

    let newBurger = {
      name: $("#burger_name")
        .val()
        .trim()
      // devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".eatBurger").on("click", function(event) {
    let id = $(this).data("item_id");
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
