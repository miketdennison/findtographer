$(document).ready(function () {
  // Get references to page elements
  var $exampleText = $("#example-text");
  var $exampleDescription = $("#example-description");
  var $submitBtn = $("#submit");
  var $exampleList = $("#example-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function (example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getExamples: function () {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
    deleteExample: function (id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshExamples gets new examples from the db and repopulates the list
  var refreshExamples = function () {
    API.getExamples().then(function (data) {
      var $examples = data.map(function (example) {
        var $a = $("<a>")
          .text(example.text)
          .attr("href", "/example/" + example.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": example.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $exampleList.empty();
      $exampleList.append($examples);
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function (event) {
    event.preventDefault();

    var example = {
      text: $exampleText.val().trim(),
      description: $exampleDescription.val().trim()
    };

    if (!(example.text && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(example).then(function () {
      refreshExamples();
    });

    $exampleText.val("");
    $exampleDescription.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function () {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function () {
      refreshExamples();
    });
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);

  //Materialize slider
  $('.slider').slider();

  //Parallax 
  $('.parallax').parallax();

  //Forms
  // $('select').formSelect();

  //Autocomplete field
  $('input.autocomplete').autocomplete({
    data: {
      "AL": null,
      "AK": null,
      "Google": 'https://placehold.it/250x250'
    },
  });

  //On click for I'm looking for a photographer button.
  $('#looking').click(function () {

    $("#questions").hide().html(`
    <hr>
    <h5>
    <blockquote>
    What artistic style do you like?:
    </blockquote>
    </h5>
  <div class="input-field col s12">
    <select multiple>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Traditional</option>
      <option value="2">Photojournalistic</option>
      <option value="3">Fine Art</option>
      <option value="4">Adventure</option>
      <option value="5">Aerial</option>
    </select>
  </div>

  <h5>
  <blockquote>
  Minimum experience do you prefer your photographer to have:
  </blockquote>
  </h5>
<div class="input-field col s12">
  <select multiple>
    <option value="" disabled selected>Choose your option</option>
    <option value="1">1-3 Years</option>
    <option value="2">3-5 Years</option>
    <option value="3">5+ Years</option>
  </select>
</div>


<h5>
<blockquote teal lighten-2>
How much are you willing to pay?:
</blockquote>
</h5>
<div class="input-field col s12">
<select multiple>
  <option value="" disabled selected>Choose your option</option>
  <option value="1">$</option>
  <option value="2">$$</option>
  <option value="3">$$$</option>
  <option value="4">$$$$</option>
  <option value="5">$$$$$</option>
</select>
</div>


<blockquote teal lighten-2>
<div class="row">
<h5>
<div class="input-field col s6">
What city do you live in?
</div>

</h5>
<h5>
<div class="input-field col s6">
What state do you live in?

</h5>
</blockquote>

<div class="row">
<form class="col s12">
    <div class="input-field col s6">
    <input id="city_name" type="text" class="validate">
    <label for="city_name">City</label>
    </div>
    <div class="input-field col s6">
      <input id="state_name" type="text" class="validate">
      <label for="state_name">State</label>
    </div>
    </form>
  </div>
  <hr>
`).fadeIn("slow");
    $('select').formSelect();
  });
})