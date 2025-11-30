// --- SPA NAVIGATION ---
const sectionLinks = document.querySelectorAll(".nav-section-link");
const sections = document.querySelectorAll(".app-section");

function showSection(id) {
  sections.forEach(sec => {
    sec.classList.toggle("active-section", sec.id === id);
  });

  sectionLinks.forEach(link => {
    link.classList.toggle(
      "active-link",
      link.dataset.target === id
    );
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

sectionLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;
    if (target) showSection(target);
  });
});

// home buttons
document.getElementById("btnTakeScreening").onclick = () =>
  showSection("screeningSection");
document.getElementById("btnStartAssessmentHome").onclick = () =>
  showSection("screeningSection");
document.getElementById("btnStartFreeAssessment").onclick = () =>
  showSection("screeningSection");

document.getElementById("btnTalkToAI").onclick = () =>
  showSection("aiSupportSection");
document.getElementById("btnChatNowHome").onclick = () =>
  showSection("aiSupportSection");

// --- SIMPLE FRONT-END CHAT DEMO ---
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

chatForm.addEventListener("submit", e => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  const userBubble = document.createElement("div");
  userBubble.className = "message-bubble message-user";
  userBubble.textContent = text;
  chatMessages.appendChild(userBubble);

  chatInput.value = "";

  setTimeout(() => {
    const aiBubble = document.createElement("div");
    aiBubble.className = "message-bubble message-ai";
    aiBubble.textContent =
      "Thank you for sharing that. Try to take a slow deep breath. " +
      "Would you like to tell me what has been most stressful for you today?";
    chatMessages.appendChild(aiBubble);
    chatMessages.parentElement.scrollTop =
      chatMessages.parentElement.scrollHeight;
  }, 600);

  chatMessages.parentElement.scrollTop =
    chatMessages.parentElement.scrollHeight;
});
