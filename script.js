function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "Sushant1497";
  var passRef = "Nagar@123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
  alert("Login Successful")
  } else {
  alert("Check Your User Name And Password")
  }
};
function Verify() {
    var userRef1 = "Pawar1234";
    var passRef1 = "123456789";
    
    var user1 =  document.getElementById("username").value;
    var pass1 = document.getElementById("password").value;
    if (user1 == userRef1 || pass1 == passRef1) {
    alert("Login Successful")
    } else {
    alert("Check Your User Name And Password")
    }
  };