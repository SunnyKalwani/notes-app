const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

// To check data whenever browser is opened
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

// Call function
showNotes();

// to store data in local storage of browser
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// To add note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "assets/delete.png";
  img.className = "delete";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// To remove note
notesContainer.addEventListener("click", function (e) {
  var targetElement = e.target;
  var parentElement = targetElement.parentElement;

  if (targetElement.className === "delete") {
    targetElement.parentElement.remove();
    updateStorage();
  } else if ((targetElement.className = "input-box")) {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", event=>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    } 

})