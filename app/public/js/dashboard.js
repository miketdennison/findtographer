$("#dashboardbutton").click(function (event) {
    event.preventDefault();
    console.log("hello!")
    var email = localStorage.getItem("email");
    console.log(email)



    var userData = {
        email: email,
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        username: $("#username").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        travel: $("#travel").val(),
        about: $("#artistic").val(),
        experience: Number($("#experience").val()),
        price: Number($("#pricing").val()),
        website: $("#website").val(),
        picture: $("#picture").val()
    };


    // localStorage.getItem(userData.email),


    $("#registered").html('<div class="chip" style="color:#5cb85c";>Success!<i class="close material-icons">close</i></div>');



    $.ajax({ url: '/api/userupdate', method: 'PUT', data: userData }).then(function (responseServer) {
        console.log(responseServer);
    });


})