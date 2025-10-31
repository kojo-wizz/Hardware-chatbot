async function getBotResponse(userMessage) {
  const response = await fetch('knowledgeBase.json');
  const data = await response.json();
  const input = userMessage.toLowerCase();

  // Search for similar questions
  const found = data.find(item => input.includes(item.question.toLowerCase().split(' ')[1]));
  
  if (found) {
    return found.answer;
  } else {
    return "🤖 Hmm... I’m not sure about that one. Try asking about battery, Wi-Fi, performance, or overheating issues.";
  }
}

async function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatOutput = document.getElementById("chat-output");
  const message = userInput.value.trim();
  if (!message) return;

  chatOutput.innerHTML += `<p class='user'><strong>You:</strong> ${message}</p>`;
  userInput.value = "";

  const reply = await getBotResponse(message);
  chatOutput.innerHTML += `<p class='bot'><strong>TechMate:</strong> ${reply}</p>`;
  chatOutput.scrollTop = chatOutput.scrollHeight;
}