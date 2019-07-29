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
        experience: $("#experience").val(),
        price: $("#pricing").val(),
    };


    // localStorage.getItem(userData.email),


$("#registered").html('<div class="chip" style="color:#5cb85c";>Success!<i class="close material-icons">close</i></div>');



    $.ajax({ url: '/api/userupdate', method: 'PUT', data: userData }).then(function (responseServer) {
        console.log(responseServer);    
    });


})


// firstname: {
//     type: Sequelize.STRING,
//         notEmpty: true
// },

// lastname: {
//     type: Sequelize.STRING,
//         notEmpty: true
// },

// username: {
//     type: Sequelize.TEXT
// },

// about: {
//     type: Sequelize.TEXT
// },

// email: {
//     type: Sequelize.STRING,
//         validate: {
//         isEmail: true
//     }
// },
// password: {
//     type: Sequelize.STRING,
//         allowNull: false
// },
// experience: {
//     type: Sequelize.INTEGER,
//         allowNull: true
// },
// price: {
//     type: Sequelize.STRING,
//         allowNull: true
// },
// city: {
//     type: Sequelize.STRING,
//         allowNull: true
// },
// state: {
//     type: Sequelize.STRING,
//         allowNull: true
// },
// travel: {
//     type: Sequelize.BOOLEAN,
//         allowNull: true
// },