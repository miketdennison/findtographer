

//Materialize slider
$('.slider').slider();

//Parallax 
$('.parallax').parallax();

//Forms
// $('select').formSelect();




$('#signup').on('submit', function (event) {
  event.preventDefault();
  var email = $("input[name=email]").val();
  localStorage.setItem('email', email);
  var password = $("input[name=password]").val();

  var userInfo = {
    email: email,
    password: password
  }
  $.ajax({ url: '/signup', method: 'POST', data: userInfo }).then(function () {
    window.location.replace('/dashboard')
  })
})

//On click for I'm looking for a photographer button.
$('#looking').click(function () {
  $("#resultstable").html("");
  $("#questions").hide().html(`
    <hr>
    <h5>
    <blockquote>
    What artistic style do you like?:
    </blockquote>
    </h5>
  <div class="input-field col s12">
    <select id="style">
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
  <select id="experience">
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
<select id="price">
  <option value="" disabled selected>Choose your option</option>
  <option value="$">$</option>
  <option value="$$">$$</option>
  <option value="$$$">$$$</option>
  <option value="$$$$">$$$$</option>
  <option value="$$$$$">$$$$$</option>
</select>
</div>


<blockquote teal lighten-2>
<div class="row">
<h5>
<div class="input-field col s6">
What city are you getting married in?
</div>

</h5>
<h5>
<div class="input-field col s6">
What state are you getting married in?

</h5>
</blockquote>

<div class="row">
<form class="col s12">
    <div class="input-field col s6">
    <input id="city" type="text" class="validate">
    <label for="city">City</label>
    </div>
    <div class="input-field col s6">
      <input id="state" type="text" class="validate">
      <label for="state">State</label>
    </div>
    <input type="submit" id="submitresults" class="col s6 hoverable waves-effect waves-light btn-large">
    </form>
  </div>
 
  <div style="margin-bottom: 30px;">&nbsp;</div>
`).fadeIn("slow");
  $('select').formSelect();
});
// });

$(document).on("click", "#submitresults", function (event) {
  event.preventDefault();
  var userSearch = {
    city: $("#city").val(),
    state: $("#state").val(),
    travel: $("#travel").val(),
    experience: Number($("#experience").val()),
    price: Number($("#price").val().length),
  };


  getResults(userSearch);
});


function getResults(userSearch) {
  $.post("/api/results", userSearch, function (data) {
    var htmlRes = '<div class = "container responsive-table z-depth-5 hoverable">' +
      '<div class = "section white">' +
      '<table class = "highlight">' +
      '<thead>' +
      '<tr>' +
      '<td><strong>Picture</strong></td>' +
      '<td><strong>Username</strong></td>' +
      '<td><strong>City</strong></td>' +
      '<td><strong>State</strong></td>' +
      '<td><strong>Email</strong></td>' +
      '<td><strong>Experience</strong></td>' +
      '<td><strong>Price</strong></td>' +
      '<td><strong>Website</strong></td>' +
      '</tr>' +
      '</thead>' +
      '<tbody>';
    for (var i = 0; i < data.length; i++) {
      htmlRes += '<tr>'
      htmlRes += '<td> <img class="circle responsive-img" style="height: 50px; width: 50px;" alt="business_img" src="' + data[i].picture + '"</img></td>';
      htmlRes += '<td>' + data[i].username + '</td>';
      htmlRes += '<td>' + data[i].city + '</td>';
      htmlRes += '<td>' + data[i].state + '</td>';
      htmlRes += '<td>' + data[i].email + '</td>';
      htmlRes += '<td>' + data[i].experience + '+ years' + '</td>';
      htmlRes += '<td>' + '$'.repeat(data[i].price) + '</td>';
      htmlRes += '<td> <a target="_blank" href=https://' + data[i].website + '>Website</a></td></tr>';
      console.log(data[i]);
    }
    htmlRes += "</tbody>";
    $("#questions").html("");
    $("#resultstable").hide().html(htmlRes).fadeIn("slow");
    console.log(htmlRes);
  });

};