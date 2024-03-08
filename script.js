function checkLeapYear() {
  const inputYear = document.getElementById("input").value;
  if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
    document.getElementById("result").innerHTML = "This is a leap year";
  } else {
    document.getElementById("result").innerHTML = "This is not a leap year";
  }
}
