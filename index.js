var planets = [
  ["Sun", 27.9],
  ["Mercury", 0.377],
  ["Venus", 0.9032],
  ["Earth", 1],
  ["Moon", 0.1655],
  ["Mars", 0.3895],
  ["Jupiter", 2.64],
  ["Saturn", 1.139],
  ["Uranus", 0.917],
  ["Neptune", 1.148],
  ["Pluto", 0.059],
];

var select = document.getElementById("planetSelect");

for (var i = 0; i < planets.length; i++) {
  var plan = planets[i][0];
  var el = document.createElement("option");
  el.textContent = plan;
  el.value = plan;
  select.appendChild(el);
}

document.getElementById('calculateWeight').onclick = function handleClickEvent(ev) {
  alert('Hello!');

  function calculateWeight() {
    var userWeight = document.getElementById('userWeight').value;
  }
  var gravity = select[1]
  alert('On ' + select + ' you would weigh ' + (userWeight * gravity));

}

calculateWeight();
