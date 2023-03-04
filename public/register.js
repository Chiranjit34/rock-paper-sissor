document.getElementById("registerBtn").addEventListener("click", () => {

let userD = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  pass: document.getAnimations("pass").value,
};

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userD),
    };
let fetchRes = fetch("http://localhost:8080/users/register", options);
fetchRes
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  });

  window.location = "login.html";
});
