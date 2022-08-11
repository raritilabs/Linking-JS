function Validate() {
  var password = document.getElementById("Password").value;
  var confirmPassword = document.getElementById("ConfPassword").value;
  if (password != confirmPassword) {
      alert("Password Mismatch");
      return false;
  }
  return true;
}