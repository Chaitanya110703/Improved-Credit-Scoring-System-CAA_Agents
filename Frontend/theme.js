 

//localStorage.setItem("data-bs-theme", "dark");

function switchToLight(){
    document.documentElement.setAttribute('data-bs-theme','light');
    document.querySelector("#lightBtn").classList.add("btn-secondary");
    document.querySelector("#lightBtn").classList.remove("btn-outline-secondary");
    document.querySelector("#darkBtn").classList.remove("btn-secondary");
    document.querySelector("#darkBtn").classList.add("btn-outline-secondary");
    localStorage.setItem("data-bs-theme", "light");

    $(".childViewBody").each(function(){
      $(this).removeClass("bg-body-tertiary");
    })
    $(".childViewBody").each(function(){
      $(this).addClass("bg-body-secondary");
    })

        //show-hide password wrapper span bg color switch
    document.querySelector("#eye-wrapper").classList.remove("bg-body-secondary");
    document.querySelector("#eye-wrapper").classList.add("bg-body-tertiary");
    
}    

function switchToDark(){
    document.documentElement.setAttribute('data-bs-theme','dark');
    document.querySelector("#darkBtn").classList.remove("btn-outline-secondary");
    document.querySelector("#darkBtn").classList.add("btn-secondary");
    document.querySelector("#lightBtn").classList.remove("btn-secondary");
    document.querySelector("#lightBtn").classList.add("btn-outline-secondary");
    localStorage.setItem("data-bs-theme", "dark");

    $(".childViewBody").each(function(){
      $(this).removeClass("bg-body-secondary");
    })
    $(".childViewBody").each(function(){
      $(this).addClass("bg-body-tertiary");
    })
    
    //show-hide password wrapper span bg color switch
    document.querySelector("#eye-wrapper").classList.remove("bg-body-tertiary");
    document.querySelector("#eye-wrapper").classList.add("bg-body-secondary");

}


  function setLastTheme(){
      if(localStorage.getItem("data-bs-theme")!=null){
         var theme=localStorage.getItem("data-bs-theme");
         if(theme=="light"){
            switchToLight();
         } else{
            switchToDark();
         }
      }
       else{
         if(document.documentElement.getAttribute("data-bs-theme")=="light")
         {
            switchToLight();
         } else{
            switchToDark();
         }
       }
  }
