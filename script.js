const exitBtn = document.getElementById("exitBtn");
const reasonBox = document.getElementById("reasonBox");
const sendBtn = document.getElementById("sendBtn");
const busyBtn = document.getElementById("busyBtn");
const reasonInput = document.getElementById("reasonInput");
const message = document.getElementById("message");

// Hide reason box until the exit button is clicked
reasonBox.style.display = "none";

// Show reason box when exit button is clicked
exitBtn.addEventListener("click", () => {
  reasonBox.style.display = "block";
});

// after the user wrote the reason and click send button it will be sent as a message to the other user
sendBtn.addEventListener("click", () => {
  const text = reasonInput.value.trim();
  if (!text) return;

  // send the user message in the chatbox
  message.innerHTML += `<div class="userMessage">This is an Automated message:I'm not responding because ${text}</div>`;

  // Clear input and hide reason box
  reasonInput.value = "";
  reasonBox.style.display = "none";

});

// Send "I'm busy, remind me later" automated message
busyBtn.addEventListener("click", () => {
    message.innerHTML += `<div class="userMessage">This is an Automated message: I'm busy right now, so I will reply to you later</div>`;
  
    reasonInput.value = "";
    reasonBox.style.display = "none";
  });
