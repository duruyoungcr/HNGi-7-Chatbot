//variables
const talk = document.querySelector("#talk");
const send = document.querySelector("#send");
const userInput = document.querySelector("#user-input");
const chatboxOverlay = document.querySelector(".chatbox-overlay");
const chatbox = document.querySelector(".chatbox");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close-btn");

const questions = [
  "Whats your name ?",
  "What's your slack username ?",
  "What's your track?",
  "Which stage are you in ?",
  "What's your HNGi-7 ID ?",
];

const userDetails = {
  name: "",
  username: "",
  track: "",
  stage: "",
  id: "",
};

let index = 0;

//display bots questions
function showResponse(index) {
  let { name, username, track, stage, id } = userDetails;
  if (index == 0) {
    chatbox.innerHTML += `<div class="bot">${questions[index]}</div>`;
  } else if (index == 1) {
    chatbox.innerHTML += `<div class="bot">Hi, <span>${name}</span>, ${questions[index]}</div>`;
  } else if (index == 2) {
    chatbox.innerHTML += `<div class="bot">That's a nice username <span> ${name}</span> , ${questions[index]}</div>`;
  } else if (index == 3) {
    chatbox.innerHTML += `<div class="bot">Cool !, ${questions[index]}</div>`;
  } else if (index == 4) {
    chatbox.innerHTML += `<div class="bot">Okay, just one more i promise, ${questions[index]}</div>`;
  } else {
    chatbox.innerHTML += `<div class="bot">Nice talking to you <span>${name}</span>, Here's what i know <br> 
       You're <span>${name}</span>, HNG ID:<span> ${id}</span> , slack username:<span> ${username}</span> , on the <span>${track}</span> track, currently on stage<span> ${stage}</span>.</div>`;
  }
}
// display user input
function showUserResponse() {
  let response = userInput.value.trim();
  chatbox.innerHTML += `<div class="user">${response}</div>`;
  index++;
  updateDetails(response.toUpperCase(), index);
  setTimeout(() => {
    showResponse(index);
  }, 3000);
  userInput.value = "";
}

// store user input in object
function updateDetails(response, index) {
  switch (index) {
    case 1:
      userDetails.name = response;
      break;
    case 2:
      userDetails.username = response;
      break;
    case 3:
      userDetails.track = response;
      break;
    case 4:
      userDetails.stage = response;
      break;
    case 5:
      userDetails.id = response;
      break;
    default:
      break;
  }
}
//event listeners for the buttons
closeBtn.addEventListener("click", () => {
  chatboxOverlay.classList.remove("show-chat");
  container.classList.remove("hide");
});
send.addEventListener("click", () => showUserResponse());
talk.addEventListener("click", () => {
  container.classList.add("hide");
  chatboxOverlay.classList.add("show-chat");
  showResponse(0);
});

//keyboard support for the enter key
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && userInput.value !== "") {
    showUserResponse();
  }
});
