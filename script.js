// const { document } = require("postcss");

$(function () {
  var $form = $("#form");

  $form.validate({
    rules: {
      name: {
        required: true, // name must be entered
      },
      email: {
        required: true, // email must be entered
        email: true, // email must be email
      },
      age: {
        required: true, // age must be entered
        onlyNumbers: true, // age field must contains only numbers
      },

      salary: {
        required: true, // salary must be entered
        onlyNumbers: true,
      },

      password: {
        required: true, // password must be entered
        noSpace: true,
        minlength: 8, // min length of password should be 8
      },

      confirmPassword: {
        required: true,
        noSpace: true,
      },
    },

    // messages to display when a particular rule is not satisfied
    messages: {
      name: {
        required: "Name is required", // when required rule is not satisfied then display the message
      },
      email: {
        required: "Email is required",
        email: "Email must be valid",
      },
      age: {
        required: "Enter the Age",
        onlyNumbers: "Field must contain only numbers",
      },

      salary: {
        required: "Enter the Salary",
        onlyNumbers: "Must contain only numbers",
      },

      password: {
        required: "Enter the password",
        noSpace: "Password must not contain any space",
        minlength: "Password must at least be of length 8",
      },

      confirmPassword: {
        required: "Password must be entered again",
        noSpace: "Password must not contain any space",
      },
    },
  });

  // add a method to the validator to check the all-numbers condition with the help of regex
  // the rule should be called onlyNumbers
  jQuery.validator.addMethod("onlyNumbers", function (value, element) {
    return /^\d+$/.test(value);
  });

  jQuery.validator.addMethod("noSpace", function (value, element) {
    return /^\w[a-zA-Z@#0-9.]*$/.test(value);
  });
});

// on submitting , checking if passwords are equal , if they are then redirecting to another page else showing an error message
document.getElementById("form").addEventListener("submit", function (e) {
  var s1 = document.getElementById("pass").value;
  var s2 = document.getElementById("confi").value;

  if (s1 != "" && s1 === s2) {
    e.preventDefault();
    window.location.assign("a.html");
    alert("You have Logged In!");
  } else if (s1 != "") {
    e.preventDefault();
    document.getElementById("pass").value = "";
    document.getElementById("confi").value = "";
    alert("Wrong Password");
  }
});
