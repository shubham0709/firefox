document.querySelector("form").addEventListener("submit", send)
     
    var logUsers = JSON.parse(localStorage.getItem("regUser"))
    console.log(logUsers)

    function send () {
        event.preventDefault();
      var emaildata = document.querySelector("#email").value;

      var flag = false;
      for(var i=0; i < logUsers.length; i++ )
      { 
          console.log(i)
          if(logUsers[i].email == emaildata 
              )
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
        alert("Reset Link has been successfully sent to your email")
        //  window.location.href = ""
                  
      }
      else
      {
       alert("Plz enter Your Registered Email id")
      }
    }
  