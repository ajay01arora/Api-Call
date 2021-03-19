function signUp()
{
    var  username = document.getElementById('username').value;
    var  password = document.getElementById('password').value; 
    var  cpassword = document.getElementById('cpassword').value; 
    
    if(password == cpassword)
    {
        var user = {"username": username, "password" : password};

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4)
            {
                window.location = "index.html";
            }
        }
      
        xhttp.open("POST", " http://localhost:3000/userdetails");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(user));
    }
}

document.getElementById("login").addEventListener("click", function(event)
{
    event.preventDefault()

    var  username = document.getElementById('username').value;
    var  password = document.getElementById('password').value; 
    
    if(username != "" && password != "")
    {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4)
            {
                sessionStorage.setItem('userDetails',this.responseText);
                window.location = "index2.html";
            }
        }
      var apiUrl = "http://localhost:3000/userdetails?username="+username+"&password="+password;
        xhttp.open("GET", apiUrl);
        xhttp.send();
    }
});