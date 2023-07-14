window.addEventListener("beforeunload", function() {
    document.body.classList.add("fade-out");
  });
  
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.body.classList.remove("fade-out");
    }, 500);
  });
  
