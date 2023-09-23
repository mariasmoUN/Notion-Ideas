let direction = "vertical";
if (direction === "vertical") {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>.navMenu a {display: block; text-align:left; margin:7px} i{width:15px; margin-right:5px} .navMenu{margin:3px}</style>`
  );
}

function navigate(id) {
  if (id == "home")
    window
      .open("https://www.notion.so/7174b3a65d064b44a234680dd749b564")
      .focus();
}
