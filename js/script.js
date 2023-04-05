var users = [
    {username: "oyjamol", password: "1234"},
    {username: "user2", password: "12345"},
    {username: "user3", password: "123456"}
  ];

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      window.location.href = "test01/index.html";
      return;
    }
    else if(username=="" || password==""){
        document.getElementById("alert").innerHTML="Please, enter credentials"
    }
    }

   
  
    // If the function hasn't returned yet, it means the entered password is invalid
    document.getElementById("alert").innerHTML="Invalid login credentials"; // Display error message
  });
  
