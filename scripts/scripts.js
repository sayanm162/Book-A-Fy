// const form = document.querySelector('.firom');

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); //just to prevent the default html behaviour of trying to submit the form itself which involves a page refresh.
//   const fd = new FormData(form);
//   const obj = Object.fromEntries(fd);
//   const json = JSON.stringify(obj);
//   console.log(json);
// });
function downloadAsJSON() {
  var fname = document.getElementById("FirstName").value;
  var lname = document.getElementById("LastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phoneno").value;
  var cmt = document.getElementById("comment").value;

  var user_details = {
    FirstName: fname,
    LastName: lname,
    email: email,
    phoneno: phone,
    comment: cmt,
  };

  // Convert JSON object to string
  var json = JSON.stringify(user_details, null, 2);

  // Create a temporary anchor element
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(json)
  );
  element.setAttribute("download", "user_details.json");
  element.style.display = "none";

  // Append the element to the DOM and trigger the download
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
