import Github from "./github.js";
import ui from "./ui.js";
const github = new Github();
const Ui = new ui();

document.getElementById("user").addEventListener("keyup", get);

function get(e) {
  const name = e.target.value;
  if (name !== "") {
    github.getUser(name).then((data) => {
      if (data.profile.message === "Not Found") {
        Ui.showError(data.profile.message);
      } else {
        Ui.showProfile(data.profile);
      }
    });
  }
}
