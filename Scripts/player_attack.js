function createSpit () {
  var spitDiv = document.createElement("div");
  var spitImg = document.createElement("img");
  window.appendChild(spitDiv);
  spitDiv.appendChild(spitImg);
}



window.addEventListener("click", createSpit, false)
