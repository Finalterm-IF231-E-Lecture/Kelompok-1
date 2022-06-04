import $ from "jquery";

$("#character-2").hide();
export function arrow() {
  $("#character-1").toggle();
  $("#character-2").toggle();
}

export function inputgender() {
  if (document.getElementById("character-1").style.display === "none") {
    document.getElementById("gender").value = "girl";
    document.getElementById("selected-character").innerHTML = "Girl";
  } else if (document.getElementById("character-2").style.display === "none") {
    document.getElementById("gender").value = "boy";
    document.getElementById("selected-character").innerHTML = "Boy";
  }
}

export function remove() {
  $("#homePage").hide();
}
