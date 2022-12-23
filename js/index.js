import getDateString from "./date.js";
import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import * as bootstrap from "bootstrap";
import "../index.html";

$(document).ready(() => {
  // Print the current time
  $(".js-content").html(`It's ${getDateString()}`);
});

// Display the Bootstrap modal window
const myModal = new bootstrap.Modal(document.querySelector(".js-modal"));

myModal.show();
myModal.keyboard();
