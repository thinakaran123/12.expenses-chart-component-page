fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0].amount);

    document.querySelectorAll(".bar").forEach((ele) => {
      ele.addEventListener("mouseenter", function () {
        valofbar = this.nextElementSibling.textContent;
        switch (valofbar) {
          case "mon":
            ele.previousElementSibling.textContent = "$" + json[0].amount;

            break;
          case "tue":
            ele.previousElementSibling.textContent = "$" + json[1].amount;
            break;
          case "wed":
            ele.previousElementSibling.textContent = "$" + json[2].amount;
            break;

          case "Thu":
            ele.previousElementSibling.textContent = "$" + json[3].amount;
            break;

          case "Fri":
            ele.previousElementSibling.textContent = "$" + json[4].amount;
            break;

          case "Sat":
            ele.previousElementSibling.textContent = "$" + json[5].amount;
            break;

          case "Sun":
            ele.previousElementSibling.textContent = "$" + json[6].amount;
            break;
        }
        this.previousElementSibling.classList.remove("hidden");
      });
      ele.addEventListener("mouseleave", function () {
        this.previousElementSibling.classList.add("hidden");
      });
    });
  });

today = new Date().getDay();
bars = document.querySelectorAll(".bar");

switch (today) {
  case 0:
    bars[6].classList.add("changecolor");

    break;
  case 1:
    bars[0].classList.add("changecolor");

    break;
  case 2:
    bars[1].classList.add("changecolor");

    break;
  case 3:
    bars[2].classList.add("changecolor");

    break;
  case 4:
    bars[3].classList.add("changecolor");

    break;
  case 5:
    bars[4].classList.add("changecolor");

    break;
  case 6:
    bars[5].classList.add("changecolor");

    break;
}
