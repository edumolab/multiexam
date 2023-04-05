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
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth();
  var data=today.getDate()
  var hour=today.getHours();
  var minutes=today.getMinutes();

  var sana=`Topshirdi: ${hour}:${minutes}, ${data}.${month}.${year}`
  
  var result=`${username}+"<br>"+${sana}`

  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
    const links=['test01/index.html', 'test002/index.html', ]
	const random=Math.floor(Math.random()*links.length)
	var randomLink=links[random]
      window.location.href = randomLink;

      //send tg username
      const botApiToken = '6124695087:AAG0NprnUOPuxyaHA_79ZDazy870_007Dtk';
  const chatId = '1483919112';
  const url = `https://api.telegram.org/bot${botApiToken}/sendMessage?chat_id=${chatId}&text=${result}`;

  fetch(url)
    .then(response => {
      console.log("Sent Successfully!")
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    })
    .catch(error => {
      console.error(error);
    });
      return;
    }
    else if(username=="" || password==""){
        document.getElementById("alert").innerHTML="Please, enter credentials"
    }
    }

   
  
    // If the function hasn't returned yet, it means the entered password is invalid
    document.getElementById("alert").innerHTML="Invalid login credentials"; // Display error message
  });

