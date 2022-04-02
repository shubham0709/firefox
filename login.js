document.querySelector("form").addEventListener("submit", login)
     
    var logUsers = JSON.parse(localStorage.getItem("regUser"))
    console.log(logUsers)
    

    function login () 
    {
        
        event.preventDefault();
      var enteredEmail = document.querySelector("#email").value;
      var enteredPass = document.querySelector("#num").value;

      var flag = false;
      for(var i=0; i < logUsers.length; i++ )
      { 
          console.log(i)
          if(logUsers[i].email == enteredEmail && 
              logUsers[i].pass == enteredPass)
              {
                   flag=true;
            
                  
              }
              else 
              { 
                  flag = false;
                  
              }
      }
      if (flag)
      {
        alert("You are Succesfully login")
         window.location.href = "index.html"
                  
      }
      else
      {
        alert("Plz enter Correct Details")
      }
    }