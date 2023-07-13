const container = document.getElementById("models");

function querySt(ji) {
  hu = window.location.search.substring(1);
  gy = hu.split("&");
  for (i = 0; i < gy.length; i++) {
    ft = gy[i].split("=");
    if (ft[0] == ji) {
      return ft[1];
    }
  }
}

if(querySt("show")) {
  $("#normal-content").hide();
  $("#privacy-content").show();
} else {
  $("#normal-content").show();
  $("#privacy-content").hide();
}

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