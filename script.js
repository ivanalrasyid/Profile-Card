profile = document.querySelector(".profile").classList;
  
        var view = function () {
          if (profile.contains("active")) {
            profile.remove("active");
          } else {
            profile.add("active");
          }
        };
