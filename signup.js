document.querySelector("form").addEventListener("submit", signup)


   var  userData = JSON.parse(localStorage.getItem("regUser")) || []

    function signup ()
    {
        event.preventDefault();
        var userObj = {
      email : document.querySelector("#email").value,
      pass : document.querySelector("#pass").value
        }
       
        // console.log(userObj)
        userData.push(userObj)
        localStorage.setItem("regUser",JSON.stringify(userData))
        alert("Sign up succesfully")
        window.location.href = "login.html"
    }