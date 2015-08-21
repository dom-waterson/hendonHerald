
var validateForm = function () {
    checkFields();
};

var checkFields = function () {
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    if (email.value === null || email.value === "") {
        //alertUser(email);
        email.className = "error";
    }

    if (message.value === null || message.value === "") {
        //alertUser(message);
        message.className = "error";
    }
};

var alertUser = function (field) {
    alert("You haven't added anything for the following field: " + field.name);
    //TODO : change css style around element
    field.className = "error";
    //TODO: add interval to remove style
    //window.setInterval(field.className="", 2000);
};



