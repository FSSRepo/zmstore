const container = document.getElementById("models");

function showRecent() {
  for (c = 0; c < recent.length; c++) {
    var model = recent[c];
    let cell = document.createElement("div");
    cell.innerHTML = `
      <span>
      <img src="${model.image}.png" alt="${model.name}"/>
      <div class="model_info "><p>${model.name}</p></div>
    </span>
    `;
    cell.className = "model_item";
    container.appendChild(cell);
  }
}
function showOthers() {
  var rows = Math.floor(recent.length / 2);
  container.style.setProperty('--grid-rows', rows + 1);
  container.style.setProperty('--grid-cols', 2);
  for (c = 0; c < recent.length; c++) {
    var model = recent[c];
    let cell = document.createElement("div");
    cell.innerHTML = `
      <div class="model_item">
        <span>
          <img src="${model.image}.png" alt="${model.name}"/>
        </span>
        <p>${model.name}</p>
      </div>
    `;
    container.appendChild(cell);
  }
}
showRecent();
$('.sidebarbtn').click(function(){
  $('.sidebarbtn').toggleClass("click");
  $('.sidebar').toggleClass("show");
});
$('.catbtn').click(function() {
  $('.catshow').toggleClass("show");
  $('.first').toggleClass("rotate");
});
$('.htubtn').click(function() {
  $('.htushow').toggleClass("show");
  $('.second').toggleClass("rotate");
});