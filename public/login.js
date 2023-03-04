document.getElementById("loginBtn").addEventListener("click", () => {

let userD = {
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
    //   console.log(d);
      localStorage.setItem("tokenStore", fetchRes.d.token);
  });

    window.location.href = "index.html";
})