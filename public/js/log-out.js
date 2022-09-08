function logout() {

    // logout route
    fetch("/user/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        // home
        document.location.replace("/");
      })
      .catch((err) => console.log(err));
  }
  
document.querySelector("#logout-btn").addEventListener("click", logout);
  